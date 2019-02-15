import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import {firebase} from '../../../firebase'

export default function AdminNav() {

    const links = [
        { title: 'Matches', linkTo: '/admin_matches', icon: 'fa fa-list-ol' },
        { title: 'Add Match', linkTo: '/admin_matches/edit_match', icon: 'fa fa-plus-circle' },
        { title: 'Players', linkTo: '/admin_players', icon: 'fa fa-users' },
        { title: 'Add Players', linkTo: '/admin_players/add_player', icon: 'fa fa-user-plus' },
    ];

    const style = {
        color: '#fff',
        fontWeight: '300',
        borderBottom: '1px solid #353535',
        width: '100%',

    };

    const logOut = () => {
        firebase.auth().signOut()
        .then( ()=> {
            console.log("Sign out successfull")
        })
    }

    const showItems = () => {
        return links.map(link => {
            return (
                <Link to={link.linkTo} key={link.title}>
                    <ListItem button style={style}>
                        <div style={{ padding: '20px 50px' }}>
                            <i className={link.icon}></i> <span></span>
                            {link.title}
                        </div>
                    </ListItem>
                </Link>
            )
        })
    };

    return (
        <div>
            {showItems()}
            <ListItem button style={style} onClick={()=> logOut()}>
                <div style={{ padding: '20px 50px' }}>
                    <i className="fa fa-sign-out"></i> <span></span>
                    Log Out
                </div>
            </ListItem>
        </div>
    );

}
