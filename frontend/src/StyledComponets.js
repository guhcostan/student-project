import styled from "styled-components";
import Colors from "./constants/colors";
import Icon from "@mdi/react";

export const StyledScreen =  styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const Button = styled.div`
    cursor: pointer;
    background: ${Colors.primary};
    color: white;
    padding: 20px;
    border-radius: 10px;   
`

export const IconButton = styled(Icon)`
    cursor: pointer;
`
