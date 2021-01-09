import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { GitHub, Clock, Link, User, Users, MapPin } from 'react-feather'
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
        key={this.state.numCards + 6}
        onCardLeftScreen={() => this.handleCardLeftScreen()}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-6">You've reached the end ...so far.</span>
            <div className="flex flex-col justify-center h-full text-md">
              <span className="pb-2">This card is the last one in the deck. Thanks for checking this deck out!</span>
              <span>Feel free to also take a look at my <RouterLink to="/about" className="text-red-500 font-bold transition-colors hover:text-gray-500">about me deck</RouterLink> or my <RouterLink to="/experience" className="text-red-500 font-bold transition-colors hover:text-gray-500">experiences deck.</RouterLink></span>
            </div>
            <div className="flex flex-row font-semibold text-xs animate-pulse">
              <span>Swipe me in any direction to refresh the deck!</span>
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 5}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-4xl font-bold font-serif pb-6">1InTheSocket</span>
              <div className="flex h-32">
                <img className="object-contain rounded-lg" src="/img/1inthesocket.gif" alt="preview" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full text-md py-2">
              <span>A multiplayer top down shooter</span>
              <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />1/2020</span>
              <a href="https://cuhacking.com" className="flex flex-row items-center transition-colors hover:text-red-500"><MapPin className="mr-2" size={16} color="currentColor" />cuHacking 2020</a>
              <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Developer</span>
              <span className="flex flex-row items-center"><Users className="mr-2" size={16} color="currentColor" />Vinh, Bill, Deen,&nbsp;<a href="https://devonpmack.github.io/" className="flex flex-row items-center transition-colors hover:text-red-500">Devon</a>,&nbsp;<a href="https://naek.ca" className="flex flex-row items-center transition-colors hover:text-red-500">Nick</a></span>
              <a href="https://github.com/cuHacks2020/1InTheSocket" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />cuHacks2020/1InTheSocket</a>
              <a href="https://one-in-the-socket.herokuapp.com/" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />Play it here!</a>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/nodejs.svg" alt="Node.js" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/socket.io.svg" alt="Socket.IO" width="21px" height="21px" />
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 4}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-serif pb-8">Tabulizer</span>
              <span className="text-6xl">🎸</span>
            </div>
            <div className="flex flex-col justify-evenly h-full text-md py-10">
              <span>A mobile app to view guitar tabs</span>
              <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />2/2020</span>
              <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Developer</span>
              <span className="flex flex-row items-center"><Users className="mr-2" size={16} color="currentColor" />Vinh, Bill, Deen,&nbsp;<a href="https://devonpmack.github.io/" className="flex flex-row items-center transition-colors hover:text-red-500">Devon</a></span>
              <a href="https://github.com/cuHacks2020/tabulizer" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />cuHacks2020/tabulizer</a>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/react.svg" alt="React" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/expo.svg" alt="Expo" width="21px" height="21px" />
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 3}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-serif pb-6">Booklyn 99</span>
              <div className="flex h-32">
                <img className="object-contain rounded-lg" src="/img/booklyn99.jpg" alt="preview" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full text-md py-6">
              <span>An online web bookstore system</span>
              <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />2/2020 - 4/2020</span>
              <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Frontend Developer</span>
              <span className="flex flex-row items-center"><Users className="mr-2" size={16} color="currentColor" />Vinh,&nbsp;<a href="https://naek.ca" className="flex flex-row items-center transition-colors hover:text-red-500">Nick</a></span>
              <a href="https://github.com/vinhvn/online-bookstore" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />vinhvn/online-bookstore</a>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/nodejs.svg" alt="Node.js" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/express.svg" alt="Express" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/pug.svg" alt="PUG" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/postgresql.svg" alt="PostgreSQL" width="21px" height="21px" />
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 2}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-serif pb-6">Heroes, Monsters, & Dragons 🐉</span>
              <div className="flex">
                <img className="object-contain rounded-lg" src="/img/hmad.gif" alt="preview" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full text-md py-10">
              <span>An adventure game simulator</span>
              <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />4/2020</span>
              <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Sole Developer</span>
              <a href="https://github.com/vinhvn/heroes-monsters-and-dragons" className="flex flex-row items-center transition-colors hover:text-red-500 text-sm"><GitHub className="mr-2" size={16} color="currentColor" />vinhvn/heroes-monsters-and-dragons</a>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/c-plusplus.svg" alt="C++" width="21px" height="21px" />
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 1}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="text-4xl font-bold font-serif pb-6">Sundial ☀️</span>
              <div className="flex w-24 ml-2">
                <img className="object-contain rounded-lg" src="/img/sundial.png" alt="preview" />
              </div>
            </div>
            <div className="flex flex-col justify-evenly h-full text-md py-6">
              <span>A weather and planner mobile app</span>
              <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />9/2020 - 12/2020</span>
              <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Lead Frontend Developer</span>
              <span className="flex flex-row items-center"><Users className="mr-2" size={16} color="currentColor" />Vinh, Bill, Deen,&nbsp;<a href="https://naek.ca" className="flex flex-row items-center transition-colors hover:text-red-500">Nick</a></span>
              <a href="https://github.com/comp3004teamnumber1/sundial" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />comp3004teamnumber1/sundial</a>
              <a href="https://play.google.com/store/apps/details?id=com.billzzhang.sundial&hl=en&gl=US" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />Download it here! (Android)</a>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/react.svg" alt="React" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/expo.svg" alt="Expo" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/python.svg" alt="Python" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/flask.svg" alt="Flask" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/sqlite.svg" alt="SQLite" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/figma.svg" alt="Figma" width="21px" height="21px" />
            </div>
          </div>
        }
      />,
  
      <Card
        key={this.state.numCards}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-8">Projects</span>
            <span className="text-6xl pb-6">☕</span>
            <div className="flex flex-col justify-evenly h-full text-md">
              <span>Welcome to my <span className="text-red-500 font-bold">projects</span> deck! Here, you can find most of my side projects and any other cool things I've made.</span>
              <span>Need more info? Feel free to take a look at my <a href="https://github.com/vinhvn" className="text-red-500 font-bold transition-colors hover:text-gray-500">github</a> or contact me <a href="mailto:vinhh.nguyen@carleton.ca" className="text-red-500 font-bold transition-colors hover:text-gray-500">directly.</a></span>
            </div>
            <div className="flex flex-row font-semibold text-xs animate-pulse">
              <span>Swipe me in any direction to get the next card!</span>
            </div>
          </div>
        }
      />
    ];
    this.setState({
      numCards: this.state.numCards + cards.length,
      cards: [...cards]
    })
  }

  render() {
    return (
      <div className="flex w-full h-cardContainer items-center justify-center dark:bg-gray-900">
        {this.state.cards}
      </div>
    )
  }
}
