import { render } from "@testing-library/react-native";
import { ReButton } from "./Button";
import { ReThemeProvider } from "@theme";
import { ReText } from "@components";

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
      backgroundColor: "#FFFFFF",
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
        <ReButton>
          <ReText>Clicked</ReText>
        </ReButton>
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style).toEqual({
      color: "#000000",
      fontSize: 16,
    });
  });

  it("should render a children in button with default props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton>
          <ReText>PlaneTracker</ReText>
        </ReButton>
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toBe("PlaneTracker");
    expect(textElement.props.style).toEqual({ color: "#000000", fontSize: 16 });
  });

  it("should render a label in button with defined props", () => {
    const { getByTestId } = render(
      <ReThemeProvider>
        <ReButton>
          <ReText variants={mockStyles.text}>PlaneTracker</ReText>
        </ReButton>
      </ReThemeProvider>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.children).toEqual("PlaneTracker");
    expect(textElement.props.style).toEqual({ color: "#FF0000" });
  });
});
