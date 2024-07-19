import React from "react";
import { faSchool} from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="educations">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="education-body">
						<div className="education">
							<img
								src="./uwm.png"
								alt="University of Wisconsin-Milwaukee"
								className="education-image"
							/>
							<div className="education-title">
								University of Wisconsin-Milwaukee
							</div>
							<div className="education-subtitle">
								MS in Computer Science
							</div>
							<div className="education-duration">
								Feb 2022 - December 2023
							</div>
						</div>

						<div className="education">
							<img
								src="./jntuh.jpg"
								alt="Jawaharlal Nehru Technological University"
								className="education-image"
							/>
							<div className="education-title">
								Jawaharlal Nehru Technological University
							</div>
							<div className="education-subtitle">
								Mechanical Engineering
							</div>
							<div className="education-duration">
								August 2014 - April 2018
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
