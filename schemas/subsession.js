export default {
    title: "SubSessions",
    name: "subsession",
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
        title: "Visualized / Images",
        name: "imageSubSession",
        type: 'array',
        of: [{type: 'picture'}]
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
        description: 'Add keywords that describes the session.',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags'
        }
      },
      {
        title: 'Last synchronized',
        name: 'lastSynced',
        description: 'Timestamp the subsession was last synced with external service. Not shown in studio.',
        type: 'datetime',
        hidden: true
      }
    ]
}