app.post("/api/bettermode", (req, res) => {
  console.log("INTERACTION REQUEST:");
  console.log(JSON.stringify(req.body, null, 2));

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
                children: "[\"content\"]",
                props: "{\"padding\":\"md\"}"
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
                props: "{\"value\":\"Test from Render\"}"
              }
            ]
          }
        }
      ]
    }
  };

  console.log("INTERACTION RESPONSE:");
  console.log(JSON.stringify(response, null, 2));

  res.status(200).json(response);
});
