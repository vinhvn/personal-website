import React from 'react'
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
        key={this.state.numCards + 2}
        onCardLeftScreen={() => this.handleCardLeftScreen()}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-3xl font-bold font-serif pb-8">Carleton University</span>
            <div className="flex flex-row justify-evenly items-center">
              <div className="flex w-24">
                <img className="object-contain rounded-lg" src="/img/carletonu.jpg" alt="carletonu" />
              </div>
              <div className="flex flex-col justify-between h-28 text-md">
                <span className="flex flex-row items-center"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
                <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />9/2019 - 4/2020</span>
                <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Teaching Assistant</span>
                <a href="https://carleton.ca/scs" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />carleton.ca/scs</a>
              </div>
            </div>
            <div className="flex flex-col justify-center h-full text-md">
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

      // <Card
      //   key={this.state.numCards + 1}
      //   children={
      //     <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
      //       <span className="text-4xl font-bold font-serif pb-8">Creative Layer</span>
      //       <div className="flex flex-row justify-evenly items-center">
      //         <div className="flex w-24">
      //           <img className="object-contain rounded-lg" src="/img/creativelayer.png" alt="creativelayer" />
      //         </div>
      //         <div className="flex flex-col justify-between h-28 text-md">
      //           <span className="flex flex-row items-center"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
      //           <span className="flex flex-row items-center"><Clock className="mr-2" size={16} color="currentColor" />7/2020 -<span className="text-red-500 font-bold">&nbsp;Present</span></span>
      //           <span className="flex flex-row items-center"><User className="mr-2" size={16} color="currentColor" />Web Developer Co-Op</span>
      //           <a href="https://creativelayer.com" className="flex flex-row items-center transition-colors hover:text-red-500"><Link className="mr-2" size={16} color="currentColor" />creativelayer.com</a>
      //         </div>
      //       </div>
      //       <div className="flex flex-col justify-center h-full text-md">
      //         <span className="text-lg font-serif font-bold pb-2">What I'm doing</span>
      //         <span>Worked in a <span className="text-red-500 font-bold">startup</span> environment, building <span className="text-red-500 font-bold">Vue</span> web apps for clients to use Creative Layer real-time image preview software.</span>
      //         <span className="pt-2">For more info, check my <a href="/resume_2021.pdf" className="text-red-500 font-bold transition-colors hover:text-gray-500">resume.</a></span>
      //       </div>
      //       <span className="text-lg font-serif font-bold pb-2">Technologies</span>
      //       <div className="flex flex-row">
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/javascript.svg" alt="JavaScript" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/typescript-icon.svg" alt="TypeScript" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/vue.svg" alt="Vue" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/react.svg" alt="React" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/python.svg" alt="Python" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/rust.svg" alt="Rust" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/graphql.svg" alt="GraphQL" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws.svg" alt="AWS" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws-s3.svg" alt="AWS S3" width="21px" height="21px" />
      //         <img className="mr-2" src="https://raw.githubusercontent.com/tomchen/stack-icons/master/logos/aws-lambda.svg" alt="AWS Lambda" width="21px" height="21px" />
      //       </div>
      //     </div>
      //   }
      // />,
  
      // <Card
      //   key={this.state.numCards}
      //   children={
      //     <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
      //       <span className="text-4xl font-bold font-serif pb-10">Experience</span>
      //       <span className="text-8xl pb-8">👷</span>
      //       <div className="flex flex-col justify-start h-full text-md">
      //         <span>Welcome to my <span className="text-red-500 font-bold">experiences</span> deck!</span>
      //         <span>Here, you can find all of my previous placements.</span>
      //       </div>
      //       <div className="flex flex-row text-sm animate-pulse">
      //         <span>Swipe in any direction for the next card!</span>
      //       </div>
      //     </div>
      //   }
      // />
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
