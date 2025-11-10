import { render, screen } from '@testing-library/react';
import { Pill } from './pill';

describe('Pill', () => {
  it('renders correctly', () => {
    render(
      <Pill label='Pill Label' />

    );
    expect(screen.getByText(/pill label/i)).toBeInTheDocument();
  });

  it('render default variant, size and label', () => {
    render(
      <Pill variant="default" size="default" label='Default Pill' />
    )
    const pill = screen.getByText(/default pill/i);
    expect(pill).toHaveClass("bg-primary", "text-white", "px-2", "py-1");
  })
})