import * as React from 'react';
import { render } from '@testing-library/react-native';
import Icon from '.';

describe('Icon', () => {
  it('should render as link', () => {
    const screen = render(<Icon src="https://placehold.co/600x400" />);
    expect(screen).toBeDefined();
  });
  it('should render as link with width', () => {
    const { queryByTestId } = render(
      <Icon src="https://placehold.co/600x400" width={600} />,
    );
    const actual = queryByTestId('iconUri');
    expect(actual).not.toBeNull();
  });
  it('should render as id', () => {
    const screen = render(<Icon id="user" />);
    expect(screen).toBeDefined();
  });
});
