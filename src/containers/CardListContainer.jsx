import React, { Component } from 'react';
import CardList from '../components/card/CardList';
import { getMagicCards } from '../services/getMagicCards';

export default class CardListContainer extends Component {
    state = {
        cardList: [],
        loading: true,
    };

    async componentDidMount() {
        const cards = await getMagicCards();
        this.setState({
            cardList: cards,
            loading: false
        });

    }
    render() {
        return (
            <div>
                {this.state.loading && <h1>Loading</h1>}
                <CardList cardList={this.state.cardList}/>
            </div>
        );
    }
}
