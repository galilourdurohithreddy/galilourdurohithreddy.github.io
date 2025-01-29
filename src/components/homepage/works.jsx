import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./fidelity.png"
								alt="Fidelity Investments"
								className="work-image"
							/>
							<div className="work-title">Fidelity Investments</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">October 2024 - present</div>
						</div>

						<div className="work">
							<img
								src="./athenatech.png"
								alt="Athena Tech"
								className="work-image"
							/>
							<div className="work-title">Athena Tech</div>
							<div className="work-subtitle">
								Frontend Full Stack Engineer
							</div>
							<div className="work-duration">March 2024 - October 2024</div>
						</div>

						<div className="work">
							<img
								src="./uwm.png"
								alt="University of Wisconsin-Milwaukee"
								className="work-image"
							/>
							<div className="work-title">University of Wisconsin-Milwaukee</div>
							<div className="work-subtitle">
								Teaching Assistant
							</div>
							<div className="work-duration">September 2023 - December 2023</div>
						</div>

						<div className="work">
							<img
								src="./uwm.png"
								alt="University of Wisconsin-Milwaukee"
								className="work-image"
							/>
							<div className="work-title">University of Wisconsin-Milwaukee</div>
							<div className="work-subtitle">
								Student Help
							</div>
							<div className="work-duration">February 2022 - August 2023</div>
						</div>

						<div className="work">
							<img
								src="./walkingtree.png"
								alt="WalkingTree"
								className="work-image"
							/>
							<div className="work-title">WalkingTree</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">August 2018 - December 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
