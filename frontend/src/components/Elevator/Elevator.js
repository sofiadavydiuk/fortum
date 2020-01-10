import React from 'react';
import './Elevator.css';

class Elevator extends React.Component {
	state = {
		elevator: this.props.elevator
	};

	render() {
		const {elevator} = this.state;
		const isElevatorMoving = elevator.currentFloor !== elevator.destinationFloor;
		const elevatorClassName = isElevatorMoving ? 'elevator yellow' : 'elevator green';

		return (
			<table className={elevatorClassName}
						 style={{top: elevator.destinationFloor * 100 + 'px'}}
			>
				<tbody>
				<tr>
					<td className="name" colSpan="2">{elevator.id}</td>
				</tr>
				<tr>
					<td className="title">Status:</td>
					<td>{isElevatorMoving ? 'Moving...' : 'Available'}</td>
				</tr>
				<tr>
					<td className="title">Congestion:</td>
					<td>{elevator.peopleAmount} person(s)</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default Elevator;
