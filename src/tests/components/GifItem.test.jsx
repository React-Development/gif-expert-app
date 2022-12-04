import React from 'react';

import { render, screen } from '@testing-library/react';

import { GifItem } from '../../components/GifItem';

const title = 'Goku';
const url = 'https://dragon-ball.com/goku.png';

describe('tests on GifItem', () => {
  test('should match snapshot', () => {
    const { container } = render(<GifItem url={url} title={title} />);

    expect(container).toMatchSnapshot();
  });

  test('should show image with URL and ALT', () => {
    render(<GifItem url={url} title={title} />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should show title within component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
