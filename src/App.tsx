import React from 'react';
import ava from './png/ava.png';
import Key from './png/Key.png';
import Chat from './png/Chat.png';
import Bell from './png/Bell.png';
import Storage from './png/Storage.png';
import Help from './png/Help.png';
import Invite from './png/Invite a friend.png';
import Vector from './png/Vector.png';
import Edit from './png/Edit Button.png';
import { ProfileCard } from './components/ProfileCard';

const Profilecarddata = {
  headerTitle: 'Profile',
  lists: [
    'Account',
    'Chat Settings',
    'Notifications',
    'Storage',
    'Help',
    'Invite a friend',
  ],
  urlAvatar: ava,
  urlsImage: [Key, Chat, Bell, Storage, Help, Invite],
  text: 'This is a small bio description to let users express themselves',
  buttonUrl: Vector,
  titleAva: 'Jane Doe',
  buttonText: 'Logout',
  editUrl: Edit,
};

const App = () => {
  return (
    <div className="App">
      <ProfileCard
        headerTitle={Profilecarddata.headerTitle}
        lists={Profilecarddata.lists}
        text={Profilecarddata.text}
        urlAvatar={Profilecarddata.urlAvatar}
        urlsImage={Profilecarddata.urlsImage}
        buttonUrl={Profilecarddata.buttonUrl}
        titleAva={Profilecarddata.titleAva}
        buttonText={Profilecarddata.buttonText}
        editUrl={Profilecarddata.editUrl}
      />
    </div>
  );
};

export { App };
