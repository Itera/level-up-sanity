export default {
    title: "Sessions",
    name: "session",
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
        title: "Video",
        name: "video",
        type: "file",
        accept: "video/*,audio/*"
      },
      {
        title: 'Visualized / Overview', 
        name: 'vizualized',
        type: 'array',
        of: [{type: 'picture'}],
        layout: 'grid'
      },
      {
        title: 'Best practice', 
        name: 'bestPractice',
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: 'Tools',
        name: 'tools',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
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
        title: 'Sub Sessions / Detailed information', 
        name: 'subSessions',
        type: 'array',
        of: [{type: 'subsession'}]
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
        title: "Cources / Tutorials",
        name: "cources",
        type: "array",
        of: [{type: 'link'}]
      },
      {
        title: "Certifications",
        name: "certifications",
        type: "array",
        of: [{type: 'certify'}]
      },
      {
        title: 'Experts / Who to ask',
        name: 'experts',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        title: 'Last synchronized',
        name: 'lastSynced',
        description: 'Timestamp the session was last synced with external service. Not shown in studio.',
        type: 'datetime',
        hidden: true
      }
    ],
  };