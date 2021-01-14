import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styles from './AddTaskButton.module.css';
import {Button} from '@material-ui/core';


function AddTaskButton() {
    return (
        <div>
            <Button>
                <Fab className={styles.addButton} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Button>
        </div>
    )
}

export default AddTaskButton;
