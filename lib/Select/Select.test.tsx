import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './select';
import { userEvent } from '@testing-library/user-event'
import { SelectContent } from './select-content';
import { SelectTrigger } from './select-trigger';
import { SelectOption } from './select-option';

describe('Select', () => {
  const renderComponent = () => {
    const handleClick = vi.fn();
    render(
      <Select onValueChange={handleClick}>
        <SelectTrigger placeholder='Choose option' />
        <SelectContent>
          <SelectOption value='Option 1'>Option 1</SelectOption>
          <SelectOption value='Option 2'>Option 2</SelectOption>
        </SelectContent>
      </Select>
    );
    return {
      handleClick
    }
  }

  it('renders trigger and shows options on click', () => {
    renderComponent();
    expect(screen.getByText(/choose option/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/choose option/i));
    expect(screen.getByText(/option 1/i)).toBeVisible();
  });

  it('selects an option', async () => {
    const { handleClick } = renderComponent();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /choose option/i }));
    await user.click(screen.getByText("Option 1"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledWith("Option 1");

    await user.click(screen.getByRole("button", { name: /option 1/i }));
    await user.click(screen.getByText("Option 2"));
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledWith("Option 2");
  })

})