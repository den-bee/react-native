import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';
import { DataContext, DataProvider, Tweet } from './DataProvider';
import Constants from "expo-constants";

export const TweetComponent = ({tweet} : {tweet : Tweet}) => {
  
  return (
    <View style={styles.postContainer}>
      <View style={{flexDirection: "row"}}>
        <Image source={{uri: tweet.profile!.avatar}} 
          style={styles.image}></Image>
        <View>
          <Text style={styles.name}>@{tweet.handle}</Text>
          <Text style={styles.handle}>{tweet.profile!.handle}</Text>
        </View>
      </View>

      <View>
        <Text>{tweet.text}</Text>
      </View>
    </View>
  )
}

export const TweetList = () => {
  const {tweets, loading, loadData} = useContext(DataContext);
  const [filter, setFilter] = useState("");

  const filteredTweets = tweets.filter(tweet => tweet.text.toUpperCase().includes(filter.toUpperCase()) || tweet.handle.toUpperCase().includes(filter.toUpperCase()));
  
  return (
    <View>
      <TextInput 
        onChangeText={(text) => setFilter(text)}
        value={filter}
        style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: 15,
          borderWidth: 1,
          borderColor: "#ddd",
          marginVertical: 8,
          marginHorizontal: 16,
          elevation: 3,
      }}/>

      <FlatList
          data={filteredTweets}
          renderItem={({item}) => <TweetComponent tweet={item}/>}
          keyExtractor={(item) => item.id.toString()}
          refreshing={loading}
          onRefresh={() => loadData()}
        />
    </View>
  )
}

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <TweetList></TweetList>
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#f5f5f5",
  },

  postContainer: {
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 1,
    borderColor: "#ddd",
    borderWidth: 1
  },

  name: {
    fontSize: 16,
    fontWeight: "bold"
  },

  handle: {
    fontSize: 14,
    fontWeight: "100"
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10
  }
});
