import React from "react";
import pureRender from "pure-render-decorator";

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import Heating from "app/components/Heating/Heating";
import AC from "app/components/AC/AC";
import SofaLED from "app/components/SofaLED/SofaLED";
import FloorLED from "app/components/FloorLED/FloorLED";
import LED from "app/components/LED/LED";

import styles from "app/styles";
const backgroundImage = require("./assets/background.png");

function getTemperatureString(temperature) {
  return parseFloat(temperature.temperature.temperature).toFixed(1);
}

function getHumidityString(temperature) {
  return parseFloat(temperature.temperature.humidity).toFixed(1);
}

function Home({ items, dispatch }) {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <View style={{ position:'absolute',width:'100%',height:'100%'}}>
        <Image source={backgroundImage} style={styles.background} />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.temperatureText}>
            Temperatur {getTemperatureString(items.Temperature)} °C
          </Text>
          <Text style={styles.temperatureText}>
            Humidity {getHumidityString(items.Temperature)} %
          </Text>

          {/* <Heating
            onChange={newValue => dispatch("Heating", newValue)}
            item={items.Heating}
          /> */}

          {/* <AC onChange={newValue => dispatch("AC", newValue)} item={items.AC} /> */}

          {/* <FloorLED
            onChange={newValue => dispatch("LedFloor", newValue)}
            item={items.LedFloor}
          /> */}

          <LED
            onChange={newValue => dispatch("ledRed", newValue)}
            item={items.ledRed}
            name="Red"
          />
          <LED
            onChange={newValue => dispatch("ledGreen", newValue)}
            item={items.ledGreen}
            name="Green"
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default pureRender(Home);
