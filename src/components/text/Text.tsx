import { ReactNode } from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface TextProps {
  children: ReactNode;
  variants?: StyleProp<TextStyle>;
}

export const ReText = ({
  children,
  variants = {
    color: "#000000",
    fontSize: 16,
  },
}: TextProps) => {
  return (
    <Text style={variants} testID="text">
      {children}
    </Text>
  );
};
