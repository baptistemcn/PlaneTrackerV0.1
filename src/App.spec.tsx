import { render } from "@testing-library/react-native";

import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme";

describe("PlaneTracker", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <PlaneTracker />
      </ReThemeProvider>,
    );
  });

  it("should render presentation text", () => {
    const { getByText } = render(
      <ReThemeProvider>
        <PlaneTracker />
      </ReThemeProvider>,
    );

    const textElement = getByText(
      "Open up App.tsx to start working on your app!",
    );

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
    expect(textElement.props.children).toEqual(
      "Open up App.tsx to start working on your app!",
    );
  });
});
