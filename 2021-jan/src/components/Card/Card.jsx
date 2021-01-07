import React from 'react'
import TinderCard from 'react-tinder-card'

export default function Card({ children }) {
  return (
    <TinderCard
      className="absolute"
    >
      {children ? children : null}
    </TinderCard>
  )
}
