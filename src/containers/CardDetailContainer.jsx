import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardDetail from '../components/card/CardDetail';
import { getSingleCard } from '../services/getSingleCard';

export default class CardDetailContainer extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    };
    state = {
        card: {
            name: '',
            image: '',
            cardType: '',
            rarity: '',
            text: '',
            power: '',
            toughness: '',
            id: '',
        },
        loading: true,
    };
    async componentDidMount() {
        const card = await getSingleCard(this.props.match.params.id);
        this.setState({
            card,
            loading: false,
        });
    }
    render() {
        return (
            <div>
                {this.state.loading && <h1>Loading...</h1>}
                <CardDetail card={this.state.card} />
            </div>
        );
    }
}
