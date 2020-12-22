import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './AddTaskButton.module.css';


function AddTaskButton() {
    return (
        <div>
            <Fab className={styles.addButton} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default AddTaskButton;
