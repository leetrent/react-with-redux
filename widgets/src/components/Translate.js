import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Dutch',
    value: 'nl'
  },
  {
    label: 'French',
    value: 'fr'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
  {
    label: 'Portuguese',
    value: 'pt'
  },
  {
    label: 'Spanish',
    value: 'es'
  }

];

const Translate = () => {  
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Text to translate:</label>
          <input 
            value={text} 
            onChange={ (e) => setText(e.target.value) }
          />
          </div>
      </div>
      <Dropdown 
        label="Select Language:"
        options={options} 
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
}

export default Translate;
