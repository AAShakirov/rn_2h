import React from 'react';
import axios from 'axios';
import { StatusBar, StyleSheet, Alert, Text, View, Image, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from '../components/Post';

// https://mockapi.io/projects/65e841a54bb72f0a9c4ec159 
// [{
//   "createdAt": "2024-03-12T04:52:40.909Z",
//   "title": "Global Intranet Director",
//   "text": "Eum saepe voluptatibus voluptatum voluptates corporis.",
//   "image": "https://cdn.motor1.com/images/mgl/VzXjJ7/s1/tesla-model-s-plaid-blue-2.webp",
//   "id": "1"
// },
// {
//   "createdAt": "2024-03-11T20:01:37.344Z",
//   "title": "District Markets Administrator",
//   "text": "tenetur",
//   "image": "https://cdn.motor1.com/images/mgl/VPBlK/s1/1x1/tesla-model-s.webp",
//   "id": "2"
// }]

export const HomeScreen = ( { navigation } ) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState();


  const fetchPosts = () => {
    setIsLoading(true);
    axios
    .get('https://65e841a54bb72f0a9c4ec158.mockapi.io/news')
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
