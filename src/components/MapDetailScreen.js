import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MapDetailScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is MapDetailScreen</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default MapDetailScreen;