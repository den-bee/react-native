import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DataContext, DataProvider } from './DataProvider';

const TweetList = () => {
  const {tweets} = useContext(DataContext);
  const {profiles} = useContext(DataContext);

  console.log(profiles);
  console.log(tweets)

  return (
    <View style={styles.container}>
      {
        tweets.map((tweet) => (
          <View key={tweet.id} style={{flex: 1, flexDirection: "column"}}>
            <Text></Text>
            <Text></Text>
            <Text>{tweet.text}</Text>
          </View>
        ))
      }
    </View>
  )
}

export default function App() {
  return (
    <DataProvider>
      <View style={styles.container}>
        <TweetList/>
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
});
