import React from 'react';
import axios from 'axios';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Alert, Text, View, Image } from 'react-native';
import { Post } from './components/Post';



export default function App() {
  const [items, setItems] = React.useState();
  console.log(0)

  React.useEffect(() => {
    axios
    .get('https://65e841a54bb72f0a9c4ec158.mockapi.io/news')
    // .get('https://1xstavka.ru/LiveFeed/Get1x2_VZip')
    .then(( data ) => {
      console.log(data.data)
      setItems(data.data);
    })
    .catch(err => {
      console.log(2)
      console.error(err);
      Alert.alert('Custom title', 'Error in React.useEffect');
    })
  }, []);

  console.log(3)
  return (
    <View>
      {items.map((obj) => (
      <Post
        // title={obj.title}
        title={'title'}
        createdAt={'date'}
        // text={obj.text}
        // createdAt={obj.createdAt}
      />
      ))}
      <StatusBar theme='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  testText: {
    color: 'red',
    fontSize: 24
  }
});
