import React from 'react'
// import makeStyles from ''
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '321px',
        height: '100%',
        backgroundColor: 'blue', 
       }
})

export default function SideBar() {
    const classes = useStyles();
    return (
        <div className = {classes.sideMenu}>
            <p>Main Container</p>
        </div>
    )
}
