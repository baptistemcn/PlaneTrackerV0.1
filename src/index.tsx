import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
        <PlaneTracker />
      </ReThemeProvider>
    </SafeAreaProvider>
  );
};
