import { Text } from "react-native";

import { TextProps } from "@types";

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
