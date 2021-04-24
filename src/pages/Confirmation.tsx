import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Button } from "../components/Button";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}
const emojis = {
  hug: "🤗",
  smile: "😄",
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>{emojis[icon]}</Text>

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.footer}>
          <Button title="Começar" onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: "center",
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    textAlign: "center",
    paddingHorizontal: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
