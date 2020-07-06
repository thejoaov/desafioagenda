/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {
  TextInputProps,
  ViewStyle,
  StyleProp,
  View,
  TouchableOpacity,
} from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, InputTitle } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {
    name,
    title,
    icon,
    containerStyle = {},
    testID = '@components:input',
    ...rest
  },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleVisibility = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {title && (
        <InputTitle testID="@components:input/title">{title}</InputTitle>
      )}
      <Container
        style={containerStyle}
        isFocused={isFocused}
        isErrored={!!error}
        testID="@components:input/container"
      >
        <TextInput
          testID={testID}
          ref={inputElementRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          secureTextEntry={name === 'password' && !isVisible}
          placeholder={name === 'password' ? '******' : rest.placeholder}
          {...rest}
        />
        {icon && name !== 'password' ? (
          <View testID="@components:input/icon">
            <Icon
              isFilled={isFilled}
              isFocused={isFocused}
              name={icon}
              size={20}
            />
          </View>
        ) : (
          <TouchableOpacity
            testID="@components:input/icon"
            onPress={handleVisibility}
          >
            <Icon
              isFilled={isFilled}
              isFocused={isFocused}
              name={isVisible ? 'eye' : 'eye-off'}
              size={20}
            />
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
};

export default forwardRef(Input);
