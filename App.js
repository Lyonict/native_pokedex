import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

// Components
import Card from './Components/Card';

export default function App() {
  // States
  const [pokemonList, setPokemonList] = useState(null)

  // Functions
  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=15&offset=0")
    .then((response) => response.json())
    .then((json) => {
      Promise.all(
        json.results.map((pokemon) => {
          return fetch(pokemon.url)
          .then((response) => response.json())
          .then((json) => {
            return json
          })
          .catch((error) => {
            console.log(error)
          })
        })
      ).then((pokeList) => {
        setPokemonList(pokeList)
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getPokemons()
  }, [])

  return (
    <SafeAreaView style={{backgroundColor:"red"}}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={styles.pokedexTitle}>Pokedex</Text>
        {pokemonList &&
          <FlatList
            data={pokemonList}
            renderItem={(pokemon) => <Card pokemonData={pokemon.item}></Card>}
            keyExtractor={pokemon => pokemon.id}
            numColumns={3}
          />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "black"
  },
  pokedexTitle: {
    textAlign: "center",
    fontSize: 40
  }
});
