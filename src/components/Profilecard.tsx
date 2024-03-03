/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import { cnProfilecard } from './Profilecard.classname';

import type { FC } from 'react';

import './Profilecard.css';

type ProfilecardProps = {
  headerTittle: string;
  lists: string[];
  text: string;
  tittleava: string;
  urlAvatar: string;
  urlsimage: string[];
  buttonurl: string;
  buttontext: string;
  editurl: string;
};

const Profilecard: FC<ProfilecardProps> = ({
  headerTittle,
  lists,
  text,
  urlAvatar,
  urlsimage,
  buttonurl,
  tittleava,
  buttontext,
  editurl,
}) => {
  return (
    <div className={cnProfilecard()}>
      <header className={cnProfilecard('header')}>
        <img className={cnProfilecard('header_image')} src={buttonurl}></img>
        <p>{headerTittle}</p>
      </header>

      <div className={cnProfilecard('avatar')}>
        <img src={urlAvatar} className={cnProfilecard('avatar_image')}></img>
        <img className={cnProfilecard('edit_image')} src={editurl}></img>
        <h1 className={cnProfilecard('avatar_tittle')}>{tittleava}</h1>
        <p className={cnProfilecard('avatar_text')}>{text}</p>
      </div>

      <div className={cnProfilecard('list')}>
        <div className={cnProfilecard('list-image')}>
          {urlsimage.map((url) => (
            <img className={cnProfilecard('image')} src={url}></img>
          ))}
        </div>
        <div>
          {lists.map((list) => (
            <p className={cnProfilecard('list_text')}>{list}</p>
          ))}
        </div>
      </div>
      <button className={cnProfilecard('button_footer')}>{buttontext}</button>
    </div>
  );
};

export { Profilecard };
