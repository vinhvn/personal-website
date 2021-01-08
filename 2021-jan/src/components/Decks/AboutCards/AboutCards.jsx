import React from 'react'
import { GitHub, Linkedin, MapPin, Mail, Phone, Send } from 'react-feather'
import Card from '../../Card'

export default class AboutCards extends React.Component {
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
            <span className="text-4xl font-bold font-serif pb-6">Academics 🎓</span>
            <div className="flex flex-col justify-between h-full text-md">
              <span>I'm currently a <span className="text-red-500 font-bold">3<sup>rd</sup></span> year undergraduate student attending <a href="https://carleton.ca" className="text-red-500 font-bold transition-colors hover:text-gray-500">Carleton University</a> for a Bachelors of Computer Science.</span>
              <span>I'm also a co-founder of <a href="https://discord.gg/WAdmJtd" className="text-red-500 font-bold transition-colors hover:text-gray-500">Carleton Computer Science (CCS)</a> and a former gamehead of <a href="https://carleton.gg/" className="text-red-500 font-bold transition-colors hover:text-gray-500">Tespa Carleton.</a></span>
            </div>
            <span className="text-4xl font-bold font-serif py-6">Hobbies 🎧</span>
            <div className="flex flex-col justify-between h-full text-md">
              <span>Whenever I'm free, I like to jam on my <span className="text-red-500 font-bold">electric bass</span> and I'm learning how to play guitar too.</span>
              <span>Apart from music, I enjoy reading about <span className="text-red-500 font-bold">game theory</span> and the strategies formed between rational decision-makers.</span>
            </div>
          </div>
        }
      />,
  
      <Card
        key={this.state.numCards + 1}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <span className="text-4xl font-bold font-serif pb-16">Hello there!</span>
            <div className="flex flex-col justify-between h-full text-md">
              <span className="text-8xl pb-6">🎸</span>
              <span>I'm <span className="font-bold text-red-500">Vincent</span> (but I usually go by "Vinh") and <span className="italic">this</span> is my personal website.</span>
              <span>Thanks for visiting by the way! 😄</span>
              <span>I'm a student and an aspiring web dev, currently doing a frontend developer internship at <a href="https://creativelayer.com" className="text-red-500 font-bold transition-colors hover:text-gray-500">Creative Layer</a>.</span>
              <span>Take a look at my <a href="/resume_2021.pdf" className="text-red-500 font-bold transition-colors hover:text-gray-500">resume!</a></span>
            </div>
          </div>
        }
      />,
  
      <Card
        key={this.state.numCards}
        children={
          <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 pt-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
            <div className="flex flex-col">
              <span className="pb-4 text-5xl font-bold font-serif">Vincent <span className="text-red-500">Vinh</span> Nguyen</span>
              <span className="text-xl font-semibold font-serif"><span className="text-red-500">Full Stack</span> Web Developer</span>
              <span className="text-lg font-semibold font-serif">(He/Him)</span>
            </div>
            <div className="flex flex-col text-md h-48 justify-between">
              <span className="text-xs text-gray-500 dark:text-white">Click on a link!</span>
              <span className="flex flex-row items-center transition-colors"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
              <span className="flex flex-row items-center transition-colors"><Phone className="mr-2" size={16} color="currentColor" />+1 (613) 852-5388</span>
              <a href="/resume_2021.pdf" className="flex flex-row items-center transition-colors hover:text-red-500"><Send className="mr-2" size={16} color="currentColor" />my resume</a>
              <a href="mailto:vinhh.nguyen@carleton.ca" className="flex flex-row items-center transition-colors hover:text-red-500"><Mail className="mr-2" size={16} color="currentColor" />vinhh.nguyen@carleton.ca</a>
              <a href="https://github.com/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />github.com/vinhvn</a>
              <a href="https://linkedin.com/in/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><Linkedin className="mr-2" size={16} color="currentColor" />linkedin.com/in/vinhvn</a>
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

  // const cardsJSX = [
  //   <Card
  //     onCardLeftScreen={() => handleCardLeftScreen(1)}
  //     children={
  //       <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
  //         <span className="text-4xl font-bold font-serif pb-6">Academics 🎓</span>
  //         <div className="flex flex-col justify-between h-full text-md">
  //           <span>I'm currently a <span className="text-red-500 font-bold">3<sup>rd</sup></span> year undergraduate student attending <a href="https://carleton.ca" className="text-red-500 font-bold transition-colors hover:text-red-300">Carleton University</a> for a Bachelors of Computer Science.</span>
  //           <span>I'm also a co-founder of <a href="https://discord.gg/WAdmJtd" className="text-red-500 font-bold transition-colors hover:text-red-300">Carleton Computer Science (CCS)</a> and a former gamehead of <a href="https://carleton.gg/" className="text-red-500 font-bold transition-colors hover:text-red-300">Tespa Carleton</a></span>
  //         </div>
  //         <span className="text-4xl font-bold font-serif py-6">Hobbies 🎧</span>
  //         <div className="flex flex-col justify-between h-full text-md">
  //           <span>Whenever I'm free, I like to jam on my <span className="text-red-500 font-bold">electric bass</span> and I'm learning how to play guitar too.</span>
  //           <span>Apart from music, I enjoy reading about <span className="text-red-500 font-bold">game theory</span> and the strategies formed between rational decision-makers.</span>
  //         </div>
  //       </div>
  //     }
  //   />,

  //   <Card
  //     onCardLeftScreen={() => handleCardLeftScreen()}
  //     children={
  //       <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
  //         <span className="text-4xl font-bold font-serif pb-10">Hello there!</span>
  //         <div className="flex flex-col justify-between h-full text-md">
  //           <span className="text-8xl pb-6">🎸</span>
  //           <span>I'm <span className="font-bold text-red-500">Vincent</span> (but I usually go by "Vinh") and <span className="italic">this</span> is my personal website.</span>
  //           <span>Thanks for visiting by the way! 😄</span>
  //           <span>I'm an aspiring web developer, currently pursuing a B.C.S at <a href="https://carleton.ca" className="text-red-500 font-bold transition-colors hover:text-red-700">Carleton University</a>.</span>
  //           <span>If I'm not coding, I probably either jamming on the bass guitar, listening to tunes, or playing games.</span>
  //         </div>
  //       </div>
  //     }
  //   />,

  //   <Card
  //     onCardLeftScreen={() => handleCardLeftScreen()}
  //     children={
  //       <div className="relative flex flex-col justify-between border shadow-lg rounded-lg p-6 py-10 w-card h-card bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700">
  //         <div className="flex flex-col">
  //           <span className="pb-4 text-5xl font-bold font-serif">Vincent <span className="text-red-500">Vinh</span> Nguyen</span>
  //           <span className="text-xl font-semibold font-serif"><span className="text-red-500">Full Stack</span> Web Developer</span>
  //         </div>
  //         <div className="flex flex-col text-md h-52 justify-between">
  //           <span className="flex flex-row items-center transition-colors"><MapPin className="mr-2" size={16} color="currentColor" />Ottawa, ON</span>
  //           <span className="flex flex-row items-center transition-colors"><Phone className="mr-2" size={16} color="currentColor" />+1 (613) 852-5388</span>
  //           <a href="mailto:vinhh.nguyen@carleton.ca" className="flex flex-row items-center transition-colors hover:text-red-500"><Mail className="mr-2" size={16} color="currentColor" />vinhh.nguyen@carleton.ca</a>
  //           <a href="https://creativelayer.com" className="flex flex-row items-center transition-colors hover:text-red-500"><Briefcase className="mr-2" size={16} color="currentColor" />creativelayer.com</a>
  //           <a href="https://github.com/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><GitHub className="mr-2" size={16} color="currentColor" />github.com/vinhvn</a>
  //           <a href="https://linkedin.com/in/vinhvn" className="flex flex-row items-center transition-colors hover:text-red-500"><Linkedin className="mr-2" size={16} color="currentColor" />linkedin.com/in/vinhvn</a>
  //         </div>
  //       </div>
  //     }
  //   />
  // ];

  // const [cards, setCards] = useState(cardsJSX);

  // const handleCardLeftScreen = (key) => {
  //   console.log(key)
  //   if (key) {
  //     console.log([...cards,...cardsJSX])
  //     setCards([...cards,...cardsJSX])
  //   }
  // }

  // return (
  //   <div className="flex flex-shrink-0 w-full h-cardContainer items-center justify-center dark:bg-gray-900">
  //     {cards}
  //   </div>
  // )
}
