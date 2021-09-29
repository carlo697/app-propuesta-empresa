import ImageScreen from "components/ImageScreen";
import LoadingScreen from "components/LoadingScreen";
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
    LoadingScreen,
    ResultScreen,
  ]);

  const nextScreen = () => {
    skipScreens(1);
  };

  const lastScreen = () => {
    skipScreens(-1);
  };

  const firstScreen = () => {
    setCurrentScreen(0);
  };

  const skipScreens = (count) => {
    let target = currentScreen + count;
    target = Math.min(target, screens.length - 1);
    target = Math.max(target, 0);

    setCurrentScreen(target);
  };

  const options = {
    nextScreen,
    lastScreen,
    firstScreen,
    skipScreens,
    currentScreen,
    screenCount: screens.length,
  };

  return (
    <div className="screens">
        <div className="overlay screen-background"></div>
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
