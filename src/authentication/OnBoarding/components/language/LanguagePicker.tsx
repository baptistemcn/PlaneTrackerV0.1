import { useState } from "react";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

import { makeStyles, useTheme } from "@rneui/themed";

import { FRENCH_FLAG, US_FLAG } from "@assets";
import { ReText } from "@components";
import { languagePicker } from "@theme";
import { ReButton, ReImage } from "@ui";

export const LanguagePicker = () => {
  const { i18n, t } = useTranslation();
  const { theme } = useTheme();

  const [displayLanguage, setDisplayLanguage] = useState<string>(i18n.language);

  const styles = useStyles();
  const variants = languagePicker();

  const handleLanguageSelection = (language: string) => {
    i18n.changeLanguage(language);
    setDisplayLanguage(language);
  };

  return (
    <View style={styles.container}>
      <ReText variants={styles.title} testID="language">
        {t("onboarding.language")}
      </ReText>
      <View style={styles.grid}>
        <ReButton
          variants={[
            variants.button,
            displayLanguage === "fr" && {
              backgroundColor: theme.colors.searchBg,
            },
          ]}
          onPress={() => handleLanguageSelection("fr")}
          testID="frenchbutton"
        >
          <ReImage source={FRENCH_FLAG} testID="frenchflag" />
        </ReButton>
        <ReButton
          variants={[
            variants.button,
            displayLanguage === "en" && {
              backgroundColor: theme.colors.searchBg,
            },
          ]}
          onPress={() => handleLanguageSelection("en")}
          testID="usbutton"
        >
          <ReImage source={US_FLAG} testID="usflag" />
        </ReButton>
      </View>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    margin: theme.spacing.xl,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));
