import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
  padding: 30px;
  align-items: center;
  background: #fff;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 25px;
`;

export const Avatar = styled.Image`
  margin-top: 25px;
  margin-bottom: 25px
  width: 150px;
  height: 150px;
  border-radius: 100px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  padding: 10px;
  width: 250px;
`;
export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
`;