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
                props: "{\"title\":\"Leaderboard\"}",
                children: "[]"
              },
              {
                id: "content",
                name: "Card.Content",
                props: "{\"className\":\"space-y-3 font-bold\"}",
                children: "[\"link_0\",\"link_1\"]"
              },
              {
                id: "link_0",
                name: "Link",
                props: "{\"href\":\"#\",\"variant\":\"neutral\",\"className\":\"hover:bg-surface-hovered\"}",
                children: "[\"row_0\"]"
              },
              {
                id: "row_0",
                name: "Container",
                props: "{\"size\":\"xs\",\"padding\":\"sm\",\"direction\":\"horizontal\",\"className\":\"lb-link\"}",
                children: "[\"rank_0\",\"name_0\",\"score_0\"]"
              },
              {
                id: "rank_0",
                name: "Text",
                props: "{\"value\":\"1\",\"size\":\"lg\"}",
                children: "[]"
              },
              {
                id: "name_0",
                name: "Text",
                props: "{\"value\":\"Name Hidden\",\"size\":\"md\"}",
                children: "[]"
              },
              {
                id: "score_0",
                name: "Text",
                props: "{\"value\":\"Hidden\",\"size\":\"md\"}",
                children: "[]"
              },
              {
                id: "link_1",
                name: "Link",
                props: "{\"href\":\"#\",\"variant\":\"neutral\",\"className\":\"hover:bg-surface-hovered\"}",
                children: "[\"row_1\"]"
              },
              {
                id: "row_1",
                name: "Container",
                props: "{\"size\":\"xs\",\"padding\":\"sm\",\"direction\":\"horizontal\",\"className\":\"lb-link\"}",
                children: "[\"rank_1\",\"name_1\",\"score_1\"]"
              },
              {
                id: "rank_1",
                name: "Text",
                props: "{\"value\":\"2\",\"size\":\"lg\"}",
                children: "[]"
              },
              {
                id: "name_1",
                name: "Text",
                props: "{\"value\":\"Name Hidden\",\"size\":\"md\"}",
                children: "[]"
              },
              {
                id: "score_1",
                name: "Text",
                props: "{\"value\":\"Hidden\",\"size\":\"md\"}",
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
