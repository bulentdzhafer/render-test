import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bettermode Render app is running");
});

app.post("/", (req, res) => {
  const body = req.body || {};

  return res.status(200).json({
    type: "INTERACTION",
    status: "SUCCEEDED",
    data: {
      appId: body?.data?.appId,
      interactionId: body?.data?.interactionId,
      interactions: [
        {
          type: "SHOW",
          id: body?.data?.interactionId,
          slate: {
            rootBlock: "root",
            blocks: [
              {
                id: "root",
                name: "Container",
                props: {
                  direction: "vertical",
                  padding: "md"
                },
                children: ["text1"]
              },
              {
                id: "text1",
                name: "Text",
                props: {
                  value: "Block works from Render",
                  size: "lg"
                },
                children: []
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
