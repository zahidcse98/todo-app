/* eslint-disable jsx-a11y/scope */
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input, Table } from 'reactstrap';



const RowItem = ({todo, toggleSelect, toggleComplete}) => {
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    return(
        <>
    <tr>
        <td scope='row'>
            <Input
                type='checkbox'
                id={todo.id} 
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
             />
        </td>
        <td> {todo.time.toDateString()} </td>
        <td>{todo.title}</td>
        <td>
            {<Button
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>}
        </td>
    </tr>
    </>
    )
    
}

RowItem.prototype = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect:PropTypes.func.isRequired
}

const TableView = ({todos, toggleSelect, toggleComplete}) => {
    return(
        <Table>

        <thead>
            <tr>
                <th>#</th>
                <th>Time</th>
                <th>Todo</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {todos.map(todo => (
                <RowItem 
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </tbody>
    </Table>
    )
   
}

TableView.propType = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TableView;