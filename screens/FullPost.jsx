import React from "react";
import axios from "axios";
import { View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
  border-radius: 12px;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostText = styled.Text`
  font-size: 18px;
`;

export const FullPostScreen = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [response, setData] = React.useState();
  const { id, title} = route.params;

  console.log(route)

  React.useEffect(() => {
    axios
      .get('https://65e841a54bb72f0a9c4ec158.mockapi.io/news/' + id)
      .then(( response ) => {
        console.log(response.data)
        setData(response);
      })
      .catch(err => {
        console.error(err);
        Alert.alert('Custom title', 'Error in React.useEffect');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ marginTop:50, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }} >
      <PostImage source={{ uri: response.data.image }} />
      <PostTitle>
        { response.data.title }
      </PostTitle>
      <PostText>
        { response.data.text }
      </PostText>
    </View>
  );
};
