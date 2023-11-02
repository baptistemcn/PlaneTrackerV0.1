import { makeStyles } from "@rneui/themed";

export const languagePicker = makeStyles((theme) => ({
  button: {
    borderRadius: 15,
    height: 96,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.grey1,
    borderWidth: 5,
    borderColor: theme.colors.greyOutline,
  },
}));

export const primaryButton = makeStyles((theme) => ({
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
