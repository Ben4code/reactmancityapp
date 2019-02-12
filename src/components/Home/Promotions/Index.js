import React, { Component } from 'react'
import Animation from './Animation'
import Enroll from './Enroll'



export default class Index extends Component {
    render() {
        return (
            <div className="promotion_wrapper" style={{ background: '#fff' }}>
                <div className="container">
                    <Animation/>
                    <Enroll/>
                </div>
            </div>
        )
    }
}
