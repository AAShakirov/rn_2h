import styled from 'styled-components/native';


const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 5px;
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-style: solid;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

export const Post = ({ title, createdAt}) => {
    return <PostView>
    <PostImage source={{ uri: 'https://cdn.motor1.com/images/mgl/VPBlK/s1/1x1/tesla-model-s.webp' }} />
    <PostDetails>
    <PostTitle> {title} </PostTitle>
    <PostDate> {createdAt} </PostDate>
    </PostDetails>
    </PostView>
}
