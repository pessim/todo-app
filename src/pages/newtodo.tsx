import React from 'react';
import { Input, InputBase } from '@mantine/core';
import { useState } from 'react';

export default function Newtodo({onEnter}) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onEnter(inputValue);
      setInputValue('');
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
     <Input
      placeholder="What needs to be done?"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
    />    
  );
}