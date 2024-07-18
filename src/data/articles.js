import React from "react";

function article_1() {
	return {
		date: "October 5 2022",
		title: "AWS EC2 Task Scheduler",
		link: "https://uwm-cloudblog.net/topics/virtual-machines/aws-ec2-task-scheduler/",
		description:
			"When it comes to cloud computing and storage, AWS has a wide range of options. With a strong internet connection, practically anywhere, we can access it. But the EC2 Task scheduler comes into play when it comes to how an instance can be started/stopped without human interaction.",
		keywords: [
			"Cloud Computing",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "October 31 2022",
		title: "Segregating files in AWS S3 Bucket using Lambda",
		link: "https://uwm-cloudblog.net/topics/serverless-computing/segregating-files-in-aws-s3-bucket-using-lambda/",
		description:
			"This exercise is about creating a lambda and writing a python logic such that whenever a file is uploaded into an s3 bucket the lambda gets triggered automatically and the file is segregated to the respective folder.",
		style: ``,
		keywords: [
			"lambda",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "November 22 2022",
		title: "Manual way of creating StoreFront APIs using Postman collection",
		link: "https://uwm-cloudblog.net/general/manual-way-of-creating-storefront-apis-using-postman-collection/",
		description:
			"Postman APIs",
		style: ``,
		keywords: [
			"Postman",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 3</h1>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "December 14 2022",
		title: "The Ultimate Guide To Hitting Storefront Application APIs Using Postman",
		link: "https://uwm-cloudblog.net/general/the-ultimate-guide-to-hitting-storefront-application-apis-using-postman/",
		description:
			"In this exercise, you use postman to hit the demo application(storefront) APIs which are written using the Python Django REST framework. For this exercise, I have used Azure Cloud Service and a similar methodology can be followed for AWS.",
		style: ``,
		keywords: [
			"Postman",
		],
		link: '',
		body: (
			<React.Fragment>
				<h1>Content of article 4</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
