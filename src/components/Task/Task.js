import React from 'react'
import styles from './Task.module.css'
import {Button} from '@material-ui/core'

function Task({description}) {
    return (
        <li>
            <div className={styles.des}>
                {description} 
            </div>
            <div className={styles.deleteButton}>
                <Button variant='contained' color='secondary'>Delete</Button>
            </div>
        </li>
    )
}

export default Task
