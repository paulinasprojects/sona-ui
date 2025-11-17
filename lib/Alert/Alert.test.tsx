import { render, screen } from '@testing-library/react';
import { Alert } from '.';

describe('Alert', () => {
  it('render default variant and alert text', () => {
    render(
      <Alert variant={"default"}>
        <span> Please verify your billing information and try again.</span>
      </Alert>
    )
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/Please verify/i);
    expect(alert).toHaveClass("bg-card", "text-card-foreground")
  });
})