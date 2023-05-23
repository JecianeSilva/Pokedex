import React, { useEffect, useState } from "react";

import api from "../../service/api";

import * as S from './styles';
import { FlatList, Text } from "react-native";
import { Card, Pokemon, PokemonType } from "../../components/Card";

type Request ={
    id: number,
    types: PokemonType[]
}
export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    async function getAllsPokemon() {
        const response = await api.get('/pokemon');
        const {results} = response.data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
                const {id,types} = await getMoreInfo(pokemon.url)
                return {
                    name: pokemon.name,
                    id,
                    types
                }
            })
        )

        setPokemons(payloadPokemons);
    }

    async function getMoreInfo(url : string): Promise<Request> {
        const response = await api.get(url);
        const {id, types} = response.data;

        return {id, types}
     }
    useEffect(()=>{
        getAllsPokemon();
    },[]);

    return (
        <S.Container>
            <FlatList
            data={pokemons}
            keyExtractor={pokemon => pokemon.id.toString()}
            renderItem={({item: pokemon}) =>(
                <Card data={pokemon} />
            )}
            />
        </S.Container>
    )
}