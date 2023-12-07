import { useContext } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { DataContext, DataProvider, Tweet } from './DataProvider';

const TweetComponent = ({tweet} : {tweet : Tweet}) => {
  
  return (
    <DataProvider>
      <View style={styles.tweetlist}>
        <Image source={{uri: tweet.profile?.avatar}}></Image>
        <Text>{tweet.handle}</Text>
        <Text>{tweet.profile?.handle}</Text>
        <Text>{tweet.text}</Text>
      </View>
    </DataProvider>
  )
}

export default function App() {
  const {tweets} = useContext(DataContext);
  
  return (
    <DataProvider>
      <View style={styles.container}>
        <FlatList
          data={tweets}
          renderItem={({item}) => <TweetComponent tweet={item}/>}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </DataProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tweetlist: {
    width: 450,
    height: 500,
  }
});
