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
    status: "Succeeded",
    data: {
      appId,
      interactionId,
      interactions: [
        {
          type: "SHOW",
          id: "aliyapp-dynamic-block",
          slate: {
            rootBlock: "aliyapp-root",
            blocks: [
              {
                id: "aliyapp-root",
                name: "Container",
                children: ["iframe-child"]
              },
              {
                id: "iframe-child",
                name: "Iframe",
                props: {
                  src: "https://aliyapp.azurewebsites.net/gateway/embed?blockKey=chat&actorId=StWLB81F0U",
                  height: 720
                },
                children: []
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
