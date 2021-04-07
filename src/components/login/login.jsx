import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {

  const onLogin = event =>{
    console.log("start");
    authService //
      .login(event.currentTarget.textContent)
      .then(console.log("success"));
  }

  return (
    <section className={styles.login}>
      <Header/>
        <section>
          <h1>Login</h1>
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </section>
      <Footer/>
    </section>
  )
};

export default Login;