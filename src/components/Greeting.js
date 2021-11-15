import { useState } from 'react';
import OutPut from './OutPut';

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h2>Hello test</h2>
      {!changeText && <OutPut>Same text</OutPut>}
      {changeText && <p>Woho you change the text</p>}
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
