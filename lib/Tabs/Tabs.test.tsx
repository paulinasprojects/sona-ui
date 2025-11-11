import { render, screen } from '@testing-library/react';
import { Tabs } from './tabs';
import { userEvent } from '@testing-library/user-event';
import { TabsTrigger } from './tabs-trigger';
import { TabsList } from './tabs-list';
import { TabsContent } from './tabs-content';


describe('Tabs', () => {
  const renderComponent = () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="profile">Profile content</TabsContent>
      </Tabs>
    );
  }

  it('renders default tab content', () => {
    renderComponent();
    expect(screen.getByText(/Account content/i)).toBeInTheDocument();
    expect(screen.queryByText(/Profile content/i)).not.toBeInTheDocument();
  });

  it("switches tabs on click", async () => {
    renderComponent();
    const user = userEvent.setup();
    await user.click(screen.getByText(/profile/i));
    expect(screen.getByText(/profile content/i)).toBeInTheDocument();
    expect(screen.queryByText(/account content/i)).not.toBeInTheDocument();
  });
})