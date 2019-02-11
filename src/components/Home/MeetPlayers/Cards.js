import React, { Component } from 'react'
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate'
import Otamedi from '../../../Resources/images/players/Otamendi.png'
import PlayerCard from './PlayerCard'


export default class   extends Component {
  state ={
    show: this.props.show,
    cards: [
      {
        bottom: '90',
        left: '300'
      },
      {
        bottom: '60',
        left: '200'
      },
      {
        bottom: '30',
        left: '100'
      },
      {
        bottom: '0',
        left: '0'
      }
    ]
  }

  showCards = () => (
    this.state.cards.map((card, index)=>(
      <Animate 
        key={index} 
        show={this.props.show} 
        start={{left:0, bottom:0}} 
        enter={{left: [card.left], bottom: [card.bottom], timing: {duration: 500, ease: easePolyOut}}}
      >
        {({left, bottom})=>(
          <div
            style={{
              position: 'absolute', left, bottom, 
            }}
          >
            <PlayerCard
              number="30"
              firstName="Nicolas"
              lastName="Otamendi"
              bck={Otamedi}

            />
          </div>
        )}
      </Animate>
    ))
  )

  render() {
    return (
      <div>
        {this.showCards()}
      </div>
    )
  }
}
