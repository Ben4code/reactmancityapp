import React, { Component } from 'react'
import { firebaseMatches } from '../../../firebase'
import { firebaseLooper, reverseArray } from "../../UI/misc";
import MatchesBlock from '../../UI/Matches_Block'
import Slide from 'react-reveal/Slide'


export default class Blocks extends Component {

    state = {
        matches: []
    }

    componentDidMount() {
        firebaseMatches.limitToLast(6).once('value')
            .then(snapShot => {
                console.log(snapShot)
                const matches = firebaseLooper(snapShot)
                //console.log(matches)
                this.setState({
                    matches: reverseArray(matches)
                })
            })
    }

    showMatches = (matches) => {
        if (matches) {
            return matches.map(item => {
                return (
                    <Slide bottom key={item.id}>
                        <div className="item">
                            <div className="wrapper">
                                <MatchesBlock match={item} />
                            </div>
                        </div>
                    </Slide>
                )
            })

        }
    }

    render() {
        console.log(this.state.matches)
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}