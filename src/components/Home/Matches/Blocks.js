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
                const matches = firebaseLooper(snapShot)
                this.setState({
                    matches: reverseArray(matches)
                })
            })
    }
    componentWillUnmount(){
        this.setState({
            matches: ''
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
        return (
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}
