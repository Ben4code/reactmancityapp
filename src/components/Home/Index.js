import React from 'react'
import Featured from './Featured/Index'
import Matches from './Matches/Index'
import MeetPlayers from './MeetPlayers/Index'
import Promotions from './Promotions/Index'

export default function Index() {
  return (
    <div className="bck_blue">
      <Featured/>
      <Matches/>
      <MeetPlayers/>
      <Promotions/>
    </div>
  )
}
