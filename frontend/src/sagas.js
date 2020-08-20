import {call, put, takeLatest} from "@redux-saga/core/effects";

function* fetchStudents(action) {
    try {
        const response = yield call(fetch, 'api/students')
        const students = yield call([response, response.json])
        yield put({type: "FETCH_STUDENTS_SUCCEEDED", students});
    } catch (e) {
        yield put({type: "FETCH_STUDENTS_ERROR"});
    }
}

function* createStudent(action){
    try {
        let formData = new FormData();
        formData.append('photo', action.photo);
        const response = yield call(fetch, 'api/uploadImage', {
            method: 'POST',
            body : formData
        })
        action.aluno.photo = yield call([response, response.text])
        yield call(fetch, 'api/student', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(action.aluno)
        })
        action.history.push('/')
        yield put({type: "CREATE_STUDENT_SUCCEEDED"});
    }catch (e){
        console.log(e)
        yield put({type: "CREATE_STUDENT_ERROR"});
    }
}

function* editStudent(action){
    try {
        let formData = new FormData();
        formData.append('photo', action.photo);
        const response = yield call(fetch, 'api/uploadImage', {
            method: 'POST',
            body : formData
        })
        console.log(action)
        action.aluno.photo = yield call([response, response.text])
        yield call(fetch, 'api/student', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(action.aluno)
        })
        yield put({type: "EDIT_STUDENT_SUCCEEDED"});
        action.history.push('/')
    }catch (e){
        console.log(e)
        yield put({type: "EDIT_STUDENT_ERROR"});
    }
}
function* deleteStudent(action){
    try {
       yield call(fetch, 'api/student', {
            method: 'DELETE',
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : action.id
        })
        yield put({type: "FETCH_STUDENTS"});
        yield put({type: "DELETE_STUDENT_SUCCEEDED"});
    }catch (e){
        yield put({type: "DELETE_STUDENT_ERROR"});
    }
}

function* studentsSaga() {
    yield takeLatest("FETCH_STUDENTS", fetchStudents);
    yield takeLatest("CREATE_STUDENT", createStudent);
    yield takeLatest("EDIT_STUDENT", editStudent);
    yield takeLatest("DELETE_STUDENT", deleteStudent);
}

export default studentsSaga