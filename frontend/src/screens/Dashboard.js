import React from "react";
import Menu from "../components/Menu";
import {Route, Switch} from "react-router-dom";
import AlunosTableScreen from "./AlunosTableScreen";
import styled from "styled-components";
import AlunoFormScreen from "./AlunoFormScreen";
import Loader from "../components/Loader";
import {useSelector} from "react-redux";

const DashboardStlyed = styled.div`
    display: flex;
    height: 100vh;
`
const Dashboard = () => {

    const loading = useSelector(state => state.loading)
    return <DashboardStlyed>
        <Menu/>
        <div style={{position: 'relative', display: 'flex', flex: 1}}>
            <Loader visible={loading}/>
        <Switch>
            <Route path="/" exact component={AlunosTableScreen}/>
            <Route path="/cadastrar" component={AlunoFormScreen}/>
            <Route path="/editar" component={AlunoFormScreen}/>
        </Switch>
        </div>
    </DashboardStlyed>
}

export default Dashboard