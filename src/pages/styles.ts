import styled from 'styled-components';

import backgroundImg from '../assets/bitcoin.jpg';

export const Container = styled.div`
  height:100vh;

  display: flex;
  align-items: stretch;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;

  img {
    width: 80%;
    height: 250px;
  }


  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    align-items: center;
  }


`;
