import { useField } from '@unform/core';
import React, { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true)
  }, []);


  const handleInputBluer = useCallback(() => {
    setIsFocus(false)
    setIsFilled(!!inputRef.current?.value)
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField])
  return (
    <Container isFilled={isFilled} isFocused={isFocus}>
      {Icon && <Icon size={20} />}
      <input
        autoComplete="nope"
        onFocus={handleInputFocus}
        onBlur={handleInputBluer}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest} />
    </Container>
  )

};

export default Input;
