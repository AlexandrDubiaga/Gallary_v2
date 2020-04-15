import React from "react";
import { MainScreenNavigator } from "./src/navigation/Navigation";
import { StyleSheet} from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store/index";

export default function App() {
 
  return (
    <Provider store={store}>
      <MainScreenNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
