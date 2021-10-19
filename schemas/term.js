export default {
    title: "Dictionary",
    name: "terms",
    type: "document",
    fields: [
      {
        title: "Term",
        name: "term",
        type: "string",
      },
      {
        title: 'Long hand', 
        name: 'longHand',
        type: "string",
      },
      {
        title: 'Explanation', 
        name: 'explanation',
        type: 'array', 
        of: [{type: 'block'}]
      },
      {
        title: "Relate to practice",
        name: "practices",
        type: 'array',
        of: [
            {
              type: "reference",
              weak: false,
              to: [{ type: 'practice' }]
            }
        ]
      },
      {
        title: "Relate to domain / area",
        name: "domains",
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'All', value: 'All'},
            {title: 'Bank / Finance', value: 'Bank / Finance'},
            {title: 'Public admin', value: 'Public admin'},
            {title: 'IKT/IT', value: 'IKT/IT'},
            {title: 'Industry', value: 'Industry'},
            {title: 'Retail', value: 'Retail'}
          ]
        }
      },
    
      {
        title: "Relate to Itera",
        name: "internItera",
        type: 'array',
        of: [{type: 'string'}],
        options: {
            list: [
              {title: 'HR', value: 'HR'},
              {title: 'Sale', value: 'Sale'},
              {title: 'Intern', value: 'Intern'}
            ]
          }
      }
    ,
      {
        title: 'Tags related to the term',
        name: 'tags',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        title: 'Synonyms',
        name: 'synonyms',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        title: 'Language',
        name: 'language',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'All', value: '*'},
            {title: 'English', value: 'eng'},
            {title: 'Norwegian', value: 'nor'},
            {title: 'Danish', value: 'den'},
            {title: 'Ukranian', value: 'ukr'},
            {title: 'Slovakien', value: 'slo'}
          ]
        }
      }
    ]
  };
  