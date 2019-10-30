import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h4 className={'card-title'}>{`${this.props.question}?`}</h4>
            </div>
        )
    }
}
