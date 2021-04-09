import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ( {FileInput, card, updateCard, deleteCard} ) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {name, company, title, email, message, theme, fileName} = card;

  const onFileChange = file => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    })
  }

  const onSubmit = () => {
    deleteCard(card);
  };

  const onChange = (event) => {
    console.log("onChange함수 실행");
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);
    if(event.currentTarget == null){
      console.log("커렌트타겟 널");
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    console.log(updateCard);
  };

  return (
    <form className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" value={name} onChange={onChange} />
      <input ref={companyRef} className={styles.input} type="text" name="company" value={company} onChange={onChange} />
      <select ref={themeRef} name="theme" value={theme} onChange={onChange} >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" value={title} onChange={onChange} />
      <input ref={emailRef} className={styles.input} type="email" name="email" value={email} onChange={onChange} />
      <textarea ref={messageRef} className={styles.textarea} name="message" value={message} onChange={onChange}></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );

};

export default CardEditForm;