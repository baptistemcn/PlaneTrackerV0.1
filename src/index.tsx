import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme";

export const Entry = () => {
  return (
    <ReThemeProvider>
      <PlaneTracker />
    </ReThemeProvider>
  );
};
