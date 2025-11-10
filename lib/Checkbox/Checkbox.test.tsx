import { render, screen } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('render correctly when the checked prop is true', () => {
    render(
      <Checkbox defaultChecked />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  })
})