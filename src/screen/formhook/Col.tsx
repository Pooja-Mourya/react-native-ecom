import {View, Text, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
interface ColProps {
  style?: ViewStyle;
  tag?: React.ReactElement & any;
  flex?: number;
}
const Col: React.FC<ColProps & PropsWithChildren> = ({
  style,
  children = null,
  tag = View,
  flex = 1,
}) => {
  const Tag = tag;
  return <Tag style={[ColStyle.col, {flex}, style]}>{children}</Tag>;
};

export default Col;

interface ColStyles {
  col: ViewStyle;
}
const styles: ColStyles = {
  col: {
    flex: 1,
  },
};
const ColStyle = EStyleSheet.create(styles) as ColStyles;
