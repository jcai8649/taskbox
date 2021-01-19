import React from 'react'
import {deleteTask} from '../../store/actions/actions'
import {Button} from '@material-ui/core'
import {useSelector, useDispatch} from 'react-redux'

function DeleteTask({taskId}) {

    const token = useSelector(state => state.userData.token)
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(deleteTask(taskId, token))
    }



    return (
        <>
            <Button variant='contained' color='secondary' onClick={deleteHandler}>Delete</Button>
        </>
    )
}

export default DeleteTask
