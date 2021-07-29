import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const SearchPage = ({ navigation }) => {
	const [uri, setUri] = useState('')
	const goto = () => {
		navigation.navigate('Web', { uri })
	}

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="https://expo.io"
				onChangeText={(text) => setUri(text)}
				autoCapitalize="none"
			/>
			<Button title="Go to ..." onPress={goto} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		justifyContent: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: '#d0d0d0',
		padding: 10,
		marginBottom: 10
	}
})

export default SearchPage
