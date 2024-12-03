import { Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

import { Input } from "@/components/input";
import { CARD_SIDE, CreditCard } from "@/components/credit-card";

import { styles } from "./styles";
import { useState } from "react";

export function Payment() {
  const [name, setName] = useState("");
  const [numbar, setNumbar] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");

  const cardSide = useSharedValue(CARD_SIDE.front);

  function showFrontCard() {
    cardSide.value = CARD_SIDE.front;
  }

  function showBackCard() {
    cardSide.value = CARD_SIDE.back;
  }

  function handleFlipCard() {
    console.log(cardSide.value);
    if (cardSide.value === CARD_SIDE.front) {
      showBackCard();
    } else {
      showFrontCard();
    }
  }

  return (
    <View style={styles.container}>
      <CreditCard cardSide={cardSide} />

      <TouchableOpacity style={styles.button} onPress={handleFlipCard}>
        <Text>Inverter</Text>
      </TouchableOpacity>

      <View style={styles.form}>
        <Input placeholder="Nome do Titular" />
        <Input
          placeholder="Número do cartão"
          keyboardType="numeric"
          maxLength={16}
        />

        <View style={styles.inputInline}>
          <Input placeholder="01/02" style={styles.smallInput} />
          <Input
            placeholder="123"
            style={styles.smallInput}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
}

// parou em 55 minutos