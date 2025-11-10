import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button';

describe('Button', () => {
  it('should render button text', () => {
    render(
      <Button>Click me</Button>
    );
    expect(screen.getByText(/click me/i)).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Button disabled>Click me</Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it('handle click events', () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick}>Click me</Button>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});