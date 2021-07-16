import React from 'react';
import styled from 'styled-components';
import {Link } from 'react-router-dom';



const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 580px;
  height: 400px;
  margin-left: 600px;
  margin-top: 215px;
  
  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 50px;

`;

const LoginButton = styled.div`
  margin:0;
  text-align: center;
  background: #181B50;
  height:50px;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  white-space: nowrap;
  text-decoration:none;
  margin-top:150px;
`;





const Login = () => (
  <>
    <Container>

        <LoginButton>
           <Link to="/mybooking" style={{ textDecoration: 'none' ,color:'white'}}>Search</Link>
        </LoginButton>
    </Container>
  </>
);

export default Login;
