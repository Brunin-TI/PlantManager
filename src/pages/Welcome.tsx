import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Feather } from "@expo/vector-icons";
import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/core";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {"\n"}
          suas plantas {"\n"}
          de forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Feather name="chevron-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    color: colors.heading,
    fontWeight: "bold",
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: "center",
    color: colors.heading,
    paddingHorizontal: 20,
    fontSize: 18,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 16,
    width: 56,
    height: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
