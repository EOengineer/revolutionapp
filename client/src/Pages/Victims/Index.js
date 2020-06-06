import React from 'react'
import VictimCard from '../../Components/Victims/VictimCard'

export default class Victims extends React.Component {
  state = {
    victims: []
  }

  componentDidMount() {
    /*
    TODO: This is a placeholder to show retrieving data from the server.
          fetch functions live in a module for consistent promise management.
    */
    fetch('/users').then(response => {
      if (!response.ok) {
        // TODO: Error Handling
        return
      }
      response.json().then(data => {
        this.setState({victims: data})
      })
    })
  }

  victimsList = () => {
    return this.state.victims.map(victim => {
      return <VictimCard key={victim.id} victim={victim} />
    })
  }

  render() {
    return (
      (
        <div>
          <h1>Victims</h1>
          <div>
            {this.victimsList()}
          </div>
        </div>
      )
    )
  }
}
