import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bettermode Interaction Test - ONLINE");
});

app.post("/api/bettermode", (req, res) => {
  console.log("========== INTERACTION REQUEST ==========");
  console.log(JSON.stringify(req.body, null, 2));

  const blocks = [
    {
      id: "root",
      name: "Card",
      children: JSON.stringify(["content"]),
      props: JSON.stringify({
        padding: "lg"
      })
    },
    {
      id: "content",
      name: "Card.Content",
      children: JSON.stringify(["title", "text"]),
      props: JSON.stringify({})
    },
    {
      id: "title",
      name: "Text",
      children: JSON.stringify([]),
      props: JSON.stringify({
        value: "INTERACTION TEST"
      })
    },
    {
      id: "text",
      name: "Text",
      children: JSON.stringify([]),
      props: JSON.stringify({
        value: "Hello from Render! Bettermode Dynamic Block is connected."
      })
    }
  ];

  const response = {
    type: "INTERACTION",
    status: "SUCCEEDED",
    data: {
      interactions: [
        {
          type: "SHOW",
          id: req.body?.data?.interactionId || "$interactionId$",
          slate: {
            rootBlock: "root",
            blocks: blocks
          }
        }
      ]
    }
  };

  console.log("========== INTERACTION RESPONSE ==========");
  console.log(JSON.stringify(response, null, 2));

  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
