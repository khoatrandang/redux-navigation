
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, Button, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { logIn } from '../redux/actions/user.action';

class ProfileScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log("username: ", this.props.username);
		return (
			<View style={styles.container}>
				<Text>This is profile screen with user: {this.props.username}</Text>
				<Button title="Log me in with Facebook" onPress={() => this.props.login() }/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const mapStateToProps = state => ({
	username: state.user.name
})

const mapDispatchToProps = dispatch => ({
	login: () => dispatch(logIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);