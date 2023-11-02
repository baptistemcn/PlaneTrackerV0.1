import { makeStyles } from "@rneui/themed";

export const useGlobalStyles = makeStyles((theme) => ({
  layout: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
}));
