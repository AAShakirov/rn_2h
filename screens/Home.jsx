import React from 'react';
import axios from 'axios';
import { StatusBar, StyleSheet, Alert, Text, View, Image, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';

const example_link = 'https://0123456789.mockapi.io/news'

export const HomeScreen = ( { navigation } ) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();


  const fetchPosts = () => {
    setIsLoading(true);
    axios
    .get(example_link)
    .then(( data ) => {
      setItems(data.data);
    })
    .catch(err => {
      console.error(err);
      Alert.alert('Custom title', 'Error in React.useEffect');
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 15 }}>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id,  title: item.title })}>
            <Post title={item.title} createdAt={item.createdAt} />
          </TouchableOpacity>
        
      )}
      />
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
