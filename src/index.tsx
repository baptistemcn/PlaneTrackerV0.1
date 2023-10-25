import { SafeAreaProvider } from "react-native-safe-area-context";

import { ReThemeProvider } from "./theme";

import { PlaneTracker } from "./App";

export const Entry = () => {
  return (
    <SafeAreaProvider>
      <ReThemeProvider>
        <PlaneTracker />
      </ReThemeProvider>
    </SafeAreaProvider>
  );
};
