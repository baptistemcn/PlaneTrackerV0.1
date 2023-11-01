import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReButtonProps {
  children?: ReactNode;
  onPress?: () => void;
  testID?: string;
  variants?: StyleProp<TextStyle>;
}
