import PropTypes from 'prop-types';
import React from "react";
import { Button, ButtonGroup } from 'reactstrap';

const FilterController = ({handleFilter, filterButtonIndicator}) => {
    return(
        <ButtonGroup>
            <Button color={filterButtonIndicator('all') ? 'success' : 'secondary'} onClick={() => handleFilter('all')}>All</Button>
            <Button color={filterButtonIndicator('running') ? 'success' : 'secondary'} onClick={() => handleFilter('running')}>Running</Button>
            <Button color={filterButtonIndicator('completed') ? 'success' : 'secondary'} onClick={() => handleFilter('completed')}>Completed</Button>
        </ButtonGroup>
    )
}

FilterController.protoTypes = {
    handleFilter: PropTypes.func.isRequired,
    filterButtonIndicator: PropTypes.func.isRequired
}


export default FilterController;