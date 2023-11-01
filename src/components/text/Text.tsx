import { Text } from "react-native";

import { TextProps } from "@types";

export const ReText = ({
  children,
  testID = "text",
  variants = {
    color: "#000000",
    fontSize: 16,
  },
}: TextProps) => {
  return (
    <Text style={variants} testID={testID}>
      {children}
    </Text>
  );
};
