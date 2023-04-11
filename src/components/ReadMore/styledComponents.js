import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  width:100vw;
  flex-direction: column;
  align-items: center;
  color: #1e293b;
  font-family:"Roboto";
  }
`

export const Image = styled.img`
  height: 150px;
  align-self: center;
  @media screen and (min-width: 576px) {
    height: 300px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';

  color: #1e293b;
`

export const BgContainer = styled.div`
  height: 100vh;
  font-family: 'Roboto';

  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1e293b;
  width: 200px;
  @media screen and (min-width: 576px) {
    width: 700px;
  }
`

export const Button = styled.button`
  background-color: #1f81ff;
  width: 100px;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  border: none;
  align-self: flex-start;
`
