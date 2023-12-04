import { useState } from 'react';
import { StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [firstColor, setFirstColor] = useState<string>("grey");
  const [secondColor, setSecondColor] = useState<string>("black");

  return (
      <View style={{backgroundColor: isEnabled ? firstColor : secondColor, flex: 1, alignItems: "center", justifyContent: "center"}}>
        <TextInput style={{height: 40, backgroundColor: "white", borderColor: "gray", borderWidth: 1, padding: 5, margin: 5}} value={firstColor} onChangeText={firstColor => setFirstColor(firstColor)}></TextInput>
        <TextInput style={{height: 40, backgroundColor: "white", borderColor: "gray", borderWidth: 1, padding: 5, margin: 5}} value={secondColor} onChangeText={secondColor => setSecondColor(secondColor)}></TextInput>
        <Switch onValueChange={() => setIsEnabled(previousState => !previousState)} value={isEnabled}></Switch>
      </View>
  );
}

