import { makeStyles, useTheme } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export const PlaneTracker = () => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.primary }}>
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}));
