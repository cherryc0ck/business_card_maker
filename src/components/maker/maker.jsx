import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService, FileInput, cardRepository}) => {

  const history = useHistory();

  const [cards, setCards] = useState({
    // '1': {
    //   id:'1',
    //   name:'kim',
    //   company: 'Samsung',
    //   title: 'Software Engneer',
    //   email:'qstar9537@naver.com',
    //   message : 'fuck',
    //   theme : 'dark',
    //   fileName : 'profilePhoto',
    //   fileURL: null,
    // },
    // '2': {
    //   id:'2',
    //   name:'kim',
    //   company: 'Samsung',
    //   title: 'Software Engneer',
    //   email:'qstar9537@naver.com',
    //   message : 'fuck',
    //   theme : 'light',
    //   fileName : 'profilePhoto',
    //   fileURL: null,
    // },
    // '3': {
    //   id:'3',
    //   name:'kim',
    //   company: 'Samsung',
    //   title: 'Software Engneer',
    //   email:'qstar9537@naver.com',
    //   message : 'fuck',
    //   theme : 'colorful',
    //   fileName : 'profilePhoto',
    //   fileURL: null,
    // },
  });

  const historyState = history?.loaction?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () =>{
    authService.logout();
  };

  useEffect(()=>{
    authService.onAuthChange(user =>{
    if(user){
      setUserId(user.uid);
    }else {
      history.push('/');
    }
    });
  });

  useEffect(()=>{
    if(!userId){
      return;
    }
    const stopSync = cardRepository.syncCards(userId, cards => {
      setCards(cards);
    })
    return () => stopSync();
  }, [userId]);

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
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
          <Editor 
            FileInput={FileInput}
            cards={cards} 
            addCard={createOrUpdateCard} 
            updateCard={createOrUpdateCard} 
            deleteCard={deleteCard} 
          />
          <Preview cards={cards}/>
        </div>
      <Footer />
    </section>
  )
};

export default Maker;