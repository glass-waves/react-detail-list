import React from 'react'
import PropTypes from 'prop-types'
import MagicCard from './MagicCard'

const CardList = ({ cardList }) => {
    return (
        <ul>
            {cardList.map(card => <MagicCard card={card} /> )}
        </ul>
    )
}

CardList.propTypes = {
    cardList: PropTypes.arrayOf(
        PropTypes.shape({
            
        }))
}

export default CardList
