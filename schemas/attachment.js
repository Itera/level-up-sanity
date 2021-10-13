export default {
    title: "Attachments",
    name: "attachment",
    type: "object",
    fields: [
        {
            title: "What is it about?",
            name: "summary",
            type: "string"
        },
        {
            title: "File",
            name: "fileName",
            type: "file",
            accept: ".doc,.docx,.pdf,.xls,video/*,audio/*"
        }
    ]
  }