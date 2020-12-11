import React, { useState } from 'react';
// import Accordion from './components/Accordion';
//import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// const items = [
//   {
//     title: 'What is React?',n
//     content: 'React is front-end Javascript library.'
//   },
//   {
//     title: 'Why use React?',
//     content: 'React is a favorite Javascript library among fron-end developers.'
//   },
//   {
//     title: 'How do you use React?',
//     content: 'You use React to create Javascript components.'
//   }
// ];

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
   label: 'The Color Green',
   value: 'green' 
  },
  {
    label: 'A Shade of Blue',
    value: 'blue'
  }
];

export default () => {
  return (
    <div>
      <Translate />
    </div>
  );
};