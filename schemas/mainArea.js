export default {
    title: "Main Area",
    name: "mainArea",
    type: "object",
    fields: [
      {
        title: "Name",
        name: "name",
        type: "string",
      },
      {
        title: 'Description', 
        name: 'text',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: 'Visualized / Overview', 
        name: 'vizualized',
        type: 'array',
        of: [{type: 'picture'}],
        layout: 'grid'
      },
      {
        title: 'Sessions', 
        name: 'sessions',
        type: 'array',
        of: [{type: 'session'}]
      },
      {
        title: "Attachments",
        name: "attachments",
        type: "array",
        of: [{type: 'attachment'}]
      },
      {
        title: "Relevant Links",
        name: "links",
        type: "array",
        of: [{type: 'link'}]
      },
      {
        title: 'Keywords',
        name: 'keywords',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        title: 'Trend / Future / Vision', 
        name: 'trend',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: 'Departments',
        name: 'departments',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'All', value: '*'},
            {title: 'Norway', value: 'NO'},
            {title: 'Denmark', value: 'DK'},
            {title: 'Ukrania', value: 'UA'},
            {title: 'Slovakia', value: 'SK'}
          ]
        }
      }
    ]
  };