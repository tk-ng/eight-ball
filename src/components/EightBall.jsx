import { useState } from "react";
import PropTypes from "prop-types";
import "../css/EightBall.css";

export const EightBall = ({ answers }) => {
	const [answer, setAnswer] = useState({
		msg: "Think of a Question",
		color: "black",
	});
	const handleClick = () => {
		const ranIdx = Math.floor(Math.random() * answers.length);
		setAnswer(answers[ranIdx]);
	};
	return (
		<>
			<div className="EightBall">
				<div
					className="EightBall-background"
					style={{ backgroundColor: answer.color }}
					onClick={handleClick}
				>
					<span className="EightBall-text">{answer.msg}</span>
				</div>
			</div>
			<button onClick={() => setAnswer({msg: "Think of a Question", color: "black"})}>
				Reset
			</button>
		</>
	);
};

EightBall.propTypes = { answers: PropTypes.object };
