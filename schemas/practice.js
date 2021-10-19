export default {
  title: "Practice",
  name: "practice",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Sponsor",
      name: "sponsor",
      type: "string",
    },
    {
      title: "Practice Lead",
      name: "lead",
      type: "reference",
      weak: false,
      to: [{ type: 'person' }],
    },
    {
      title: 'Summary', 
      name: 'summary',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: "Slack channels",
      name: "slacks",
      type: "array",
      of: [{type: 'string'}]
    },
    {
      title: "Visualized / Overview",
      name: "imagePractice",
      type: "image" 
    },
    {
      title: 'Main Areas', 
      name: 'mainAreas',
      type: 'array', 
      of: [{type: 'mainArea'}]
    },
    {
      title: "Relevant Links",
      name: "links",
      type: "array",
      validation: Rule => Rule.unique().error('Link must be unique!'),
      of: [{type: 'link'}]
     },
     {
      title: "To do",
      name: "toDo",
      type: "array",
      of: [{type: 'string'}]
    },
  ]
};
