import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe("tests on <GifExpertApp />", () => {
  test("should matwch snapshot", () => {
    const {container} = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });


  test('should first', () => { second })
});
