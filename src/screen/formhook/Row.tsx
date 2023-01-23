import {View, Text, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
interface RowProps {
  style?: ViewStyle;
  tag?: React.ReactElement & any;
}
const Row: React.FC<RowProps & PropsWithChildren> = ({
  style,
  children = null,
  tag = View,
}) => {
  const Tag = tag;
  return <Tag style={[RowStyle.row, style]}>{children}</Tag>;
};

export default Row;

interface RowStyles {
  row: ViewStyle;
}
const styles: RowStyles = {
  row: {
    flexDirection: 'row',
    display: 'flex',
  },
};
const RowStyle = EStyleSheet.create(styles) as RowStyles;
