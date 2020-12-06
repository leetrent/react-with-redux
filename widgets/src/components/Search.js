import React, { useState, useEffect } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  console.log("[Search] => I run during initial render and subsequent re-renders.");

  useEffect( () =>{
    console.log("[Search][useEffect] => I run during initial render and subsequent re-renders.");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term:</label>
          <input 
            className="input" 
            value={term}
            onChange={ e => setTerm(e.target.value) }
          />
        </div>
      </div>
    </div>
  );
};

export default Search;