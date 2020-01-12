import React from 'react';
import './Elevator.css';

class Elevator extends React.Component {
	defineElevatorStatus() {
		const {elevator} = this.props;
		if (!elevator.working) {
			return ['elevator red', 'Out of order'];
		} else if (elevator.currentFloor === elevator.destinationFloor) {
			return ['elevator green', 'Available'];
		} else {
			return ['elevator yellow', 'Moving...'];
		}
	}

	render() {
		const {elevator, fixElevator, index} = this.props;
		const [elevatorClassName, elevatorStatusText] = this.defineElevatorStatus();
		const congestionClassName = elevator.working ? '' : 'hidden';
		const btnWrapperClassName = !elevator.working ? '' : 'hidden';

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
					<td>{elevatorStatusText}</td>
				</tr>
				<tr className={congestionClassName}>
					<td className="title">Congestion:</td>
					<td>{elevator.peopleAmount} person(s)</td>
				</tr>
				<tr className={btnWrapperClassName}>
					<td className="button-wrapper" colSpan="2">
						<button onClick={() => fixElevator(index)}>Click to fix the elevator</button>
					</td>
				</tr>
				</tbody>
			</table>
		);
	}
}

export default Elevator;
