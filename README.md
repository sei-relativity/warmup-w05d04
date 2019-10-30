This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# React 

##### Create a react app that:
1. Takes a question from a form
2. Displays it as a card 
3. If there were no questions yet display `<h1>Loading cards...</h1>`



##### Use two components: 
- `<Cards />` which takes all the cards as a prop from your App.js
- `<Card />` which is called by Cards.js

## End Result 
![result1](src/images/result1.png)
![result2](src/images/result2.png)

## App.js 

```js
import React, { Component } from 'react';
import Card from './Card'
import Cards from './Cards'
import './App.css';

class App extends Component {

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
              onChange={this.handleChange}
               />
            <input type="submit" className="btn-submit" value="Submit" onClick={this.handleSubmit} />
          </form>
        </div>
        <Cards cards={this.state.cards} />        
      </section>
    )
  }
}

export default App;

```

## Card.js

```js
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <h4 className={'card-title'}></h4>
            </div>
        )
    }
}
```

## Cards.js

```js
import React, { Component } from 'react'
import Card from './Card.js'

export default class Cards extends Component {
    render() {

        return (
            <div className="row">
                {allCards}
            </div>
        )
    }
}
```


## index.css

```css
body {
background: #EEE9E9;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
font-size: xx-large;
}

.question {
margin: 1rem 0;
height: 3rem;
width: 80%;
text-align: center;
font-size: x-large;
}

.btn-submit {
height: 3rem;
padding: 0 5rem;
}

.row {
  margin: 0;
}

.card {
  width: 35rem;
  height: auto;
  background: #231e1e;
  border-color: black;
  color: white;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* text-overflow: ellipsis;  */
  overflow: auto;
  white-space: wrap;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card h4 {
  font-size: 2rem;
  /* make text wrap when it overflows */
  overflow-wrap: break-word;
  margin: 1rem;
}

.card h6 {
  font-size: 1.2rem;
  margin-top: 1.618rem;
  opacity: 0.2;
}

.card h6:after {
  font-size: 60%;
  margin-left: 1px;
}

.card:hover {
  cursor: pointer;
}

```