import { render } from "@testing-library/react-native";

import { PlaneTracker } from "./App";

describe("PlaneTracker", () => {
  it("should render", () => {
    render(<PlaneTracker />);
  });

  it("should render presentation text", () => {
    const { getByText } = render(<PlaneTracker />);

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
