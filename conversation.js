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
        { text: "Air Quality", next: "CommonBuildingNode" },
        { text: "Energy monitoring", next: "CommonBuildingNode" },
        { text: "Solar", next: "CommonBuildingNode" },
        { text: "Smart Room", next: "CommonBuildingNode" },
        { text: "Weather", next: "CommonBuildingNode" },
        { text: "Weather Monitoring", next: "CommonBuildingNode" },
        { text: "WiSun", next: "CommonBuildingNode" },
        { text: "Crowd Monitoring", next: "CommonBuildingNode" },
        // ... other vertical options ...
      ],
    },
    CommonBuildingNode: {
      message: "Which building data do you need?",
      options: [
        { text: "Vindhya", next: "CommonNode" },
        { text: "Nilgiri", next: "CommonNode" },
        { text: "Admin", next: "CommonNode" },
        { text: "T-Hub", next: "CommonNode" },
        { text: "Kohli", next: "CommonNode" },
        { text: "Anand", next: "CommonNode" },
        // ... other building options ...
      ],
    },
   CommonNode: {
      message: "The corresponding data is given. Which data do you need?",
      options: [
        { text: "Vertical Specific Data", next: "VerticalNode" },
        { text: "Building Specific Data", next: "BuildingNode" },
      ],
    },
    VerticalNode: {
      message: "You chose Vertical Specific Data. Which vertical do you need?",
      options: [
        { text: "Air Quality", next: "CommonVerticalNode" },
        { text: "Energy monitoring", next: "CommonVerticalNode" },
        { text: "Solar", next: "CommonVerticalNode" },
        { text: "Smart Room", next: "CommonVerticalNode" },
        { text: "Weather", next: "CommonVerticalNode" },
        { text: "Weather Monitoring", next: "CommonVerticalNode" },
        { text: "WiSun", next: "CommonVerticalNode" },
        { text: "Crowd Monitoring", next: "CommonVerticalNode" },
        // ... other vertical options ...
      ],
    },
    CommonVerticalNode: {
      message: "Which value do you need?",
      options: [
        { text: "Average value", next: "CommonNode" },
        { text: "Maximum value", next: "CommonNode" },
        { text: "Minimum value", next: "CommonNode" },
        // ... other value options ...
      ],
    },
    
  },
};

// rest of your code...


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