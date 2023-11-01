import { render } from "@testing-library/react-native";
import { ReImage } from "./Image";
import { DUMMYIMG, FRENCH_FLAG } from "@assets";

const mock = {
  source: FRENCH_FLAG,
  styles: { height: 128, width: 128 },
};

describe("ReImage Component", () => {
  it("should render", () => {
    render(<ReImage />);
  });

  it("should render an image with default props", () => {
    const { getByTestId } = render(<ReImage />);

    const image = getByTestId("image");

    expect(image).toBeTruthy();
    expect(image).toBeOnTheScreen();

    expect(image.props.source).toEqual(DUMMYIMG);
  });

  it("should render an image with defined props", () => {
    const { getByTestId } = render(<ReImage source={mock.source} />);

    const image = getByTestId("image");

    expect(image).toBeTruthy();
    expect(image).toBeOnTheScreen();

    expect(image.props.source).toEqual(mock.source);
  });

  it("should render an image with default style", () => {
    const { getByTestId } = render(<ReImage />);

    const image = getByTestId("image");

    expect(image).toBeTruthy();
    expect(image).toBeOnTheScreen();

    expect(image.props.style).toEqual({
      height: 64,
      width: 64,
    });
  });

  it("should render an image with defined style", () => {
    const { getByTestId } = render(<ReImage styles={mock.styles} />);

    const image = getByTestId("image");

    expect(image).toBeTruthy();
    expect(image).toBeOnTheScreen();

    expect(image.props.style).toEqual(mock.styles);
  });
});
