import styled, {css} from "styled-components/native";

type PokemonType={
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
  ${({theme, type})=> css`
    border-radius: 10px;
    margin-top: 30px;
    flex-direction: row;
    padding: 20px;
    background-color: ${theme.colors.backgroundCard[type]};
  `}
`;

export const LeftSide = styled.View`
    width: 50%;
    position: relative; 
`;

export const PokemonId = styled.Text`
    ${({theme})=> css`
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    color: ${theme.colors.light_text};`}
`;

export const PokemonName = styled.Text`
    ${({theme})=> css`
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    margin-top: 5px;
    text-transform: capitalize;
    color: ${theme.colors.text_white};`}
`;

export const ImageCardDetailLeftSide = styled.Image`
    position: absolute;
    width: 74px;
    height: 32px;
    left: 90px;
    top: -10px;
`;
export const PokemonContentType = styled.View`
    flex-direction: row;
`;

export const PokemonType = styled.View<PokemonType>`
    ${({theme, type})=> css`
        background-color: ${theme.colors.boxType[type]};
        padding: 5px;
        width: 65px;
        height: 25px;
        border-radius: 5px;
        margin-right: 5px;
        margin-top: 5px;
        justify-content: center;
        align-items: center;
    `}
`

export const PokemonTypeText = styled.Text`
    ${({theme})=> css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: capitalize;
        color: ${theme.colors.text_white}
    `}
`
export const RightSide = styled.View`
    justify-content: center;
    align-items: center;
    width: 50%;
    position: relative;
`;

export const PokemonImage = styled.Image`
    margin-top: -50px;
    width: 130px;
    height: 145px;
`;

export const PokeballDetail = styled.Image`
    position: absolute;
    right: -20px;
    width: 145px;
    height: 135px;
`;