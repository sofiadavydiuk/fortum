import React from 'react';
import elevators from '../../JSON/elevators';
import './Main.css';
import Elevator from "../Elevator/Elevator";

class Main extends React.Component {
	state = {
		elevators: [],
		wasApplicationStarted: false,
	};

	componentDidMount() {
		this.setState(elevators);
	}

	onBtnClick() {
		setInterval(() => this.initElevatorMovement(), 1000);
		this.setState({wasApplicationStarted: true});
	}

	initElevatorMovement() {
		const {elevators} = this.state;
		const elevatorsAmount = elevators.length;
		const randomElevator = elevators[Math.floor(Math.random() * Math.floor(elevatorsAmount))];
		const randomFloor = Math.floor(Math.random() * (elevatorsAmount - 2) + 1);
		const randomPeopleNumber = Math.floor(Math.random() * 10 + 1);

		if (randomElevator.currentFloor === randomElevator.destinationFloor) {
			randomElevator.destinationFloor = randomFloor;
			randomElevator.peopleAmount = randomPeopleNumber;
			this.setState(elevators);

			setTimeout(() => {
				randomElevator.currentFloor = randomFloor;
				randomElevator.peopleAmount = 0;
			},4000);
		}
	}

	render() {
		const {elevators, wasApplicationStarted} = this.state;

		return (
			<div className="container">
				<h2 className="title">Elevator Scheme</h2>
				<button disabled={wasApplicationStarted}
								onClick={() => this.onBtnClick()}>
					Start Elevators Movement
				</button>
				<div className="main">
					<div className="ground-floor">
						Floor №: Ground
						{
							elevators.map((elevator) => (
								<Elevator key={elevator.id}
													elevator={elevator} />
							))
						}
					</div>
					<div>Floor №: 1</div>
					<div>Floor №: 2</div>
					<div>Floor №: 3</div>
					<div>Floor №: 4</div>
				</div>
			</div>
		);
	}
}

export default Main;
