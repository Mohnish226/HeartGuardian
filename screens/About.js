import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text as Text2 } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import Colors from '../constants/colors';
import { Container, Header, Content, Card, CardItem, Body} from 'native-base';

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
			width: 250,
			alignItems: 'center',
		},
		dietCard: {
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
		},
		dietRight: {
			color: 'gray',
		}
	
	}
	);

export default function ({ navigation }) {
	return (
		<Layout navigation={navigation} title="Guardians">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: 30,
				}}
			>
				{/* This text using ubuntu font */}
				<View>
				<Card style={styles.card}>
            <CardItem>
				<View style={styles.dietCard}>
                <Text>
					Jane
                </Text>
				<Text2 style={styles.dietRight}>
					Mum
                </Text2>
				</View>
            </CardItem>
          	</Card>

			  <Card style={styles.card}>
            <CardItem>
				<View style={styles.dietCard}>
                <Text>
					Dylan
                </Text>
				<Text2 style={styles.dietRight}>
					Dad
                </Text2>
				</View>
            </CardItem>
          	</Card>

			  <TouchableOpacity
					onPress={() => {
						navigation.navigate('SecondScreen');
					}}
					style={{
						backgroundColor: Colors.primary,
						padding: 10,
						paddingHorizontal: 20,
						marginTop: 10,
						borderRadius: 10,
					}}
				>
					<Text style={{ color: 'white' }} bold>
						Edit guardians
					</Text>
				</TouchableOpacity>
			  </View>
			</View>
		</Layout>
	);
}
