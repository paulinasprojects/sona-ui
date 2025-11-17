import { render, screen, fireEvent } from '@testing-library/react';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from './'
import { userEvent } from '@testing-library/user-event'
import { Button } from '../Button';

describe('Dialog', () => {
  it('should be opened when the open prop is true', () => {
    render(
      <Dialog open>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
          <div className="flex gap-5">
            <DialogClose>Close</DialogClose>
            <Button>Save changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    )
    expect(screen.getByText(/this action cannot be undone/i)).toBeInTheDocument();
  });
  it('open when you click the trigger', () => {
    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
          <div className="flex gap-5">
            <DialogClose>Close</DialogClose>
            <Button>Save changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
    fireEvent.click(screen.getByText(/open dialog/i));
    expect(screen.getByText(/this action cannot be undone/i)).toBeInTheDocument();
  });
  it('close when you click the close button', async () => {
    render(
      <Dialog>
        <DialogTrigger>Open dialog</DialogTrigger>
        <DialogContent>This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
          <div className="flex gap-5">
            <DialogClose>Close</DialogClose>
            <Button>Save changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText(/open dialog/i)).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByText(/open dialog/i));
    expect(screen.getByText(/close/i)).toBeInTheDocument();
    await user.click(screen.getByText(/close/i));
    expect(screen.getByText(/open dialog/i)).toBeInTheDocument();
  })
})