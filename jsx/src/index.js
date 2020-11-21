// Import the React and ReactDOM libraries:
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'getButtonText';
}
// Create a React componenet:
const App = () => {
  const buttonText = 'buttonText';
  return (
    <div>
      <label className="label" for="name">Name:&nbsp;</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
    </div>
  ); 

}


// Show React component on the page:
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);