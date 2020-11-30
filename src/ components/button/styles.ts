import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #98FB98;
    border-radius: 10px;
    height: 56px;
    font-weight: 500;
    border: 0;
    padding: 16px;
    width: 100%;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover{
      background: ${shade(0.2, '#98FB98')}
    }

`;
