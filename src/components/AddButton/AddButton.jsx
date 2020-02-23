import React, { Component } from 'react';

import classes from './AddButton.module.css';

export class AddButton extends Component {
	render() {
		return (
			<>
				<button onClick={this.props.addInputRangeHandlerClick} className={classes.Button}>Add</button>
			</>
		);
	}
}

export default AddButton;
