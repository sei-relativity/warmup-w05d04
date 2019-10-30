import React, { Component } from 'react';
import Cards from './Cards'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    question: '',
    cards: []
  }
}


  handleChange(event){
    console.log(event.target.value)
    this.setState({ question: event.target.value })

  }

  handleSubmit(event){
    event.preventDefault();
    const question = this.state.question
    const card = this.state.cards
    card.push({ question })
    console.log(card);

    this.setState({
      cards: card,
      question: ''
    })
  }

  render() {
    return (
      <section id="add-card" className="container">
        <div className="row">
          <h1>What's your question?</h1>
          <form name="add-card">
            <input
              type="text"
              className="question"
              name="question"
              placeholder="Type a question here!"
              value={this.state.question}
              onChange={(e) => this.handleChange(e)}
               />
            <input type="submit" className="btn-submit" value="Submit" onClick={(e) => this.handleSubmit(e)} />
          </form>
        </div>
        <Cards cards={this.state.cards} />        
      </section>
    )
  }
}

export default App;