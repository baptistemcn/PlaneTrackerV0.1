import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles } from "@rneui/themed";

import { ReText } from "@components";
import { textVariants, useGlobalStyles, primaryButton } from "@theme";
import { AuthNavigationProps } from "@routes";
import { ReButton } from "@ui";

import { LanguagePicker } from "./components";

export const OnBoarding = ({
  navigation,
}: AuthNavigationProps<"Onboarding">) => {
  const styles = useStyles();
  const globalStyles = useGlobalStyles();
  const variants = textVariants();
  const button = primaryButton();

  const { t } = useTranslation();

  return (
    <View style={globalStyles.layout}>
      <View style={styles.container}>
        <View style={[styles.column, styles.title]}>
          <ReText variants={variants.title1}>PlaneTracker</ReText>
        </View>
        <View style={[styles.column, styles.presentation]}>
          <ReText variants={styles.subtitle}>
            {t("onboarding.presentation")}
          </ReText>
        </View>
        <View style={[styles.column, styles.grid]}>
          <LanguagePicker />
        </View>
        <View style={[styles.column, styles.button]}>
          <ReButton
            variants={button.button}
            onPress={() => navigation.navigate("Theming")}
          >
            <ReText variants={button.text}>
              {t("common.continue").toLocaleUpperCase()}
            </ReText>
          </ReButton>
        </View>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  column: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    maxHeight: "20%",
  },
  presentation: {
    marginHorizontal: theme.spacing.xl,
    maxHeight: "5%",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing.md,
  },
}));
