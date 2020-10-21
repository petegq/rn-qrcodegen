import React, { useState } from 'react';

// import all the components we are going to use
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

const App = () => {
	const [inputText, setInputText] = useState('');
	const [qrvalue, setQrvalue] = useState('');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>
				<Text style={styles.titleStyle}>Generate QR Code</Text>
				<QRCode
					// Value
					value={qrvalue ? qrvalue : 'NA'}
					size={250}
					color='black'
					backgroundColor='white'
				/>
				<Text style={styles.textStyle}>
					Insert any value to generate QR code
				</Text>
				<TextInput
					style={styles.textInputStyle}
					onChangeText={inputText => setInputText(inputText)}
					placeholder='Enter Any Value'
					value={inputText}
				/>
				<TouchableOpacity
					style={styles.buttonStyle}
					onPress={() => setQrvalue(inputText)}>
					<Text style={styles.buttonTextStyle}>Generate QR Code</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		padding: 10
	},
	titleStyle: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	textStyle: {
		textAlign: 'center',
		margin: 10
	},
	textInputStyle: {
		flexDirection: 'row',
		height: 40,
		marginTop: 20,
		marginLeft: 35,
		marginRight: 35,
		margin: 10
	},
	buttonStyle: {
		backgroundColor: '#51D8C7',
		borderWidth: 0,
		color: '#FFFFFF',
		borderColor: '#51D8C7',
		alignItems: 'center',
		borderRadius: 5,
		marginTop: 30,
		padding: 10
	},
	buttonTextStyle: {
		color: '#FFFFFF',
		paddingVertical: 10,
		fontSize: 16
	}
});

export default App;
