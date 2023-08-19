const conversationTree = {
  message: "Hey, how can I help you? Please choose an option by entering the corresponding number:\n1. Building Specific Data\n2. Vertical Specific Data\n3. Node Specific Data",

  options: [
    { text: "1", next: "BuildingNode" },
    { text: "2", next: "VerticalNode" },
    { text: "3", next: "NodeSpecificNode" },
  ],
  nodes: {
    BuildingNode: {
      message: "You chose Building Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Weather Monitoring\n7. WiSun\n8. Crowd Monitoring",
      options: [
        { text: "1", next: "CommonBuildingNode" },
        { text: "2", next: "CommonBuildingNode" },
        { text: "3", next: "CommonBuildingNode" },
        { text: "4", next: "CommonBuildingNode" },
        { text: "5", next: "CommonBuildingNode" },
        { text: "6", next: "CommonBuildingNode" },
        { text: "7", next: "CommonBuildingNode" },
        { text: "8", next: "CommonBuildingNode" },
        // ... other vertical options ...
      ],
    },
  
    CommonBuildingNode: {
      message: "Which building data do you need? Please select a building by entering the corresponding number:\n1. Vindhya\n2. Nilgiri\n3. Admin\n4. T-Hub\n5. Kohli\n6. Anand",
      options: [
        { text: "1", next: "CommonNode" },
        { text: "2", next: "CommonNode" },
        { text: "3", next: "CommonNode" },
        { text: "4", next: "CommonNode" },
        { text: "5", next: "CommonNode" },
        { text: "6", next: "CommonNode" },
        // ... other building options ...
      ],
    },
    
    CommonNode: {
      message: "The corresponding data is given. Which data do you need? Please choose an option by entering the corresponding number:\n1. Building Specific Data\n2. Vertical Specific Data\n3. Node Specific Data",
      options: [
        { text: "1", next: "BuildingNode" },
        { text: "2", next: "VerticalNode" },
        { text: "3", next: "NodeSpecificNode" },
      ],
    },
    
    VerticalNode: {
      message: "You chose Vertical Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Weather Monitoring\n7. WiSun\n8. Crowd Monitoring",
      options: [
        { text: "1", next: "CommonVerticalNode" },
        { text: "2", next: "CommonVerticalNode" },
        { text: "3", next: "CommonVerticalNode" },
        { text: "4", next: "CommonVerticalNode" },
        { text: "5", next: "CommonVerticalNode" },
        { text: "6", next: "CommonVerticalNode" },
        { text: "7", next: "CommonVerticalNode" },
        { text: "8", next: "CommonVerticalNode" },
        // ... other vertical options ...
      ],
    },
    
    CommonVerticalNode: {
      message: "Which value do you need? Please select an option by entering the corresponding number:\n1. Average value\n2. Maximum value\n3. Minimum value",
      options: [
        { text: "1", next: "CommonNode" },
        { text: "2", next: "CommonNode" },
        { text: "3", next: "CommonNode" },
        // ... other value options ...
      ],
    },
    NodeSpecificNode:{
      message: "You chose Node Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Weather Monitoring\n7. WiSun\n8. Crowd Monitoring",
      prompt: "SelectVertical",
      options: [
        { text: "1", next: "NodeSp" },
        { text: "2", next: "NodeSp" },
        { text: "3", next: "NodeSp" },
        { text: "4", next: "NodeSp" },
        { text: "5", next: "NodeSp" },
        { text: "6", next: "NodeSp" },
        { text: "7", next: "NodeSp" },
        { text: "8", next: "NodeSp" },
        // ... other vertical options ...
      ],

    },
    NodeSp: {
      message: "Which building data do you need? Please select a building by entering the corresponding number:\n1. Vindhya\n2. Nilgiri\n3. Admin\n4. T-Hub\n5. Kohli\n6. Anand",
      prompt: "SelectBuilding",
      options: [
        { text: "1", next: "NodeSp1" },
        { text: "2", next: "NodeSp1" },
        { text: "3", next: "NodeSp1" },
        { text: "4", next: "NodeSp1" },
        { text: "5", next: "NodeSp1" },
        { text: "6", next: "NodeSp1" },
        // ... other building options ...
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