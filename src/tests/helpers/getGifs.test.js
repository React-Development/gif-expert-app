import { getGifs } from "../../helpers/getGifs";

describe('tests on getGifs', () => {
  test('should return a gifs array', async () => {
    const gifs = await getGifs('Goku');
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String), // doesn't matter the exact value as long as it is a string
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});