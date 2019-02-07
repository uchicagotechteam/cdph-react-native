import React from 'react';
import {BottomNavigation} from "react-native-material-ui";

export default class BottomNav extends BottomNavigation{
    render() {
        return(
    <BottomNavigation >
            <BottomNavigation.Action
        key="home"
        icon="home"
        label="Home"
        onPress={() => this.setState({ active: 'home' })}
        />
        <BottomNavigation.Action
        key="list"
        icon="list"
        label="List"
        onPress={() => this.setState({ active: 'list' })}
        />
        </BottomNavigation>
    )
    }
}