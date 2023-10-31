import { RectButton } from "react-native-gesture-handler";

import { makeStyles } from "@rneui/themed";

import { ReText } from "@components";
import { ReButtonProps } from "@types";

export const ReButton = ({
  children = "Label",
  onPress,
  variants,
}: ReButtonProps) => {
  const styles = useStyles();

  return (
    <RectButton
      style={[styles.button, variants]}
      onPress={onPress}
      testID="button"
    >
      <ReText variants={styles.text}>{children}</ReText>
    </RectButton>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  text: {
    color: theme.colors.background,
  },
}));
