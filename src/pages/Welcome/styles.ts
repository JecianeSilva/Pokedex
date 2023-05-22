import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.colors.background}; 
    `}
`;
export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
    align-items:center
    justify-content: center;
    background: ${theme.colors.background}; 
  `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 30%;
    background-color: ${theme.colors.backgroundWater};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    line-height: 36px;
    color: ${theme.colors.text_white};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 14px;
    line-height 22px;
    margin-top: 16px;
    color: ${theme.colors.text_white};
  `}
`;