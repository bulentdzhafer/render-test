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
    status: "Succeeded",
    data: {
      appId: body?.data?.appId,
      interactionId: body?.data?.interactionId,
      interactions: [
        {
          type: "SHOW",
          id: "dynamic-block",
          slate: {
            rootBlock: "root",
            blocks: [
              {
                id: "root",
                name: "Container",
                props: {
                  spacing: "md"
                },
                children: ["text"]
              },
              {
                id: "text",
                name: "text",
                props: {
                  format: "markdown",
                  value: "Block works from Render"
                }
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
