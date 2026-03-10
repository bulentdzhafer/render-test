import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bettermode Render app is running");
});

app.post("/", (req, res) => {
  const body = req.body || {};

  console.log("Incoming request:", JSON.stringify(body, null, 2));

  return res.status(200).json({
    type: "INTERACTION",
    status: "SUCCEEDED",
    data: {
      appId: body?.data?.appId,
      interactionId: body?.data?.interactionId,
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
                props: "{\"padding\":\"md\"}",
                children: "[\"header\",\"content\"]"
              },
              {
                id: "header",
                name: "Card.Header",
                props: "{\"title\":\"Render Test\"}",
                children: "[]"
              },
              {
                id: "content",
                name: "Card.Content",
                props: "{\"className\":\"space-y-3\"}",
                children: "[\"text1\"]"
              },
              {
                id: "text1",
                name: "Text",
                props: "{\"value\":\"Block works from Render\",\"size\":\"lg\"}",
                children: "[]"
              }
            ]
          }
        }
      ]
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
