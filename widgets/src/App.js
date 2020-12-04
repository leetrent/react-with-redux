import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is front-end Javascript library.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite Javascript library among fron-end developers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React to create Javascript components.'
  }
];

export default () => {
  return (
    <div>
      <div><Accordion items={items} /></div>
    </div>
  );
};