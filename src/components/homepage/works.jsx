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
								src="./walmart.jpg"
								alt="walmart"
								className="work-image"
							/>
							<div className="work-title">Walmart</div>
							<div className="work-subtitle">
								Frontend Full Stack Engineer
							</div>
							<div className="work-duration">Feb 2024 - Present</div>
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
								Web Developer
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
