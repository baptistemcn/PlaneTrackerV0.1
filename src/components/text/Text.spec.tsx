import { render } from "@testing-library/react-native";
import { ReText } from "./Text";

const mockVariants = {
  title1: {
    color: "#FF0000",
    fontSize: 22,
  },
  error: {
    color: 42,
    fontSize: "Tall",
  },
};

describe("Text Component", () => {
  const mock = {
    children: "S-CREW",
  };

  it("should render", () => {
    render(<ReText>{mock.children}</ReText>);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(<ReText>{mock.children}</ReText>);

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style).toEqual({
      color: "#000000",
      fontSize: 16,
    });
  });

  it("should render with defined props", () => {
    const { getByTestId } = render(
      <ReText variants={mockVariants.title1}>{mock.children}</ReText>,
    );

    const textElement = getByTestId("text");

    expect(textElement).toBeTruthy();
    expect(textElement).toBeOnTheScreen();

    expect(textElement.props.style).toEqual({
      color: mockVariants.title1.color,
      fontSize: mockVariants.title1.fontSize,
    });
  });
});
