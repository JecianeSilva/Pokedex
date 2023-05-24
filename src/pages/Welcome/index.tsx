import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';

import { Button } from '../../components/Button';
import pokemonAnimation from './pokemon.json';
import * as S from './styles';

export function Welcome() {
    const navigation = useNavigation();
    function handleNavigation(){
        navigation.navigate('Home');
    }
    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <S.WrapperImage>
                        <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
                    </S.WrapperImage>
                </S.WrapperAnimation>

                <S.Title>Bem Vindo(a) ao Pokédex</S.Title>
                <S.SubTitle>Encontre todos os pokémons em um só lugar.</S.SubTitle>
            </S.Content>
            <S.Footer>
                <Button title='Entrar' onPress={handleNavigation}/>
            </S.Footer>
        </S.Container>
    )
}