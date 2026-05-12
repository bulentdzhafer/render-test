import express from "express";

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bettermode Render app is running");
});

app.post("/", (req, res) => {
  const body = req.body || {};

  console.log("Incoming body:", JSON.stringify(body, null, 2));

  const appId = body?.data?.appId;
  const interactionId = body?.data?.interactionId;

  const responsePayload = {
    type: "INTERACTION",
    status: "SUCCEEDED",
    data: {
      appId,
      interactionId,
      interactions: [
        {
          type: "SHOW",
          id: interactionId,
          slate: {
            rootBlock: "root",
            blocks: [
              {
                id: "root",
                name: "Container",
                props: JSON.stringify({
                  direction: "vertical",
                  padding: "md"
                }),
                children: JSON.stringify(["text-child"])
              },
              {
                id: "text-child",
                name: "Text",
                props: JSON.stringify({
                  value: "Dynamic block rendered successfully",
                  size: "lg"
                }),
                children: JSON.stringify([])
              }
            ]
          }
        }
      ]
    }
  };

  console.log("Response payload:", JSON.stringify(responsePayload, null, 2));

  return res.status(200).json(responsePayload);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
