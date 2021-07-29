import React from 'react'
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const WebPage = ({ route }) => {
	const uri = route.params.uri
	return (
		<WebView
      style={styles.container}
      source={{ uri }}
    />
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default WebPage
