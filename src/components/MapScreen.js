import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

import {gotoDetailScreenAction} from '../redux/actions/navigation.action';

class MapScreen extends React.Component {
    render() {
        return (
            <MapView onLongPress = {()=>this.props.navigation.navigate('MapDetail')}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
})

const mapDispatchToProps = dispatch => ({
    gotoDetailScreen: () => dispatch(gotoDetailScreenAction())
})

export default connect(null, mapDispatchToProps)(MapScreen);