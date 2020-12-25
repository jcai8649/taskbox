import React from 'react'
import styles from './Task.module.css'

function Task({description}) {
    return (
        <li>{description}</li>
    )
}

export default Task
