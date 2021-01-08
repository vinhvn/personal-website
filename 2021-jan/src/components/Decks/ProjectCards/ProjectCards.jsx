import React from 'react'
// import { GitHub, Linkedin, MapPin, Mail, Phone, Send } from 'react-feather'
import Card from '../../Card'

export default class ProjectCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numCards: 0,
      cards: [],
    }
  }

  componentDidMount() {
    this.handleCardLeftScreen();
  }

  handleCardLeftScreen = () => {
    const cards = [
      <Card
        key={this.state.numCards + 1}
        onCardLeftScreen={() => this.handleCardLeftScreen()}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            Test
          </div>
        }
      />,
  
      <Card
        key={this.state.numCards}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-10">Projects</span>
            <span className="text-8xl pb-8">☕</span>
            <div className="flex flex-col justify-start h-full text-md">
              <span>Welcome to my <span className="text-red-500 font-bold">projects</span> deck!</span>
              <span>Here, you can find all of my side projects.</span>
            </div>
            <div className="flex flex-row text-sm animate-pulse">
              <span>Swipe in any direction for the next card!</span>
            </div>
          </div>
        }
      />
    ];
    this.setState({
      numCards: this.state.numCards + cards.length,
      cards: [...this.state.cards, ...cards]
    })
  }

  render() {
    return (
      <div className="flex flex-shrink-0 w-full h-cardContainer items-center justify-center dark:bg-gray-900">
        {this.state.cards}
      </div>
    )
  }
}
