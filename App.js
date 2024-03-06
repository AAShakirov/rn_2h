import React from 'react';
import axios from 'axios';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Alert, Text, View, Image } from 'react-native';
import { Post } from './components/Post';



export default function App() {
  const [items, setItems] = React.useState();

  React.useEffect(() => {
    axios
    .get('https://65e841a54bb72f0a9c4ec158.mockapi.io/news')
    .then(({ data }) => {
      setItems(data);
    })
    .catch(err => {
      console.error(err);
      Alert.alert('Custom title', 'Error in React.useEffect');
    })
  }, []);

  return (
    <View>
      {items.map((obj) => (
      <Post 
        // key={obj.id}
        title={obj.title}
        // text={obj.text}
        createdAt={obj.id} 
        />
      ))}
      {/* <StatusBar theme='auto' /> */}
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
