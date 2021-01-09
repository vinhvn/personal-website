import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { MapPin, Link, User, Clock } from 'react-feather'
import Card from '../../Card'

export default class ExperienceCards extends React.Component {
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
        key={this.state.numCards + 3}
        onCardLeftScreen={() => this.handleCardLeftScreen()}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-6">You've reached the end ...so far.</span>
            <div className="flex flex-col justify-center h-full text-md">
              <span className="pb-2">This card is the last one in the deck. Thanks for checking this deck out!</span>
              <span>Feel free to also take a look at my <RouterLink to="/about" className="text-red-500 font-bold transition-colors hover:text-gray-500">about me deck</RouterLink> or my <RouterLink to="/projects" className="text-red-500 font-bold transition-colors hover:text-gray-500">projects deck.</RouterLink></span>
            </div>
            <div className="flex flex-row font-semibold text-xs animate-pulse">
              <span>Swipe me in any direction to refresh the deck!</span>
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 2}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-3xl font-bold font-serif pb-8">Carleton University</span>
            <div className="flex flex-row justify-evenly items-center">
              <div className="flex w-16">
                <img className="object-contain rounded-lg" src="/img/carletonu.jpg" alt="carletonu" />
              </div>
              <div className="flex flex-col justify-between pl-2 h-28 text-md">
                <span className="flex flex-row items-center"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
                <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />9/2019 - 4/2020</span>
                <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Teaching Assistant</span>
                <a href="https://carleton.ca/scs" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />carleton.ca/scs</a>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full text-sm">
              <span className="text-lg font-serif font-bold pb-2">What I did</span>
              <span>Headed assignment <span className="text-red-500 font-bold">workshops</span> and held <span className="text-red-500 font-bold">office hours</span> to help students with any problems they encountered. Graded assignments and midterms as well.</span>
              <span className="pt-2">For more info, check my <a href="/resume_2021.pdf" className="text-red-500 font-bold transition-colors hover:text-gray-500">resume.</a></span>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/java.svg" alt="Java" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/python.svg" alt="Python" width="21px" height="21px" />
            </div>
          </div>
        }
      />,

      <Card
        key={this.state.numCards + 1}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-8">Creative Layer</span>
            <div className="flex flex-row justify-evenly items-center">
              <div className="flex w-16">
                <img className="object-contain rounded-lg" src="/img/creativelayer.png" alt="creativelayer" />
              </div>
              <div className="flex flex-col justify-between h-28 pl-2 text-md">
                <span className="flex flex-row items-center"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
                <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />7/2020 -<span className="text-red-500 font-bold">&nbsp;Present</span></span>
                <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Web Developer Co-Op</span>
                <a href="https://creativelayer.com" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />creativelayer.com</a>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full text-sm">
              <span className="text-lg font-serif font-bold py-2">What I'm doing</span>
              <span>Worked in a <span className="text-red-500 font-bold">startup</span> environment, building <span className="text-red-500 font-bold">Vue</span> web apps for clients to use Creative Layer real-time image preview software.</span>
              <span className="pt-2">For more info, check my <a href="/resume_2021.pdf" className="text-red-500 font-bold transition-colors hover:text-gray-500">resume.</a></span>
            </div>
            <span className="text-lg font-serif font-bold pb-2">Technologies</span>
            <div className="flex flex-row">
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/typescript-icon.svg" alt="TypeScript" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/vue.svg" alt="Vue" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/react.svg" alt="React" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/python.svg" alt="Python" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/rust.svg" alt="Rust" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/graphql.svg" alt="GraphQL" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws.svg" alt="AWS" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws-s3.svg" alt="AWS S3" width="21px" height="21px" />
              <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws-lambda.svg" alt="AWS Lambda" width="21px" height="21px" />
            </div>
          </div>
        }
      />,
  
      <Card
        key={this.state.numCards}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-8">Experience</span>
            <span className="text-6xl pb-6">👷</span>
            <div className="flex flex-col justify-evenly h-full text-md">
              <span>Welcome to my <span className="text-red-500 font-bold">experiences</span> deck! Here, you can find my current job and all of my previous experiences and jobs.</span>
              <span>Need more info? Feel free to take a look at my <a href="/resume_2021.pdf" className="text-red-500 font-bold transition-colors hover:text-gray-500">resume</a> or contact me <a href="mailto:vinhh.nguyen@carleton.ca" className="text-red-500 font-bold transition-colors hover:text-gray-500">directly.</a></span>
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
      <div className="flex flex-shrink-0 w-full h-cardContainer items-center justify-center dark:bg-gray-900">
        {this.state.cards}
      </div>
    )
  }
}
