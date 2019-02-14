import React from 'react';
import {BottomNavigation} from "react-native-material-ui";

export default class BottomNav extends BottomNavigation{
    constructor(props){
        super(props);
        this.state = {
            active: '',
        }
    }
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

/*import BottomNavigation, {FullTab, FullTabProps as renderIcon} from 'react-native-material-bottom-navigation'
import Icon from "react-native-vector-icons/RNIMigration";
import MaterialIcons from "react-native-vector-icons";
import View from "react-native";

export default class BottomNav extends React.Component {
    tabs = [
        {
            key: 'games',
            icon: "home",
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'movies-tv',
            icon: 'list',
            label: 'Movies & TV',
            barColor: '#B71C1C',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        },
        {
            key: 'music',
            icon: 'home',
            label: 'Music',
            barColor: '#E64A19',
            pressColor: 'rgba(255, 255, 255, 0.16)'
        }
    ]

    renderIcon = icon => ({ isActive }) => (
        <MaterialIcons size={24} color="white" name={icon} />
)

    renderTab = ({ tab, isActive }) => (
        <FullTab
    isActive={isActive}
    key={tab.key}
    label={tab.label}
    renderIcon={this.renderIcon(tab.icon)}
/>
)

    render() {
        return (
        <BottomNavigation
        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
        renderTab={this.renderTab}
        tabs={this.tabs}
        />
    )
    }
}*/

/*import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation'
import MaterialIcons from 'react-native-vector-icons'

export default class BottomNav extends React.Component {
    state = {
        activeTab: 'games'
    }

    tabs = [
        {
            key: 'games',
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'gamepad-variant'
        },
        {
            key: 'movies-tv',
            label: 'Movies & TV',
            barColor: '#00695C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'movie'
        },
        {
            key: 'music',
            label: 'Music',
            barColor: '#6A1B9A',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'music-note'
        },
        {
            key: 'books',
            label: 'Books',
            barColor: '#1565C0',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'book'
        }
    ]

    state = {
        activeTab: this.tabs[0].key
    }

    renderIcon = icon => ({ isActive }) => (
        <MaterialIcons size={24} color="white" name={icon} />
)

    renderTab = ({ tab, isActive }) => (
        <IconTab
    isActive={isActive}
    showBadge={tab.key === 'movies-tv'}
    renderBadge={() => <Badge>2</Badge>}
    key={tab.key}
    label={tab.label}
    renderIcon={this.renderIcon(tab.icon)}
/>
)

    render() {
        return (
        <BottomNavigation
        tabs={this.tabs}
        activeTab={this.state.activeTab}
        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
        renderTab={this.renderTab}
        useLayoutAnimation
        />
    )
    }
}*/