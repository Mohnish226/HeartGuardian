import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text as Text2,
  Image,
} from "react-native";
import Layout from "../components/global/Layout";
import Text from "../components/utils/UbuntuFont";
import Colors from "../constants/colors";
import { Container, Header, Content, Card, CardItem, Body,  Modal,  Alert, TouchableHighlight} from "native-base";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const styles = StyleSheet.create({
  heartTitle: {
    margin: 5,
  },
  logo: {
    width: 186,
    height: 88,
    margin: 20,
  },
  card: {
    width: 100,
    alignItems: "center",
  },
  heartRate: {
    justifyContent: "space-between",
  },
  card2: {
    width: 270,
    alignItems: "center",
  },
  dietCard: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dietRightHealty: {
    color: "green",
  },
  dietRightModerate: {
    color: "orange",
  },
  dietTitle: {
    color: "grey",
  },
  dietSum: {
    marginTop: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default function ({ navigation }) {
  const [Heart, setHeart] = useState(114);
  const [modalVisible, setModalVisible] = useState(true);

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  setInterval(function () {
    setHeart(Math.floor(getRandomArbitrary(90, 95)));
  }, 1000);

  return (
    <Layout navigation={navigation} title="Home">
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        {/* This text using ubuntu font */}
        <Image style={styles.logo} source={require("../logo.png")} />
        <Text bold>Current heart rate</Text>
        <Card style={styles.card}>
          <CardItem>
            <View style={styles.heartRate}>
              <Text>{Heart}</Text>
              <Icon name="heart" size={15} color="#900" />
            </View>
          </CardItem>
        </Card>

        <View style={styles.dietSum}>
          <Card style={styles.card2}>
            <CardItem>
              <View style={styles.dietCard}>
                <Text2 style={styles.dietTitle}>Cholesterol</Text2>
                <Text2 style={styles.dietRightHealty}>Healthy</Text2>
              </View>
            </CardItem>
          </Card>

          <Card style={styles.card2}>
            <CardItem>
              <View style={styles.dietCard}>
                <Text2 style={styles.dietTitle}>Blood Pressure</Text2>
                <Text2 style={styles.dietRightModerate}>Moderate</Text2>
              </View>
            </CardItem>
          </Card>
        </View>
      </View>
    </Layout>
  );
}
