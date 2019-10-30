import React, { Component } from 'react'
import Card from './Card.js'

export default class Cards extends Component {
    render() {
        const allCards = this.props.cards.map((card, index) => {
            return <Card key={index} question={card.question} />
        })

        if (this.props.cards.length === 0){
            return (
                <h1>Loading cards...</h1>
            )
        }

        return (
            <div className="row">
                {allCards}
            </div>
        )
    }
}
