import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const greet = useSelector((data) => data.data);
  return (
    <h1>{greet.greetings}</h1>
  );
};

export default Greeting;
