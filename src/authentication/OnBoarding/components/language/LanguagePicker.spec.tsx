import { fireEvent, render } from "@testing-library/react-native";
import { LanguagePicker } from "./LanguagePicker";
import { ReThemeProvider } from "@theme";
import { FRENCH_FLAG, US_FLAG } from "@assets";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Language Picker component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );
  });

  it("should render a title", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const titleElement = getByTestId("language");

    expect(titleElement).toBeTruthy();
    expect(titleElement).toBeOnTheScreen();

    expect(titleElement.props.children).toEqual("onboarding.language");
  });

  it("should render a subtitle", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const subtitleElement = getByTestId("subtitle");

    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement).toBeOnTheScreen();

    expect(subtitleElement.props.children).toEqual("onboarding.subtitle");
  });

  it("should render two button with two flags", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const frenchbutton = getByTestId("frenchbutton");
    const usbutton = getByTestId("usbutton");

    const frenchflag = getByTestId("frenchflag");
    const usflag = getByTestId("usflag");

    expect(frenchbutton).toBeTruthy();
    expect(frenchbutton).toBeOnTheScreen();

    expect(usbutton).toBeTruthy();
    expect(usbutton).toBeOnTheScreen();

    expect(frenchflag).toBeTruthy();
    expect(frenchflag).toBeOnTheScreen();

    expect(usflag).toBeTruthy();
    expect(usflag).toBeOnTheScreen();
  });

  it("should render a french flag in button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const frenchflag = getByTestId("frenchflag");

    expect(frenchflag).toBeTruthy();
    expect(frenchflag).toBeOnTheScreen();

    expect(frenchflag.props.source).toEqual(FRENCH_FLAG);
  });

  it("should render a us flag in button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const usflag = getByTestId("usflag");

    expect(usflag).toBeTruthy();
    expect(usflag).toBeOnTheScreen();

    expect(usflag.props.source).toEqual(US_FLAG);
  });

  it("should handle language selection", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const frenchbutton = getByTestId("frenchbutton");
    const usbutton = getByTestId("usbutton");

    expect(frenchbutton).toBeTruthy();
    expect(frenchbutton).toBeOnTheScreen();

    expect(usbutton).toBeTruthy();
    expect(usbutton).toBeOnTheScreen();

    fireEvent.press(frenchbutton);

    expect(frenchbutton.props.style.backgroundColor).toEqual("#FFD100");
    expect(usbutton.props.style.backgroundColor).toEqual("#E9ECEF");

    fireEvent.press(usbutton);

    expect(frenchbutton.props.style.backgroundColor).toEqual("#E9ECEF");
    expect(usbutton.props.style.backgroundColor).toEqual("#FFD100");
  });

  it("should handle language selection when click on US button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const usbutton = getByTestId("usbutton");

    expect(usbutton).toBeTruthy();
    expect(usbutton).toBeOnTheScreen();

    fireEvent.press(usbutton);

    expect(usbutton.props.style.backgroundColor).toEqual("#FFD100");
  });

  it("should handle language selection when click on french button", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <LanguagePicker />
      </ReThemeProvider>,
    );

    const frenchbutton = getByTestId("frenchbutton");

    expect(frenchbutton).toBeTruthy();
    expect(frenchbutton).toBeOnTheScreen();

    fireEvent.press(frenchbutton);

    expect(frenchbutton.props.style.backgroundColor).toEqual("#FFD100");
  });
});
