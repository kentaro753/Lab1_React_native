import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Lab1_Part1_BT1 from "./src/Lab1/Part1_BT1";
import Lab1_Part1_BT2 from "./src/Lab1/Part1_BT2";
import Lab1_Part1_BT3 from "./src/Lab1/Part1_BT3";
import Lab1_Part1_BT4 from "./src/Lab1/Part1_BT4";
import Lab1_Part1_BT5 from "./src/Lab1/Part1_BT5";
import Lab1_Part1_BT6 from "./src/Lab1/Part1_BT6";
import Lab1_Part1_BT7 from "./src/Lab1/Part1_BT7";
import Lab1_Part1_BT8 from "./src/Lab1/Part1_BT8";
import Lab1_Part2_Calculator from "./src/Lab1/Part2_Calculator";
import Excersise1 from "./src/excersise1";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

const App = () => {
  // const [index, setIndex] = useState(0);
  // const [routes] = React.useState([
  //   {
  //     key: "ex1",
  //     title: "ex1",
  //     focusedIcon: "star",
  //     unfocusedIcon: "heart-outline",
  //   },
  //   {
  //     key: "ex2",
  //     title: "ex2",
  //     focusedIcon: "star",
  //     unfocusedIcon: "heart-outline",
  //   },
  //   {
  //     key: "ex3",
  //     title: "ex3",
  //     focusedIcon: "star",
  //     unfocusedIcon: "heart-outline",
  //   },
  // ]);
  // const renderScene = BottomNavigation.SceneMap({
  //   ex1: Lab1_Part1_BT1,
  //   ex2: Lab1_Part1_BT2,
  //   ex3: Excersise1,
  // });
  const Drawer = createDrawerNavigator();
  return (
    // <SafeAreaProvider>
    //   <BottomNavigation
    //     navigationState={{ index, routes }}
    //     onIndexChange={setIndex}
    //     renderScene={renderScene}
    //   />
    // </SafeAreaProvider>
    //<Excersise1/>
    //<Lab1_Part1_BT1/>
    //<Lab1_Part1_BT2/>
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Project 1" component={Lab1_Part1_BT1} />
        <Drawer.Screen name="Project 2" component={Lab1_Part1_BT2} />
        <Drawer.Screen name="Project 3" component={Lab1_Part1_BT3} />
        <Drawer.Screen name="Project 4" component={Lab1_Part1_BT4} />
        <Drawer.Screen name="Project 5" component={Lab1_Part1_BT5} />
        <Drawer.Screen name="Project 6" component={Lab1_Part1_BT6} />
        <Drawer.Screen name="Project 7" component={Lab1_Part1_BT7} />
        <Drawer.Screen name="Project 8" component={Lab1_Part1_BT8} />
        <Drawer.Screen name="Calculator" component={Lab1_Part2_Calculator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
