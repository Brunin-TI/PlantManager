import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedbackBase,
} from "react-native";

import wateringImg from "../assets/watering.png";
import { Button } from "../components/Button";
import colors from "../styles/colors";

export function Welcome() {
  const [visble, setVisible] = useState(false);

  function handleVisible() {
    setVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas {"\n"}
        de forma fácil
      </Text>
      <Image source={wateringImg} style={styles.image} />
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <Button title=">" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    fontWeight: "bold",
    marginTop: 38,
  },
  subtitle: {
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 20,
    fontSize: 18,
  },
  image: {
    width: 292,
    height: 284,
  },
});
