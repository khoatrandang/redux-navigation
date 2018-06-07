import React from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { createNavigationPropConstructor, initializeListeners } from 'react-navigation-redux-helpers';
import ProfileScreen from '../components/ProfileScreen';
import MapScreen from '../components/MapScreen';
import MapDetailScreen from '../components/MapDetailScreen';

const MapNavigator = createStackNavigator({
    Map: { screen: MapScreen },
    MapDetail: {screen: MapDetailScreen}
})

export const AppNavigator = createBottomTabNavigator({
        ProfileScreen: {
            screen: ProfileScreen
        },
        MapScreen: MapNavigator
    },
    {
        initialRouteName: 'ProfileScreen',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'darkgreen',
            inactiveTintColor: "black",
            inactiveBackgroundColor: "green",
            labelStyle: {
                fontSize: 16,
                padding: 20
            }
        }
    }
);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.navigationPropConstructor = createNavigationPropConstructor('root');
    }

    componentDidMount() {
        initializeListeners('root', this.props.nav);
	}

    render() {
        const navigation = this.navigationPropConstructor(this.props.dispatch, this.props.nav);
        return (
            <AppNavigator navigation={navigation}/>
        );
    }
}

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(App);