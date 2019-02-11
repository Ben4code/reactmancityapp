
import React from 'react'
import Blocks from './Blocks'
import {Tag} from '../../UI/misc'


export default function Index() {
  return (
    <div className="home_matches_wrapper">
        <div className="container">
            <Tag bck="#0e1731" size="50px" color="#fff">
            Matches
            </Tag>

            <Blocks/>

            <Tag link={true} linkTo="/" bck="#fff" size="22px" color="#0e1731">
            See more matches
            </Tag>
        </div>
    </div>
  )
}
 