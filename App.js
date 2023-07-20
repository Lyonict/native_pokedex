import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

// Components
import Card from './Components/Card';

export default function App() {
  // States
  const [pokemonList, setPokemonList] = useState(null)

  // Functions
  const getPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
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
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
        <View>
          {/* {pokemonList &&
            <Flatlist
            data={pokemonList}
            renderItem={({pokemon}) => {
              <Card key={pokemon.name} pokemonData={pokemon}></Card>
            }}
            numColumns={3}
            />
          } */}
          <Text>Pokedex</Text>
          {pokemonList &&
            pokemonList.map(pokemon => {
              return <Card key={pokemon.name} pokemonData={pokemon}></Card>
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
