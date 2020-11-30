import styled, { css } from 'styled-components';

interface ContainerProps{
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #E0FFFF;
    border-radius: 10px;
    border: 2px solid #98FB98;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    input{
      flex: 1;
      border: 0;
      background: transparent;
    }

    ${(props) => props.isErrored && css`
      border-color: #c53030`
}
`;
