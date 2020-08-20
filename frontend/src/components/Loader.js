import Icon from "@mdi/react";
import {mdiLoading} from "@mdi/js";
import React from "react";
import styled from "styled-components";
const FullScreen = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(225,225,225,0.5);
`
const Loader = (props) => {
    return props.visible && <FullScreen>
        <Icon path={mdiLoading} spin size={2}/>
    </FullScreen>
}

export default Loader