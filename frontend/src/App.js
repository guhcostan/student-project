import React from 'react';
import './App.css';
import Dashboard from "./screens/Dashboard";
import styled from "styled-components";
import Colors from "./constants/colors";

const AppStyled = styled.div`
    background: ${Colors.secondary};
    min-height: 100vh;
`

function App() {
    return (
        <AppStyled className="App">
            <Dashboard/>
        </AppStyled>
    );
}

export default App;
