import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../UI/misc'
import Reveal from 'react-reveal/Reveal'
import Cards from './Cards'


export default class Index extends Component {

    state ={
        show: false
    }


    render() {
        return (
            <Reveal onReveal={()=>{
                this.setState({show: true})
            }}
            fraction={0.7}
            >
            <div className="home_meetplayers"
                style={{
                    background: `#fff url(${Stripes})`
                }}>
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            <Cards show={this.state.show}/>
                </div>
                        <div className="home_text_wrapper">
                            <div>
                                <Tag bck="#0e1731" size="100px" add={{
                                    display: 'inline-block', marginBottom: '20px'
                                }} color="#fff">Meet</Tag>
                                <Tag bck="#0e1731" size="100px" add={{
                                    display: 'inline-block', marginBottom: '20px'
                                }} color="#fff">The</Tag>
                                <Tag bck="#0e1731" size="100px" add={{
                                    display: 'inline-block', marginBottom: '20px'
                                }} color="#fff">Players</Tag>
                            </div>
                            <Tag link={true} linkTo="/team" bck="#fff" size="22px" color="#0e1731" add={{
                                display: 'inline-block',
                                marginBottom: '27px',
                                border: '1px solid #0e1731'
                            }}>
                                View them here
                            </Tag>
                        </div>
                    </div>
                </div>
            </div>
            </Reveal>
        )
    }
}
