import * as React from "react";
import { rainbow } from "rainbow-colors-array-ts";
import {View, StyleSheet, Button, TextInput} from "react-native";
import Constants from 'expo-constants';
import Rainbow from "./components/Rainbow";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [changePastel, setChangePastel] = useState<boolean>(true);
  const [word, setWord] = useState<string>("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Rainbow lineColorStyle={{height: 10}} pastel={changePastel}></Rainbow>
      </View>
      <TextInput
        style={{height: 30, borderColor: "gray", backgroundColor: "white"}}
        onSubmitEditing={(word) => setWord(word.nativeEvent.text)}
      ></TextInput>
      <Button 
          title="change pastel"
          onPress={() => {setChangePastel(changePastel ? false : true)}}
      ></Button>
      
      <View style={styles.containerMain}>
        <View style={styles.main}>
          <Rainbow rainbowContainerStyle={{flexDirection: "row", justifyContent: "space-around"}} lineColorStyle={{width: 10, height: 700, alignItems: "stretch"}} pastel={changePastel}></Rainbow>
        </View>
        <View style={styles.main}>
          <Rainbow rainbowContainerStyle={{justifyContent: "space-around", alignItems: "center"}} lineColorStyle={{width: 50, height: 50}} pastel={changePastel}></Rainbow>
          
        </View>
      </View>
      <View style={styles.footer}>
        <Footer text={word} footerContainerStyle={{flexDirection: "row", justifyContent: "center"}}></Footer>
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