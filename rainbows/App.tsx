import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, StyleSheet} from "react-native";
import Constants from 'expo-constants';
import Rainbow from "./components/Rainbow";
import Footer from "./components/Footer";

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Rainbow amount={6} lineColorStyle={{height: 10}}></Rainbow>
      </View>
      <View style={styles.containerMain}>
        <View style={styles.main}>
          <Rainbow amount={6} rainbowContainerStyle={{flexDirection: "row", justifyContent: "space-around"}} lineColorStyle={{width: 10, height: 700, alignItems: "stretch"}}></Rainbow>
        </View>
        <View style={styles.main}>
          <Rainbow amount={6} rainbowContainerStyle={{justifyContent: "space-around", alignItems: "center"}} lineColorStyle={{width: 50, height: 50}}></Rainbow>
          
        </View>
      </View>
      <View style={styles.footer}>
        <Footer footerContainerStyle={{flexDirection: "row", justifyContent: "center"}}></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flex: 0,
    justifyContent: "flex-start",
  },
  containerMain: {
    flex: 1,
    flexDirection: "row",
  },
  main: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
  },
  footer: {
    flex: 0,
    backgroundColor: "white",
    paddingBottom: 50,
  }
});