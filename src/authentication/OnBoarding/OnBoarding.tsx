/* eslint-disable no-console */
import { StatusBar } from "expo-status-bar";
import { Button, View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@rneui/themed";
import { ReText } from "@components";
import { textVariants, useGlobalStyles } from "@theme";

export const OnBoarding = () => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const variants = textVariants();

  const { t } = useTranslation();

  return (
    <View style={globalStyles.layout}>
      <View style={styles.container}>
        <View style={[styles.column, styles.title]}>
          <ReText variants={variants.title1}>{t("title")}</ReText>
        </View>
        <View style={[styles.column, styles.grid]}>
          <Button title="Hello World" onPress={() => console.log("Clicked")} />
        </View>
        <View style={styles.column}>
          <ReText variants={variants.title1}>Welcome</ReText>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "blue",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
    alignItems: "center",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "red",
  },
  button: {
    flex: 1,
    flexDirection: "row",
  },
}));
