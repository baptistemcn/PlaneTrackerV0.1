import { render } from "@testing-library/react-native";
import { ReButton } from "./Button";
import { ReThemeProvider } from "@theme";

const mockStyles = {
  button: {
    height: 64,
    width: 64,
  },
  text: {
    color: "#FF0000",
  },
};

describe("ReButton component", () => {
  it("should render", () => {
    render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );
  });

  it("should render button with default style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style).toEqual({
      borderRadius: 25,
      height: 50,
      width: 245,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000",
    });
  });

  it("should render button with defined style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton variants={mockStyles.button} />
      </ReThemeProvider>,
    );

    const buttonElement = getByTestId("button");

    expect(buttonElement).toBeTruthy();
    expect(buttonElement).toBeOnTheScreen();

    expect(buttonElement.props.style.height).toEqual(mockStyles.button.height);
    expect(buttonElement.props.style.width).toEqual(mockStyles.button.width);
  });

  it("should render a label in button with default style", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style).toEqual({
      color: "#FFFFFF",
    });
  });

  it("should render a children in button with default props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton />
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toBe("Label");
  });

  it("should render a label in button with defined props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton>PlaneTracker</ReButton>
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual("PlaneTracker");
  });
});
