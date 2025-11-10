import { render, screen } from '@testing-library/react';
import { Card } from './card';
import { CardHeader } from './card-header';
import { CardTitle } from './card-title';
import { CardDescription } from './card-description';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>My Card</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>Card Content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    );
    expect(screen.getByText(/my card/i)).toBeInTheDocument();
    expect(screen.getByText(/card description/i)).toBeInTheDocument();
    expect(screen.getByText(/card content/i)).toBeInTheDocument();
    expect(screen.getByText(/card foote/i)).toBeInTheDocument();
  });
});