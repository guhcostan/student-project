import produce from 'immer'

const initialState = {
    students: [],
    loading: false
}

const studentReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case "FETCH_STUDENTS":
                draft.loading = true
                break
            case "FETCH_STUDENTS_SUCCEEDED":
                draft.students = action.students
                draft.loading = false
                break
            case "FETCH_STUDENTS_ERROR":
                draft.students = []
                draft.loading = false
                break
            case "CREATE_STUDENT":
                draft.loading = true
                break
            case "CREATE_STUDENT_SUCCEEDED":
                draft.loading = false
                break
            case "CREATE_STUDENT_ERROR":
                draft.loading = false
                break
            case "EDIT_STUDENT":
                draft.loading = true
                break
            case "EDIT_STUDENT_SUCCEEDED":
                draft.loading = false
                break
            case "EDIT_STUDENT_ERROR":
                draft.loading = false
                break
            case "DELETE_STUDENT":
                draft.loading = true
                break
            case "DELETE_STUDENT_SUCCEEDED":
                draft.loading = false
                break
            case "DELETE_STUDENT_ERROR":
                draft.loading = false
                break
        }
    })

export default studentReducer