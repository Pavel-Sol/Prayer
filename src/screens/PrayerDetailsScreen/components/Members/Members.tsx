import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AddIcon} from '../../../../icons/AddIcon';
import {
  Container,
  Title,
  MemberList,
  ImgWrapper,
  Avatar,
  AddMemberBtn,
} from './style';

const Members = () => {
  return (
    <Container>
      <Title>Members</Title>
      <MemberList>
        <ImgWrapper>
          <Avatar source={require('./../../../../assets/images/ava1.jpg')} />
        </ImgWrapper>
        <ImgWrapper>
          <Avatar source={require('./../../../../assets/images/ava2.jpg')} />
        </ImgWrapper>
        <TouchableOpacity onPress={() => console.log('add member')}>
          <AddMemberBtn>
            <AddIcon fill="#fff" />
          </AddMemberBtn>
        </TouchableOpacity>
      </MemberList>
    </Container>
  );
};

export default Members;
