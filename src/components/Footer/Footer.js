import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';

const useStyles = makeStyles({
    root: {
        width: '100%',
        bottom: 0,
        margin: 'fixed',
        position: 'fixed',
        left: 0,
        bottom: 0,
        backgroundColor:'rgba(0,0,0,0)'
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction label="Delete" icon={<ThreeDRotationIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>

        </BottomNavigation>
    );
}