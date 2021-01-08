import React from 'react'
import TinderCard from 'react-tinder-card'

export default function Card({ children, onCardLeftScreen }) {
  return (
    <TinderCard
      onCardLeftScreen={onCardLeftScreen}
      className="absolute"
    >
      {children ? children : null}
    </TinderCard>
  )
}
