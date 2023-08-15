const conversationTree = {
    message: "Hey, how can I help you?",
    options: [
      { text: "Building Specific Data", next: "BuildingNode" },
      { text: "Vertical Specific Data", next: "VerticalNode" },
      { text: "Node Specific Data", next: "NodeSpecificNode" },
    ],
    nodes: {
      BuildingNode: {
        message: "You chose Building Specific Data. Which vertical do you need?",
        options: [
          { text: "Vertical 1", next: "Vertical1Node" },
          { text: "Vertical 2", next: "Vertical2Node" },
          { text: "Vertical 3", next: "Vertical3Node" },
          { text: "Vertical 1", next: "Vertical1Node" },
          { text: "Vertical 2", next: "Vertical2Node" },
          { text: "Vertical 3", next: "Vertical3Node" }
          // ... other vertical options ...
        ],
        nodes: {
          Vertical1Node: {
            message: "You selected Vertical 1. What data do you want for Vertical 1?",
            options: [
              { text: "Option 1", next: "Vertical1Option1Node" },
              { text: "Option 2", next: "Vertical1Option2Node" },
              // ... other options for Vertical 1 ...
            ],
          },
          Vertical2Node: {
            // ... nodes for Vertical 2 ...
          },
          Vertical3Node: {
            // ... nodes for Vertical 3 ...
          },
          // ... other vertical nodes ...
        },
      },
      VerticalNode: {
        // ... nodes for Vertical Specific Data ...
      },
      NodeSpecificNode: {
        // ... nodes for Node Specific Data ...
      },
    },
  };
  
  function extractMessages(tree) {
    const messages = [];
  
    function traverse(node) {
      if (node.message) {
        messages.push(node.message);
      }
      if (node.options) {
        for (const option of node.options) {
          traverse(option);
        }
      }
      if (node.nodes) {
        for (const key in node.nodes) {
          traverse(node.nodes[key]);
        }
      }
    }
  
    traverse(tree);
    return messages;
  }
  
  export { conversationTree, extractMessages };
  