import express from "express";

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bettermode Interaction Test");
});

app.post("/api/bettermode", (req, res) => {
  console.log("INTERACTION REQUEST:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).json({
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
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
