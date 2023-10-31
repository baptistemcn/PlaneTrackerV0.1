import { makeStyles } from "@rneui/themed";

export const buttonVariants = makeStyles((theme) => ({
  button: {
    borderRadius: 15,
    height: 96,
    width: 96,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderWidth: 5,
    borderColor: "yellow",
  },
  text: {
    color: theme.colors.background,
  },
}));
