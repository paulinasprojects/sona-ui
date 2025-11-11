import { render, screen, fireEvent } from '@testing-library/react';
import { Combobox } from './combobox';
import { ComboboxTrigger } from './combobox-trigger';
import { ComboboxInput } from './combobox-input';
import { ComboboxList } from './combobox-list';
import { ComboboxOption } from './combobox-option';
import { ComboboxContent } from './combobox-content';

describe('Combobox', () => {
  it('shows options when opened', () => {
    const onClick = vi.fn();
    render(
      <Combobox onValueChange={onClick}>
        <ComboboxTrigger placeholder='Select option' />
        <ComboboxContent>
          <ComboboxInput placeholder='Search' />
          <ComboboxList>
            <ComboboxOption value="apple">Apple</ComboboxOption>
            <ComboboxOption value="banana">Banana</ComboboxOption>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    )
    expect(screen.getByText(/select/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/select/i));
    expect(screen.getByText(/apple/i)).toBeVisible();
  })
  it("filters options based on input", () => {
    const onClick = vi.fn();
    render(
      <Combobox onValueChange={onClick}>
        <ComboboxTrigger placeholder='Select option' />
        <ComboboxContent>
          <ComboboxInput placeholder='Search' />
          <ComboboxList>
            <ComboboxOption value="apple">Apple</ComboboxOption>
            <ComboboxOption value="banana">Banana</ComboboxOption>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );

    fireEvent.click(screen.getByText(/select/i));
    const input = screen.getByPlaceholderText(/search/i);
    fireEvent.change(input, { target: { value: "app" } });

    expect(screen.getByText(/apple/i)).toBeVisible();
    expect(screen.queryByText(/banana/i)).not.toBeInTheDocument();
  });
})