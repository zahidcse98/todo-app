import PropTypes from 'prop-types'
import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'


class CreateTodoForm extends React.Component {
    state = {
        title: '',
        description: ''

    }

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({text: '', description: ''})
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input 
                        placeholder='Enter your task title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input 
                        type='textarea'
                        placeholder='Enter your task description'
                        name='description'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button type='submit' color='success'>Create Task</Button>
            </Form>
        )
    }
}
CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
}

export default CreateTodoForm;