import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles, useTheme } from "@rneui/themed";

export const OnBoarding = () => {
  const styles = useStyles();
  const { theme } = useTheme();

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ color: theme.colors.primary }}>{t("title")}</Text>
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
