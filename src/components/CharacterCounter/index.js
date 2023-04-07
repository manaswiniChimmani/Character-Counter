import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Character from '../Character'

import './index.css'

class CharacterCounter extends Component {
  state = {inputsList: [], character: '', count: 0}

  onAddCharacter = event => {
    event.preventDefault()
    const {inputsList, character, count} = this.state

    const newCharacter = {
      id: uuidv4(),
      count: character.length,
      character,
    }
    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newCharacter],
      character: '',
    }))
  }

  onChangeCharacter = event => {
    this.setState({character: event.target.value})
  }

  render() {
    const {inputsList, character} = this.state

    const len = inputsList.length

    return (
      <div className="bg-container">
        <div className="container1">
          <div className="card">
            <h1 className="h1">Count the characters like a Boss...</h1>
          </div>
          {len > 0 ? (
            <ul>
              {inputsList.map(each => (
                <Character key={each.id} details={each} />
              ))}
            </ul>
          ) : (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="img"
              />
            </div>
          )}
        </div>
        <div className="container2">
          <div>
            <h1 className="h2">Character Counter</h1>
          </div>
          <form onSubmit={this.onAddCharacter}>
            <input
              type="text"
              value={character}
              onChange={this.onChangeCharacter}
              className="text"
              placeholder="Enter the Characters here"
            />
            <button type="submit" className="btn">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
