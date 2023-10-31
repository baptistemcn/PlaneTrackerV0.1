import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface ReButtonProps {
  children?: ReactNode;
  onPress?: () => void;
  variants?: StyleProp<TextStyle>;
}
