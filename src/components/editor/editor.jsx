import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    {Object.keys(cards).map(key =>(  
     <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />
    ))}
    <CardAddForm onAdd={addCard}/>
  </section>  
);

export default Editor;