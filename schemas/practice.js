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
      title: "Practice Lead",

      name: "lead",

      type: "reference",

      to: [{ type: "person" }],
    },
    {
      title: "Image",

      name: "image",

      type: "image",
    },
    {
      title: "Relevant Links",

      name: "links",

      type: "array",

      of: [
        {
          title: "Link",

          name: "link",

          type: "object",

          fields: [
            {
              title: "Name",

              name: "name",

              type: "string",
            },
            {
              url: "URL",

              name: "url",

              type: "url",
            },
          ],
        },
      ],
    },
  ],
};
