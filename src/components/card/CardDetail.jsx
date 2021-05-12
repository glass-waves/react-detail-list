import React from 'react';
import PropTypes from 'prop-types';

const CardDetail = ({ card }) => {
    return (
        <div>
            <h1>{card.name}</h1>
            <img src={card.image} alt="card image" />
            <p>Type: {card.cardType}</p>
            <p>Rarity: {card.rarity}</p>
            <p>Text: {card.text}</p>
            <p>Power: {card.power}</p>
            <p>Toughness: {card.toughness}</p>
        </div>
    );
};

CardDetail.propTypes = {
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

export default CardDetail;
