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
import { Profilecard } from './components/Profilecard';

const ProfilecardData = {
  headerTittle: 'Profile',
  lists: [
    'Account',
    'Chat Settings',
    'Notifications',
    'Storage',
    'Help',
    'Invite a friend',
  ],
  urlAvatar: ava,
  urlsimage: [Key, Chat, Bell, Storage, Help, Invite],
  text: 'This is a small bio description to let users express themselves',
  buttonurl: Vector,
  tittleava: 'Jane Doe',
  buttontext: 'Logout',
  editurl: Edit,
};

const App = () => {
  return (
    <div className="App">
      <Profilecard
        headerTittle={ProfilecardData.headerTittle}
        lists={ProfilecardData.lists}
        text={ProfilecardData.text}
        urlAvatar={ProfilecardData.urlAvatar}
        urlsimage={ProfilecardData.urlsimage}
        buttonurl={ProfilecardData.buttonurl}
        tittleava={ProfilecardData.tittleava}
        buttontext={ProfilecardData.buttontext}
        editurl={ProfilecardData.editurl}
      />
    </div>
  );
};

export { App };
