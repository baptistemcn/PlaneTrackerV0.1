import { RectButton } from "react-native-gesture-handler";

import { ReButtonProps } from "@types";

export const ReButton = ({
  children = "Label",
  onPress,
  variants = {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
}: ReButtonProps) => {
  return (
    <RectButton style={variants} onPress={onPress} testID="button">
      {children}
    </RectButton>
  );
};
