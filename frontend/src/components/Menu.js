import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png'
import Icon from '@mdi/react';
import {mdiAccount, mdiAccountMinus, mdiAccountPlus} from '@mdi/js';
import {Link} from "react-router-dom";

const MenuStyled = styled.div`
    background: white;
    display: flex;
    box-shadow: 0px 0px 2px black;
    width: 300px;
    padding: 0 10px;
    flex-direction: column;
    border: 1px solid black;
    height: 100vh;
`

const Logo = styled.img`
    border-radius: 100px;
    margin: 20px 0;
    width: 80px;
    height: 80px;
    border: 3px solid black;
    box-shadow: 0px 0px 2px black;
`

const Route = styled(Link)`
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 10px 0;
    padding: 20px;
    background: white;
    cursor: pointer;
`

const Menu = () => {
    return <MenuStyled>
        <div>
            <Logo src={logo}/> <h1>Grupo Delta</h1>
        </div>
        <Route to={'/'}>
            <Icon path={mdiAccount}
                  size={1}
                  color="black"/>
                  <h5 style={{margin: '10px'}}>Alunos</h5>
        </Route>
        <Route to={'/cadastrar'}>
            <Icon path={mdiAccountPlus}
                  size={1}
                  color="black"/>
            <h5 style={{margin: '10px'}}>Adicionar</h5>
        </Route>
    </MenuStyled>
}

export default Menu