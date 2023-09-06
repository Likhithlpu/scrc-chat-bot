const conversationTree = {
  message: "Hey, how can I help you? Please choose an option by entering the corresponding number:\n1. Building Specific Data\n2. Vertical Specific Data\n3. Node Specific Data",

  options: [
    { text: "1", identifier :"b", next: "BuildingNode" },
    { text: "2", identifier :"v", next: "VerticalNode" },
    { text: "3", identifier :"n", next: "NodeSpecificNode" },
  ],
  nodes: {
    BuildingNode: {
      message: "You chose Building Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Weather Monitoring\n7. WiSun\n8. Crowd Monitoring",
      options: [
        { text: "1", identifier: "airQuality", next: "CommonBuildingNode" },
        { text: "2", identifier: "energyMonitoring", next: "CommonBuildingNode" },
        { text: "3", identifier: "solar", next: "CommonBuildingNode" },
        { text: "4", identifier: "smartroom", next: "CommonBuildingNode" },
        { text: "5", identifier: "weather", next: "CommonBuildingNode" },
        { text: "6", next: "CommonBuildingNode" },
        { text: "7", next: "CommonBuildingNode" },
        { text: "8", identifier: "crowdMonitoring", next: "CommonBuildingNode" },
        // ... other vertical options ...
      ],
    },
  
    CommonBuildingNode: {
      message: "Which building data do you need? Please select a building by entering the corresponding number:\n1. Vindhya\n2. Nilgiri\n3. Admin\n4. T-Hub\n5. Kohli\n6. Anand",
      options: [
        { text: "1", identifier: "VN", next: "FinalBuildingNode" },
        { text: "2", identifier: "NI", next: "FinalBuildingNode" },
        { text: "3", identifier: "AD", next: "FinalBuildingNode" },
        { text: "4", identifier: "TH", next: "FinalBuildingNode" },
        { text: "5", identifier: "KB", next: "FinalBuildingNode" },
        { text: "6", identifier: "AN", next: "FinalBuildingNode" },
        // ... other building options ...
      ],
    },
    
    FinalVerticalNode: {
      message: "The corresponding data is given. Which data do you need? Please choose an option by entering the corresponding number:\n1. Building Specific Data\n2. Vertical Specific Data\n3. Node Specific Data",
      options: [
        { text: "1", identifier :"b", next: "BuildingNode" },
        { text: "2", identifier :"v", next: "VerticalNode" },
        { text: "3", identifier :"n", next: "NodeSpecificNode" },
      ],
    },

    FinalBuildingNode: {
      message: "The corresponding data is given. Which data do you need? Please choose an option by entering the corresponding number:\n1. Building Specific Data\n2. Vertical Specific Data\n3. Node Specific Data",
      options: [
        { text: "1", identifier :"b", next: "BuildingNode" },
        { text: "2", identifier :"v", next: "VerticalNode" },
        { text: "3", identifier :"n", next: "NodeSpecificNode" },
      ],
    },
    
    VerticalNode: {
      message: "You chose Vertical Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Weather Monitoring\n7. WiSun\n8. Crowd Monitoring",
      options: [
        { text: "1", identifier: "airQuality", next: "CommonVerticalNode" },
        { text: "2", identifier: "energyMonitoring", next: "CommonVerticalNode" },
        { text: "3", identifier: "solar", next: "CommonVerticalNode" },
        { text: "4", identifier: "smartroom", next: "CommonVerticalNode" },
        { text: "5", identifier: "weather", next: "CommonVerticalNode" },
        { text: "6", next: "CommonVerticalNode" },
        { text: "7", next: "CommonVerticalNode" },
        { text: "8", identifier: "crowdMonitoring", next: "CommonVerticalNode" },
        // ... other vertical options ...
      ],
    },
    
    CommonVerticalNode: {
      message: "Which value do you need? Please select an option by entering the corresponding number:\n1. Average value\n2. Maximum value\n3. Minimum value",
      options: [
        { text: "1", identifier: "avg", next: "FinalVerticalNode" },
        { text: "2", identifier: "max", next: "FinalVerticalNode" },
        { text: "3", identifier: "min", next: "FinalVerticalNode" },
        // ... other value options ...
      ],
    },

    NodeSpecificNode:{
      message: "You chose Node Specific Data. Please select a vertical by entering the corresponding number:\n1. Air Quality\n2. Energy monitoring\n3. Solar\n4. Smart Room\n5. Weather\n6. Water Monitoring\n7. WiSun\n8. Crowd Monitoring",
      options: [
        { text: "1", identifier: "AQ", next: "NodeSp" },
        { text: "2", identifier: "EM", next: "EnergyMonitoringTypeNode" },
        { text: "3", identifier: "SL", next: "NodeSp" },
        { text: "4", identifier: "SR", next: "SmartRoomTypeNode" },
        { text: "5", identifier: "WE", next: "NodeSp" },
        { text: "6", identifier: "WM", next: "WaterMonitoringTypeNode" },
        { text: "7", identifier: "WN", next: "WiSunTypeNode" },
        { text: "8", identifier: "CM", next: "NodeSp" },
        // ... other vertical options ...
      ],

    },
    WaterMonitoringTypeNode: {
      message: "Choose the type:\n1. Water Distribution (WD)\n2. Water Flow (WF)",
      options: [
        { text: "1", identifier: "WM-WD", next: "NodeSp" },
        { text: "2", identifier: "WM-WF", next: "NodeSp" },
      ],
    },

    EnergyMonitoringTypeNode: {
      message: "Choose the type:\n1. Non-Critical (NC)\n2. Critical (CR)",
      options: [
        { text: "1", identifier: "EM-NC", next: "NodeSp" },
        { text: "2", identifier: "EM-CR", next: "NodeSp" },
      ],
    },

    SmartRoomTypeNode: {
      message: "Choose the type:\n1. AC \n2.AQ\n 3.EM\n 4.OC",
      options: [
        { text: "1", identifier: "SR-AC", next: "NodeSp" },
        { text: "2", identifier: "SR-AQ", next: "NodeSp" },
        { text: "3", identifier: "SR-EM", next: "NodeSp" },
        { text: "4", identifier: "SR-OC", next: "NodeSp" }
      ],
    },

    WiSunTypeNode: {
      message: "Choose the type:\n1. Lamp\n2. VA\n 3.VC\n4.OF \n5.Building node",
      options: [
        { text: "1", identifier: "WN-L0", next: "FloorNode" },
        { text: "2", identifier: "WN-VA", next: "FloorNode" },
        { text: "3", identifier: "WN-VC", next: "FloorNode" },
        { text: "4", identifier: "WN-OF", next: "FloorNode" },
        { text: "5", identifier: "WN", next: "NodeSp" },
      ],
    },





    NodeSp: {
      message: "Which building data do you need? Please select a building by entering the corresponding number:\n1. Vindhya\n2. Nilgiri\n3. Admin\n4. T-Hub\n5. Kohli\n6. Anand\n7.Palash Nivas\n8.Bakul Nivas\n9.South Mess\n10.North Mess\n11.Tarangini(Amphitheatre)\n 12.DayCare Centre\n13.Srujana Cultural Centre\n14.Samskar School\n15.Dining Hall(kadamba)\n16.Yuktahar Mess\n17.Pump House\n18.Kadamba Nivas\n19.Parijath Nivas\n20.Guest House\n21.Arogya Centre\n22.SubStation\n23.Pump Room\n24.KH node",
      options: [
        { text: "1", identifier: "VN", next: "FloorNode" },
        { text: "2", identifier: "NI", next: "FloorNode" },
        { text: "3", identifier: "AD", next: "FloorNode" },
        { text: "4", identifier: "TH", next: "FloorNode" },
        { text: "5", identifier: "KB", next: "FloorNode" },
        { text: "6", identifier: "AN", next: "FloorNode" },
        { text: "7", identifier: "PL", next: "FloorNode" },
        { text: "8", identifier: "BN", next: "FloorNode" },
        { text: "9", identifier: "SM", next: "FloorNode" },
        { text: "10", identifier: "NM", next: "FloorNode" },
        { text: "11", identifier: "TG", next: "FloorNode" },
        { text: "12", identifier: "DC", next: "FloorNode" },
        { text: "13", identifier: "SC", next: "FloorNode" },
        { text: "14", identifier: "SS", next: "FloorNode" },
        { text: "15", identifier: "DH", next: "FloorNode" },
        { text: "16", identifier: "YM", next: "FloorNode" },
        { text: "17", identifier: "PH", next: "FloorNode" },
        { text: "18", identifier: "KN", next: "FloorNode" },
        { text: "19", identifier: "PR", next: "FloorNode" },
        { text: "20", identifier: "SN", next: "FloorNode" },
        { text: "21", identifier: "AR", next: "FloorNode" },
        { text: "22", identifier: "SB", next: "FloorNode" },
        { text: "23", identifier: "PR", next: "FloorNode" },
        { text: "24", identifier: "KH", next: "FloorNode" }
        
        // ... other building options ...
      ],
    
  },
  FloorNode: {
    message: "Please select a floor by entering the corresponding number:\n1.Ground floor \n2. First floor\n3. Second floor\n4.Third floor\n5. Fourth floor\n6. Library\n7. Computer Lab\n8. Overhead Tank \n9.SS Tank \n10. Sump\n11.Parking\n 12.92node\n 13.93node\n 14.95",
    options: [
      { text: "1", identifier: "00", next: "FinalNode" },
      { text: "2", identifier: "01", next: "FinalNode" },
      { text: "3", identifier: "02", next: "FinalNode" },
      { text: "4", identifier: "03", next: "FinalNode" },
      { text: "5", identifier: "04", next: "FinalNode" },
      { text: "6", identifier: "90", next: "FinalNode" },
      { text: "7", identifier: "91", next: "FinalNode" },
      { text: "8", identifier: "96", next: "FinalNode" },
      { text: "9", identifier: "97", next: "FinalNode" },
      { text: "10", identifier: "98", next: "FinalNode" },
      { text: "11", identifier: "99", next: "FinalNode" },
      {text: "12", identifier: "92", next: "FinalNode" },
      {text: "13", identifier: "93", next: "FinalNode" },
      {text: "14", identifier: "95", next: "FinalNode" },
    // ... other floor options ...
    ],
  },

  FinalNode: {
    message: "Type the node ID:",
    input: true,
    next: "CommonNode",
  },

}
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
