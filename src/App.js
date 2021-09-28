import ImageScreen from "components/ImageScreen";
import ResultScreen from "components/ResultScreen";
import Screen from "components/Screen";
import StyleScreen from "components/StyleScreen";
import TypeScreen from "components/TypeScreen";
import React from "react";
import { useState } from "react";
import Home from "./components/HomeScreen";
import NameScreen from "./components/NameScreen";

function App() {
  // @ts-ignore
  //   const currentScreen = useSelector((state) => state.screen.currentScreen);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [screens] = useState([
    Home,
    NameScreen,
    ImageScreen,
    TypeScreen,
    StyleScreen,
    ResultScreen,
  ]);

  const nextScreen = () => {
    let target = currentScreen + 1;

    if (target < screens.length) {
      setCurrentScreen(target);
    }
  };

  const lastScreen = () => {
    let target = currentScreen - 1;
    if (target < 0) {
      target = screens.length - 1;
    }
    setCurrentScreen(target);
  };

  const options = {
    nextScreen,
    lastScreen,
    currentScreen,
    screenCount: screens.length,
  };

  return (
    <div className="screens">
      {screens.map((Item, index) => {
        const className =
          index === currentScreen
            ? "active"
            : index < currentScreen
            ? "left"
            : "right";

        return (
          <Screen key={index} className={className}>
            <Item
              options={{ ...options, index, isActive: index === currentScreen }}
            />
          </Screen>
        );
      })}
    </div>
  );
}

export default App;
