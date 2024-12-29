import { render, screen } from '@testing-library/react';
import { FaCheck } from 'react-icons/fa6';

import Icon from '../Icon';

describe('Icon', () => {
  it('should render with default props', () => {
    render(<Icon data-testid="icon" type={FaCheck} />);
    const icon = screen.getByTestId('icon');

    expect(icon).toBeInTheDocument();
    expect(icon.tagName).toBe('svg');
  });

  it('should pass props to the element correctly', () => {
    render(<Icon data-testid="icon" type={FaCheck} size="xs" />);
    const icon = screen.getByTestId('icon');

    expect(icon).toHaveAttribute('width', '0.75rem');
    expect(icon).toHaveAttribute('height', '0.75rem');
  });
});
