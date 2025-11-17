import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger, } from ".";

describe('Accordion', () => {
  it('render closed if default value is not selected', () => {
    render(
      <Accordion className="w-[550px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            You can return any item within 30 days of purchase.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach our support team via email or live chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText(/your return policy/i)).toBeInTheDocument();
    expect(screen.getByText(/contact support/i)).toBeInTheDocument();
  });
  it('render opened accordion on item-2 if defaultValue is selcected', async () => {
    render(
      <Accordion defaultValue="item-2" className="w-[550px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            You can return any item within 30 days of purchase.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>How do I contact support?</AccordionTrigger>
          <AccordionContent>
            You can reach our support team via email or live chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByText(/contact support/i)).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText(/contact support/i));
    expect(screen.getByText(/you can reach our support/i)).toBeInTheDocument();
  })
})