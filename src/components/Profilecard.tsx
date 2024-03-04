/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { cnProfileCard } from './ProfileCard.classname';

import type { FC } from 'react';

import './ProfileCard.css';

type ProfileCardProps = {
  headerTitle: string;
  lists: string[];
  text: string;
  titleAva: string;
  urlAvatar: string;
  urlsImage: string[];
  buttonUrl: string;
  buttonText: string;
  editUrl: string;
};

const ProfileCard: FC<ProfileCardProps> = ({
  headerTitle,
  lists,
  text,
  urlAvatar,
  urlsImage,
  buttonUrl,
  titleAva,
  buttonText,
  editUrl,
}) => {
  return (
    <div className={cnProfileCard()}>
      <header className={cnProfileCard('Header')}>
        <img className={cnProfileCard('Header_Image')} src={buttonUrl}></img>
        <p>{headerTitle}</p>
      </header>

      <div className={cnProfileCard('Avatar')}>
        <img src={urlAvatar} className={cnProfileCard('Avatar_Image')}></img>
        <img className={cnProfileCard('Edit_Image')} src={editUrl}></img>
        <h1 className={cnProfileCard('Avatar_Tittle')}>{titleAva}</h1>
        <p className={cnProfileCard('Avatar_Text')}>{text}</p>
      </div>

      <div className={cnProfileCard('List')}>
        <div className={cnProfileCard('List-Image')}>
          {urlsImage.map((url) =>(
            <img className={cnProfileCard('Image')} src={url}></img>
          ))}
        </div>
        <div>
          {lists.map((list) => (
            <p className={cnProfileCard('List_Text')}>{list}</p>
          ))}
        </div>
      </div>
      <button className={cnProfileCard('Button_Footer')}>{buttonText}</button>
    </div>
  );
};

export { ProfileCard };
