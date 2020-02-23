import React, { Component } from 'react';

import classes from './InputRange.module.css';

class InputRange extends Component {
	render() {
		return (
			<>
				<input
					className={classes.InputRange}
					type='range'
					min={0}
					max={100}
					value={this.props.value}
					onChange={this.props.handlerChangeValue}
				/>
				<div className={classes.Value}>Value: {this.props.value} </div>
				<div className={classes.Left}>Left: {this.props.valueLeft}</div>
			</>
		);
	}
}

export default InputRange;
