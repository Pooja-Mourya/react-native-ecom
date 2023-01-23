import {View, Text} from 'react-native';
import React from 'react';

interface ShowProps {
  IF: boolean;
  children: React.ReactElement;
}
const Show = ({IF, children}: ShowProps) => {
  if (IF) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default Show;
