import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Layout from '../components/global/Layout';
import Text from '../components/utils/UbuntuFont';
import { Container, Header, Content, Form, Item, Picker, Icon, Input } from 'native-base';
import { useState } from 'react';

const styles = StyleSheet.create(
	{
		main: {
			width: 200,
		},	
		search: {
			margin: 20,
		},
		picker: {
			margin: 10,
		}
	}
	);
	
export default function ({ navigation }) {

	const [selected2, setSelected2] = useState(undefined);

	function handleValueChange(event) {
		setSelected2(event.value)
	}
	return (
		<Layout navigation={navigation} title="Diet" withBack>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}

				<Text bold>Add to diet</Text>
				<Text>What did you have?</Text>

			<View style={styles.main}>
				<Form>
				<Item regular style={styles.search}>
            <Input placeholder='Search for food' />
          </Item>
            <Item picker style={styles.picker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="What meal"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={selected2}
                onValueChange={handleValueChange}
              >
                <Picker.Item label="Breakfast" value="key0" />
                <Picker.Item label="Lunch" value="key1" />
                <Picker.Item label="Dinner" value="key2" />
                <Picker.Item label="Snack" value="key3" />
              </Picker>
            </Item>
          </Form>
		  </View>

			</View>
		</Layout>
	);
}
