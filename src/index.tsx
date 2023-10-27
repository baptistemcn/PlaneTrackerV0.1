import { useFonts } from "expo-font";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";

import i18n from "@i18n";
import { ReThemeProvider } from "@theme";

import { PlaneTracker } from "./App";

export const Entry = () => {
  const [fontsLoaded] = useFonts({
    Bold: require("../assets/fonts/SF-Pro-Text-Bold.otf"),
    SemiBold: require("../assets/fonts/SF-Pro-Text-Semibold.otf"),
    Regular: require("../assets/fonts/SF-Pro-Text-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ReThemeProvider>
        <I18nextProvider i18n={i18n}>
          <PlaneTracker />
        </I18nextProvider>
      </ReThemeProvider>
    </SafeAreaProvider>
  );
};
