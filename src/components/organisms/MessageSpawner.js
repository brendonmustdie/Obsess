import React, { useState, useEffect } from 'react';

const sentences = [
  'I will never be good enough',
  'I have lice, I can feel them crawling',
  'If I dont click here, my family will die',
  'I am exactly like my mother',
  'I am a failure',
  'I can feel myself gaining weight',
  'He doesnt love me - he is pretending',
  'I can feel the cancer growing in my cells',
];

const MessageComponent = ({ message, onClick }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [flash, setFlash] = useState(false);
  const [fontColor, setFontColor] = useState('#000000');

  useEffect(() => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    setPosition({ x: randomX, y: randomY });

    const flashingInterval = setInterval(() => {
      setFlash((prevFlash) => !prevFlash);
      
    }, getRandomInterval());

    return () => {
      setPosition({ x: 0, y: 0 });
      clearInterval(flashingInterval);
    };
  }, []);

  useEffect(() => {
    const audio = new Audio('./sounds/Ping.mp3'); // Replace with the actual path to your audio file
    if (flash) {
      audio.play();
    }
  }, [flash]);

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 4000) + 1000;
  };

  const messageStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    backgroundColor: flash ? 'red' : '#EDF2F7',
    borderRadius: '0.25rem',
    padding: '1rem',
    cursor: 'pointer',
    color: fontColor,
  };

  return (
    <div style={messageStyle} onClick={onClick}>
      <p>{message}</p>
    </div>
  );
};

const MessageSpawner = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      const randomSentence = sentences[randomIndex];
      const newMessage = (
        <MessageComponent
          message={randomSentence}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setMessages([]);
          }}
        />
      );
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{messages}</div>;
};

export default MessageSpawner;
