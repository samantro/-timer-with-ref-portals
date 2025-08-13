import { useState, useRef } from 'react';

export default function Player() {
  const nameInputRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleSubmit = () => {
    setPlayerName(nameInputRef.current.value);
    nameInputRef.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={nameInputRef} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
