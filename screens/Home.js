import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text as Text2, Image } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import { Container, Header, Content, Card, CardItem, Body} from 'native-base';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create(
{
	heartTitle: {
		margin: 5,
	},	
	logo: {
		width: 106,
		height: 58,
		margin: 20,
	  },
	card: {
		width: 100,
		alignItems: 'center',
	},
	heartRate: {
		justifyContent: 'space-between',
	}

}
);

export default function ({ navigation }) {

	const [Heart, setHeart] = useState(114);

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	  }

	setInterval(function(){   
		setHeart(Math.floor(getRandomArbitrary(90,95))); 
	
	 }, 1000);

	return (
		<Layout navigation={navigation} title="Home">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Image
				        style={styles.logo}
        source={require('../logo.png')}
      />
				<Text bold>Current heart rate</Text>
				<Card style={styles.card}>
            <CardItem>
				<View style={styles.heartRate}>
                <Text>
					{Heart}
                </Text>
					<Icon name="heart" size={15} color="#900" />
				</View>
            </CardItem>
          	</Card>
			</View>
		</Layout>
	);
}
