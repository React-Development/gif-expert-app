import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("tests on GifGrid", () => {
  const category = "Naruto";

  test("should show loading initially", () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show images when these are loaded from useFetchGifs", () => {
    
    const gifs = [{
      id: 'ABC',
      title: 'Naruto',
      url: 'https://naruto.jpg',
    },
    {
      id: 'BAC',
      title: 'Goku',
      url: 'https://goku.jpg',
    },
  ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);

  });
});
