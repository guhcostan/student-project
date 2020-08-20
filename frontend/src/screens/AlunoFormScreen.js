import React, {useState} from "react";
import styled from "styled-components";
import {Button, StyledScreen} from "../StyledComponets";
import {useDispatch} from "react-redux";

const Card = styled.div`
    width: 400px;
    background: white;
    padding: 40px;
    
    border: 1px solid black;
    border-radius: 10px;
`
const Input = styled.input`
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 100%;
    height: 30px;
`

const Label = styled.div`
margin: auto;
    margin-bottom: 10px;
    text-align: left;
`

const Img = styled.img`
    width: 100px;
    height: 100px;
`


const AlunoFormScreen = (props) => {
    const [aluno, setAluno] = useState(props.history.location.state ? props.history.location.state.aluno : {})
    const [photo, setPhoto] = useState(null)
    const dispatch = useDispatch()

    function changeAluno(property, value) {
        setAluno({...aluno, [property]: value})
    }

    function changeAdress(property, value) {
        setAluno({...aluno, adress: {...aluno.adress, [property]: value}})
    }

    console.log(photo)

    return <StyledScreen><Card>
        <h2>Cadastro de aluno</h2>
        <Label>Nome*</Label>
        <Input value={aluno.name} onChange={(value) => changeAluno('name', value.target.value)}/>
        <Label>Foto*</Label>
        <Img src={photo ? URL.createObjectURL(photo) : 'api/photo?path=' + aluno.photo}/>
        <Input type="file" id="img" name="img" accept="image/*" onChange={(value) => {
            setPhoto(value.target.files[0])
        }}/>
        <Label>Rua*</Label>
        <Input value={aluno.adress && aluno.adress.street}
               onChange={(value) => changeAdress('street', value.target.value)}/>
        <Label>Cep*</Label>
        <Input value={aluno.adress && aluno.adress.cep} onChange={(value) => changeAdress('cep', value.target.value)}/>
        <Label>Numero*</Label>
        <Input value={aluno.adress && aluno.adress.number}
               onChange={(value) => changeAdress('number', value.target.value)}/>
        <Label>Complemento</Label>
        <Input value={aluno.adress && aluno.adress.complement}
               onChange={(value) => changeAdress('complement', value.target.value)}/>
        <Button style={{width: '70%', margin: 'auto'}} onClick={() => {
            if(aluno.id) {
                dispatch({type: "EDIT_STUDENT", aluno, photo, history: props.history})
            }else{
                dispatch({type: "CREATE_STUDENT", aluno, photo, history: props.history})
            }
        }}>Cadastrar</Button>
    </Card>
    </StyledScreen>
}

export default AlunoFormScreen