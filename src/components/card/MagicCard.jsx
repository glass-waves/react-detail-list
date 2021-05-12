import React from 'react';
import PropTypes from 'prop-types';

const MagicCard = ({ card }) => {
    return (
        <li>
            <h1>{card.name}</h1>
            <img src={card.image} alt="image of card" />
        </li>
    );
};

MagicCard.propTypes = {
    card: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        cardType: PropTypes.string.isRequired,
        rarity: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        power: PropTypes.string.isRequired,
        toughness: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
};

export default MagicCard;
