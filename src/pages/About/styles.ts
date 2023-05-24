import styled, {css} from "styled-components/native";
import { TypeName } from '.';

type TypeProps = {
    type: TypeName
};

export const Header = styled.View<TypeProps>`
    ${({ theme, type }) => css`
        background: ${theme.colors.backgroundCard[type]};
        height: 340px;
        padding: 20px;

        flex-direction: row;
        align-items: center;

        position: relative;
    `}
`;

export const ContentImage = styled.View`
    position: relative;
`;

export const CircleImage = styled.Image`
    width: 125px;
    height: 125px;
    position: absolute;
`;

export const PokemonImage = styled.Image`
    width: 125px;
    height: 125px;
`;

export const PokemonTypeContainer = styled.View`
    flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;