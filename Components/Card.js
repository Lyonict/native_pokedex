import { StyleSheet, Text, View, Image } from "react-native";

export default function Card({pokemonData}) {
  const pokemonId = pokemonData.id.toString()

  return (
    <View style={styles.pokemonCard}>
      <Image
        style={styles.pokemonImage}
        source={{ uri: `${pokemonData.sprites.front_default}`
        }}
      ></Image>
      <Text style={styles.pokemonNumber}>#{(("0000").slice(0, -pokemonId.length)) + pokemonId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pokemonCard: {
    borderWidth: 2,
    borderColor: "black",
    flex: 1,
    margin: 7,
    borderRadius: 5,
  },
  pokemonImage: {
    width: "100%",
    height: 100,
  },
  pokemonNumber: {
    textAlign: "center",
  }
})
