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

#Make edits to template according to excel file and export to output.json
outfile=open(path+'\\Terms.json','w')
terms=len(abbr)
for i in range(len(abbr)):
    if(abbr['Term'][i]=='nan'):
        terms-=1
        continue
    out=template
    out['term']=replace_value(abbr['Term'][i])
    out['_id']=replace_value(abbr['ID'][i])
    out['explanation'][0]['children'][0]['text']=replace_value(abbr['Explanation'][i])
    out['longHand']=replace_value(abbr['Long hand'][i])
    json.dump(out, outfile)
    outfile.write('\n')
print(str(terms)+" terms have been translated to JSON file.")
outfile.close()
