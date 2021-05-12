

import React, { Component } from 'react'

export default class CardListContainer extends Component {
    state = {
        cardList: [],
        loading: true,
    }

    async componentDidMount () {

    }
    render() {
        return (
            <div>
                {this.state.loading = true && 
                <h1>
                    Loading
                </h1>
                }
            </div>
        )
    }
}
