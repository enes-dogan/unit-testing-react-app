import { useState } from 'react';

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  function changeTextHandler() {
    setChangedText(!changedText);
  }

  return (
    <>
      <h2>Greetings!</h2>
      {!changedText && <p>Not changed.</p>}
      {changedText && <p>Changed!</p>}
      {/* <p>{changedText ? 'Not changed.' : 'Changed!'}</p> */}
      <button onClick={changeTextHandler}>Change Text!</button>
    </>
  );
}
