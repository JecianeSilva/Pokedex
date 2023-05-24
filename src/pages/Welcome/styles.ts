import styled, { css } from "styled-components/native";

export const Container = styled.View`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.colors.backgroundWater}; 
    `}
`;
export const Content = styled.View`
  ${({ theme }) => css`
    height: 80%;
    padding: 24px;
    align-items: center;
    justify-content: center;
  `}
`;

export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background: ${theme.colors.types.water};
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    transform: rotate(30deg)
  `}
`;

export const WrapperImage = styled.View`
  width: 200px;
  height: 300px;
  transform: rotate(-30deg);
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 24px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  
    margin-top: 16px;
    color: ${theme.colors.text_white};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    
    margin-top: 16px;
    color: ${theme.colors.text_white};
  `}
`;