import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const history = useHistory();

  const [cards, setCards] = useState({
    '1': {
      id:'1',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'dark',
      fileName : 'profilePhoto',
      fileURL: null,
    },
    '2': {
      id:'2',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'light',
      fileName : 'profilePhoto',
      fileURL: null,
    },
    '3': {
      id:'3',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'colorful',
      fileName : 'profilePhoto',
      fileURL: null,
    },
  });

  const onLogout = () =>{
    authService.logout();
    console.log("onLogout함수 실행");
  };

  useEffect(()=>{
    authService.onAuthChange(user =>{
    if(!user){
      history.push('/');
    }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    })
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
          <Preview cards={cards}/>
        </div>
      <Footer />
    </section>
  )
};

export default Maker;