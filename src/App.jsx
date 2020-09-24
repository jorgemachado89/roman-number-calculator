import React, {useState} from 'react';
import logo from './roman.svg';
import './App.scss';

import {InputCovertions} from './components/InputConvertions/InputConvertions.jsx';
import {romanToInt as fromRoman, intToRoman as toRoman} from './helper/RomanNumerals.jsx';

function App() {

  const [romanValue, setRomanValue] = useState('');
  const [integerValue, setIntegerValue] = useState(0);
  const [invalidInput, setInvalidInput] = useState(false);
  
  const validateInput = (value, cb) => {
    setInvalidInput(false);
    cb(value);
  }
  
  const onInputChange = (convertedValue, isRoman) => {
    try {
      if (isRoman) {
        setRomanValue(convertedValue);
        fromRoman(convertedValue, (value) => {
          validateInput(value, setIntegerValue);
        });
      } else {
        const toIntInput = Number(convertedValue);
        
        setIntegerValue(toIntInput);
        toRoman(toIntInput, (value) => {
          validateInput(value, setRomanValue);
        });
      }
    } catch(error) {
      setInvalidInput(true);
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <div className="ErrorInputContainer">
            {invalidInput && <span className="ErrorInput">Please check inputs for errors.</span>}
          </div>
          <div className="InputValues">
            <InputCovertions inputLabel={"Roman Number "} valueToConvert={romanValue} isRoman={true} cb={onInputChange} />
            <InputCovertions inputLabel={"Integer Number "} valueToConvert={integerValue} isRoman={false} cb={onInputChange} />
          </div>
        </section>
      </header>
    </div>
  );
}
  
export default App;
  