import React, { Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import i18n from "@i18n";
import { ReThemeProvider } from "@theme";

const PlaneTracker = React.lazy(() =>
  import("./App").then((module) => ({ default: module.PlaneTracker })),
);

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
          <Suspense>
            <PlaneTracker />
          </Suspense>
        </I18nextProvider>
      </ReThemeProvider>
    </SafeAreaProvider>
  );
};
