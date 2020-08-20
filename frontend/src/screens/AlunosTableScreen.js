import React, {useEffect, useState} from "react";
// import {useTable} from "react-table";
import {useDispatch, useSelector} from "react-redux";
import Table from "../components/Table";
import {IconButton, StyledScreen} from "../StyledComponets";
import {mdiDelete, mdiPencil} from "@mdi/js";


const AlunosTableScreen = (props) => {

    const students = useSelector(state => state.students)

    const dispatch = useDispatch()

    const [columns, setColums] = useState([
        {
            Header: 'Foto',
            accessor: 'photo', // accessor is the "key" in the data
        }, {
            Header: 'Nome',
            accessor: 'name', // accessor is the "key" in the data
        }, {
            Header: 'Rua',
            accessor: 'adress.street', // accessor is the "key" in the data
        }, {
            Header: 'Cep',
            accessor: 'adress.cep', // accessor is the "key" in the data
        }, {
            Header: 'Número',
            accessor: 'adress.number', // accessor is the "key" in the data
        }, {
            Header: 'Ações',
            accessor: 'acoes', // accessor is the "key" in the data
        }
    ])

    useEffect(() => {
        dispatch({type: 'FETCH_STUDENTS'})
    }, [])

    return <StyledScreen>
        <h1>Alunos cadastrados</h1>
        <Table columns={columns} data={students.map(student => ({
            ...student,
            photo: <img style={{width: '40px', height: '40px'}} src={'http://localhost:8080/api/photo?path=' + student.photo}/>,
            acoes: <div>
                <IconButton  onClick={() => {
                    props.history.push('editar', {
                        aluno: student
                    });
                }} path={mdiPencil} size={1}/>
            <IconButton onClick={() => {
                dispatch({type: "DELETE_STUDENT", id: student.id})
            }} path={mdiDelete} color={'red'} size={1}/>
            </div>
        }))}/>
    </StyledScreen>
}

export default AlunosTableScreen