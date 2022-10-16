import PropTypes from 'prop-types';
import React from 'react';
import { Button, Input } from 'reactstrap';


const SearchPanel = ({term, handleChange, toggleForm}) => {
    return(
        <div className='d-flex'>
             <Input 
            placeholder='Search here'
            className='mr-3'
            value={term}
            onChange={event => handleChange(event.target.value)}
        />
        <Button onClick={toggleForm}>
            New
        </Button>
        </div>
       
    )
}

SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel;