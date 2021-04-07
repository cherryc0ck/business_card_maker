import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';
const Maker = ({authService}) => {

  const history = useHistory();

  const [cards, setCards] = useState([
    {
      id:'1',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'dark',
      fileName : 'profilePhoto',
      fileURL: ''
    },
    {
      id:'2',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'light',
      fileName : 'profilePhoto',
      fileURL: ''
    },
    {
      id:'3',
      name:'kim',
      company: 'Samsung',
      title: 'Software Engneer',
      email:'qstar9537@naver.com',
      message : 'fuck',
      theme : 'colorful',
      fileName : 'profilePhoto',
      fileURL: ''
    }
  ]);

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

  return(
    <section className={styles.maker}>
      <Header onLogout={onLogout}/>
        <div className={styles.container}>
          <Editor cards={cards}/>
          <Preview cards={cards}/>
        </div>
      <Footer />
    </section>
  )
};

export default Maker;