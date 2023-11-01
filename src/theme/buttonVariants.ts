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
