import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, ScrollView, Text } from 'react-native';
import api from '../../service/api';

import * as S from './styles'
import { useTheme } from 'styled-components';
import circle from '../../assets/img/circle.png';
import { Feather } from '@expo/vector-icons'

type Attributes = {
    base_stat: number;
    stat: {
        name: string;
    };
} 
type Abilitys = {
    ability: {
        name: string;
    };
}
export type TypeName = 
    | 'grass'
    | 'fire'
    | 'water'
    | 'poison'
    | 'normal'
    | 'bug'
    | 'flying'
    | 'eletric'
    | 'ground';
  
type PokemonTypes = {
    type: {
        name: TypeName
    };
};
type PokemonProps = {
    id: number;
    name: string;
    stats: Attributes[];
    abilities: Abilitys[];
    types: PokemonTypes[];
    color: string;
};
type RouteParams = {
    pokemonId: number
};

export function About() {
    const { colors } = useTheme();
    const route = useRoute();
    const navigation = useNavigation();
    const { pokemonId } = route.params as RouteParams;

    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const [load, setLoad] = useState<boolean>(true);

    async function getPokemonDetail(){
        try {
            const response = await api.get(`/pokemon/${pokemonId}`);
            const {stats, abilities, id, name, types} = response.data;

            const currentType = types[0]?.type.name as TypeName;
            const color = colors.backgroundCard[currentType];
            
            setPokemon({
                stats,
                abilities,
                id,
                name,
                types,
                color,
            });
            
            setLoad(false);
        } catch(err) {
            Alert.alert('Ops, ocorreu algum erro, tente mais tarde');
        } finally {
            setLoad(false);
        }
    }

    useEffect(() => {
        getPokemonDetail();
    }, []);

    function navigateBack() {
        navigation.goBack();
    }
    
    return ( 
        load ? (
            <Text style={{margin: 200}}> Carregando ...</Text>
        ) : (
            <ScrollView style={{ flex: 1 }}>
                <S.Header type={pokemon.types[0].type.name}>
                    <S.BackButton onPress={navigateBack}>
                        <Feather name="chevron-left" size={24} color="#fff" />
                    </S.BackButton>
    
                    <S.ContentImage>
                        <S.CircleImage source={circle} />
                        <S.PokemonImage 
                            source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}}
                        />
                    </S.ContentImage>
                </S.Header>
            </ScrollView>
        )
    );
}