import { Text, View, Image, SafeAreaView, StyleSheet } from "react-native";

export default function Pokemon({navigation, route}) {
  const data = route.params

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return (
    <SafeAreaView style={{backgroundColor:"red"}}>
      <View style={styles.container}>
        <View>
          <Text>{capitalize(data.name)}</Text>
        </View>
        <Image
          style={styles.pokemonImage}
          source={{ uri: `${data.sprites.front_default}`
          }}
        ></Image>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display:"flex",
    borderWidth: 1
  },
  pokemonImage: {
    width: 100,
    height: 100,
    borderWidth: 1
  }
});
