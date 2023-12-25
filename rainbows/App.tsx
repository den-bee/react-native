import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, StyleSheet, Button, TextInput} from "react-native";
import Constants from 'expo-constants';
import Rainbow from "./components/Rainbow";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [pastel, setPastel] = useState<boolean>(true);
  const [rainbowOrder, setRainbowOrder] = useState([0,1,2,3,4,5]);
  const [word, setWord] = useState<string>("rainbow");

  const colors = rainbow(10, "hex", pastel).map((color) => color.hex);
  const rainbowColors = rainbowOrder.map((i) => colors[i]);

  const randomize = () => {
    setRainbowOrder([...rainbowOrder].sort(() => Math.random() - 0.5));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Rainbow lineColorStyle={{height: 10}} colors={rainbowColors}></Rainbow>
      </View>
      <TextInput
        style={{height: 30, borderColor: "gray", backgroundColor: "white", borderWidth: 1, padding: 5}}
        onChangeText={(word) => setWord(word)}
        value={word}
      ></TextInput>
      <Button 
          title="change pastel"
          onPress={() => {setPastel(pastel ? false : true)}}
      ></Button>
      <Button
        title="randomize colors"
        onPress={randomize}
      >

      </Button>
      
      <View style={styles.containerMain}>
        <View style={styles.main}>
          <Rainbow rainbowContainerStyle={{flexDirection: "row", justifyContent: "space-around"}} lineColorStyle={{width: 10, height: 700, alignItems: "stretch"}}  colors={rainbowColors}></Rainbow>
        </View>
        <View style={styles.main}>
          <Rainbow rainbowContainerStyle={{justifyContent: "space-around", alignItems: "center"}} lineColorStyle={{width: 50, height: 50}} colors={rainbowColors}></Rainbow>
          
        </View>
      </View>
      <View style={styles.footer}>
        <Footer colors={rainbowColors} text={word} footerContainerStyle={{flexDirection: "row", justifyContent: "center"}}></Footer>
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