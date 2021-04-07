import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {

  const history = useHistory();

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
        Maker
      <Footer />
    </section>
  )
};

export default Maker;