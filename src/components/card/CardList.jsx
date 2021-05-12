import React from 'react';
import PropTypes from 'prop-types';
import MagicCard from './MagicCard';

const CardList = ({ cardList }) => {
    return (
        <ul aria-label="cards">
            {cardList.map((card) => (
                <MagicCard card={card} key={card.id} />
            ))}
        </ul>
    );
};

CardList.propTypes = {
    cardList: PropTypes.arrayOf(
        PropTypes.shape({
            cardList: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    image: PropTypes.string.isRequired,
                    cardType: PropTypes.string.isRequired,
                    rarity: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired,
                    power: PropTypes.string.isRequired,
                    toughness: PropTypes.string.isRequired,
                    id: PropTypes.string.isRequired,
                })
            ),
        })
    ),
};

export default CardList;
