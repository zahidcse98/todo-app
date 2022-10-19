import PropTypes from 'prop-types';
import React from "react";
import { Input, Label } from 'reactstrap';

const ViewControl = ({view, changeView}) => {
    return(
        <div className="d-flex">
            <Label for="list-view" className="mr-4">
                <Input
                    type='radio'
                    name='view'
                    value='list'
                    id='list-view'
                    onChange={changeView}
                    className='d-inline-block'
                    checked={view==='list'}
                />
                List View
            </Label>
            <Label for="table-view" className="mr-4">
                <Input
                    type='radio'
                    name='view'
                    value='table'
                    id='table-view'
                    onChange={changeView}
                    className='d-inline-block'
                    checked={view==='table'}
                />
                Table View
            </Label>
        </div>
    )
}

ViewControl.propType = {
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired
}

export default ViewControl;