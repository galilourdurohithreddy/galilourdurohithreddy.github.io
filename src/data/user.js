const INFO = {
	main: {
		title: "Rohith Portfolio",
		name: "Lourdu Rohith Reddy Gali.",
		email: "rohith.reddy045@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://x.com/lrohitreddygali/",
		github: "https://github.com/galilourdurohithreddy/",
		linkedin: "https://www.linkedin.com/in/lourdurohithreddygali/",
		instagram: "https://www.instagram.com/gali_rohith_reddyy/",
		stackoverflow:
			"https://stackoverflow.com/users/11837891/lourdu-rohith-reddy-gali/",
		facebook: "https://www.facebook.com/lourdurohithreddygali/",
	},

	homepage: {
		title: "Full-Stack Developer | Building Interactive End-to-End Web Experiences",
		description:
			"I'm a highly motivated full-stack developer with a proven track record of building modern, scalable web applications. My passion lies in leveraging cutting-edge technologies to solve complex problems and create exceptional user experiences. With a Master's degree in Computer Science and over 5 years of industry experience, I bring a blend of theoretical knowledge and practical expertise to every project.",
	},

	about: {
		title: "I’m Lourdu Rohith Reddy Gali. I live in USA, where I design the future.",
		description:
			"I'm Lourdu Rohith Reddy Gali, a passionate full-stack developer with a strong foundation in computer science. My master's degree from the University of Wisconsin-Milwaukee equipped me with expertise in cutting-edge technologies and their practical applications. Throughout my career, I've leveraged this knowledge to design and build robust web applications using Angular, React, Node.js, and GraphQL. My experience extends beyond the front-end, as I'm also skilled in streamlining back-end processes.  I've had the opportunity to contribute to diverse projects across industries, including e-commerce (Walmart), risk management (Eigenrisk), and education (UWM student portals). This exposure allows me to adapt to various client needs.  Fueled by a love for technology and a dedication to continuous learning, I thrive in collaborative environments. I take ownership of projects, driving them from conception to deployment, with a focus on scalability, performance, and user-centered design.",
	},

	articles: {
		title: "Exploring Technology: Articles on Learning New Concepts and Innovations",
		description:
			"Chronological collection of my long-form thoughts on cloud computing.",
	},

	projects: [
		{
			title: "Themes",
			description:
				"In this Angular project, I solved the problem of keeping consistent design across common UI components like buttons, checkboxes, dialogs, etc. by developing a centralized SCSS library. This library makes use of variables, mixins, @foreach loops, and conditional expressions, allowing developers to obtain the required design for any component like radio buttons, input boxes, etc. by just applying one class. This saved developers a lot of time while also resolving many stylistic problems.",
			logos: [{img: "../angular.svg", title: 'Angular'}, {img: "../sass.svg", title: 'SCSS'}, {img: "../html.svg", title: 'HTML'}],
			linkText: "View Project",
			link: "https://github.com/galilourdurohithreddy/prime-ng-designer",
		},

		{
			title: "Movie Recommendation Tool",
			description:
				"This project aims to design a personalized movie recommendation system using collaborative filtering algorithms and the Flask framework. The system utilizes a dataset from the Yahoo Research Webscope database, containing user ratings and detailed movie information. Unneeded data was cleaned. User-based and item-based filtering models were built using cosine similarity and k-nearest neighbors algorithms, respectively. The Flask web application allows users to view recommended movies based on their ratings and preferences. ",
			logos: [{img: "../python.svg", title: 'Python'}, {img: "../django.svg", title: 'Django'}, {img: "../flask.svg", title: 'Flask'}, {img: "../javascript.svg", title: 'Javascript'}],
			linkText: "View Project",
			link: "https://github.com/galilourdurohithreddy/capstone",
		},

		{
			title: "NGRX Concepts",
			description:
				"I took the initiative to explore the potential benefits of using NgRx for state management in this Angular project. To deepen my understanding, I conducted a pre-study on NgRx concepts and implemented a proof-of-concept to demonstrate its efficiency. This newly acquired knowledge, along with the developed proof-of-concept, proved invaluable in enhancing one of my freelance projects by applying the learned concepts in practice.",
			logos: [{img: "../angular.svg", title: 'Angular'}, {img: "../ngrx.svg", title: 'NGRX'}],
			linkText: "View Project",
			link: "https://github.com/galilourdurohithreddy/store-management",
		},

		{
			title: "Double Sorting",
			description:
				"The Double Insertion Sort and Double Selection Sort algorithms were successfully implemented in this Java project, which assessed their effectiveness using the ideas presented in the ACM paper 'Double Sorting: Testing Their Sorting Skills.' The project showed increased sorting speeds of up to 33% and 25%, respectively, through thorough testing that included functionality, efficiency, random, and exhaustive tests. These applications offer real-world evidence for theoretical ideas as well as useful suggestions for improving fundamental sorting methods for teaching.",
			logos: [{img: "../java.svg", title: 'Java'}],
			linkText: "View Project",
			link: "https://github.com/galilourdurohithreddy/double-sorting",
		},

		{
			title: "Project 5",
			description:
				"This project was done to get familiar with the new, progressive features in Angular 17: New Declarative Control Flow and Deferrable Loading. With these innovations, template sections can be deferred until they will actually be required, making the speed of initial loading faster by reducing bundle sizes. Upgrading Node.js to version 18.13.0 was required to be compatible with Angular 17, which adds essential modern functionality key to development and ensures stability through long-term support. The activity supports a technological trend based on enriching knowledge in current Angular capabilities.",
			logos: [{img: "../angular.svg", title: 'Angular'}, {img: "../css.svg", title: 'CSS'}, {img: "../html.svg", title: 'HTML'}],
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;
