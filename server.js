const response = {
  type: "INTERACTION",
  status: "SUCCEEDED",
  data: {
    interactions: [
      {
        type: "SHOW",
        id: "$interactionId$",
        slate: {
          rootBlock: "root",
          blocks: [
            {
              id: "root",
              name: "Card",
              children: "[\"header\",\"content\"]",
              props: "{\"padding\":\"lg\"}"
            },
            {
              id: "header",
              name: "Card.Header",
              children: "[\"title\"]",
              props: "{}"
            },
            {
              id: "title",
              name: "Text",
              children: "[]",
              props: "{\"value\":\"INTERACTION TEST\"}"
            },
            {
              id: "content",
              name: "Card.Content",
              children: "[\"text\"]",
              props: "{}"
            },
            {
              id: "text",
              name: "Text",
              children: "[]",
              props: "{\"value\":\"Bettermode → Render → Dynamic Block works!\"}"
            }
          ]
        }
      }
    ]
  }
};
