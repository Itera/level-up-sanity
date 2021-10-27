# -*- coding: utf-8 -*-
"""
Created on Wed Oct 20 15:56:22 2021

@author: hakon.bolviken
"""

#Program for exporting excel-file to json in a manner that Sanity can later use for importation. Note that this 
#program does not do the importing, merely the conversion from excel to a particularly set-up json.

import json
import pandas as pd
import os

#function to handle nan's in the excel document
def replace_value(value):
    if(value=='nan'):
        return ''
    return value

#Function for cases where the output in json should be an array with the different input in the excel, possibly several
def Split_Replace(Exc_title, json_title, out, abbr):
    if(Exc_title in abbr.columns):
        val=replace_value(abbr[Exc_title][i])
        if(val==""):
            del out[json_title]
        else:
            out[json_title]=val.split(',')   
    return out

#Special case where a more complicated string is needed for each use, and there might be several inputs.
def Relate_Replace(Exc_title, json_title, out, abbr, nameID):
    if(Exc_title in abbr.columns):
        val=replace_value(abbr[Exc_title][i])
        if(val==""):
            del out[json_title]
        else:
            val=val.split(',')
            insert=[]
            for j in range(len(val)):
                insert0=out[json_title][0].copy()
                insert0['_ref']=nameID[val[j]]
                insert.append(insert0)
                del insert0

            out[json_title]=insert    
    return out

#Set which sheet is to be exported. TODO: make a for loop to cycle through all sheets
sheet=4

#Find path to current folder, where this file plus all input and output files should be
path=os.path.dirname(os.path.abspath(__file__))

#Open Excel document containing dictionary
exc=pd.ExcelFile(path+'\\Glossary compilations.xlsx')
names=exc.sheet_names
print("Sheet names: ",names)
abbr=exc.parse(names[sheet]).astype(str) 
exc.close()
print("Sheet Categories: ",abbr.columns)

#Open template for the json file
f=open(path+'\\template2.json')
template=json.load(f)
f.close()

#Open Practice name to ID document

f=open(path+'\\PracticeName_to_ID.json')
nameId=json.load(f)
f.close()

#Make edits to template according to excel file and export to output.json
outfile=open(path+'\\Terms.json','w')
terms=len(abbr)
for i in range(len(abbr)):
    if(abbr['Term'][i]=='nan'):
        terms-=1
        continue
    out=template.copy()
    out['term']=replace_value(abbr['Term'][i])
    out['_id']=replace_value(abbr['ID'][i])
    out['explanation'][0]['children'][0]['text']=replace_value(abbr['Explanation'][i])
    out['longHand']=replace_value(abbr['Long hand'][i])
    out=Split_Replace('Related to Itera', 'internItera',out, abbr)
    out=Split_Replace('Language', 'language', out, abbr)
    out=Split_Replace('Related to Domain', 'domains', out, abbr)
    out=Split_Replace('Tags', 'tags', out, abbr)
    out=Split_Replace('Synonyms', 'synonyms', out, abbr)
    
    out=Relate_Replace('Related to Practice', 'practices', out, abbr, nameId)

    json.dump(out, outfile)
    outfile.write('\n')
print(str(terms)+" terms have been translated to JSON file.")
outfile.close()
