import { render } from "@testing-library/react-native";

import { PlaneTracker } from "./App";
import { ReThemeProvider } from "./theme";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

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

    const textElement = getByText("title");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();
    expect(textElement.props.children).toEqual("title");
  });
});
