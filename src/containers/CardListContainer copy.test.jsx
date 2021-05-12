import React from 'react';
import { render, screen } from '@testing-library/react';
import CardListContainer from './CardListContainer';

describe('CardListContainer', () => {
    it('renders a list of magic cards to the page', async () => {
        render(<CardListContainer />);
        screen.getByText('Loading');
        const ul = await screen.findAllByRole('list', { name: 'cards' });
        expect(ul).toMatchSnapshot();
    });
});
