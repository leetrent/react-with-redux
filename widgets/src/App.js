import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};