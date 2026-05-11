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
