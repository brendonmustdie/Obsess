import React, { useState, useEffect } from 'react';

const sentences = [
  'Hello, world!',
  'Welcome to my website.',
  'Have a great day!',
  'Stay curious and keep learning.',
  'Enjoy the little things in life.',
  'Never give up on your dreams.',
  'Spread kindness everywhere you go.',
  'Make today amazing!',
];

const MessageComponent = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Generate random position on the screen
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    setPosition({ x: randomX, y: randomY });

    // Select random message
    const randomIndex = Math.floor(Math.random() * sentences.length);
    setMessage(sentences[randomIndex]);

    // Clean up the component when unmounting
    return () => {
      setPosition({ x: 0, y: 0 });
      setMessage('');
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
      }}
    >
      <p>{message}</p>
    </div>
  );
};
