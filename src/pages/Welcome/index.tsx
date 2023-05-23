import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import pokemonAnimation from './pokemon.json';
import { Button } from '../../components/Button';

import * as S from './styles';

export function Welcome() {
    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <S.WrapperImage>
                        <AnimatedLottieView autoPlay source={pokemonAnimation} loop />
                    </S.WrapperImage>
                </S.WrapperAnimation>

                <S.Title>Bem Vindo</S.Title>
                <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
            </S.Content>
            <S.Footer>
                <Button title='Entrar' />
            </S.Footer>
        </S.Container>
    )
}