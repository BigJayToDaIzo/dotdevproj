export interface Link {
	label: string;
	url: string;
}

export interface Header {
	name: string;
	title: string;
	email: string;
	location?: string;
	links: Link[];
}

export interface Experience {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	achievements: string[];
	technologies?: string[];
}

export interface SkillCategory {
	category: string;
	skills: string[];
}

export interface Education {
	institution: string;
	degree: string;
	field: string;
	year: string;
	details?: string;
}

export interface ResumeData {
	header: Header;
	experience: Experience[];
	skills: SkillCategory[];
	education: Education[];
}

export const resumeData: ResumeData = {
	header: {
		name: "Joseph Myers",
		title: "Software Engineer",
		email: "joseph@josephmyers.dev",
		location: "Remote",
		links: [
			{ label: "GitHub", url: "https://github.com/BigJayToDaIzo" },
			{ label: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
		],
	},
	experience: [
		{
			company: "Company Name",
			role: "Senior Software Engineer",
			startDate: "Jan 2023",
			endDate: "Present",
			achievements: [
				"Led development of key features resulting in 40% increase in user engagement",
				"Architected and implemented microservices infrastructure reducing deployment time by 60%",
				"Mentored team of 5 junior developers, establishing code review practices and testing standards",
			],
			technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
		},
		{
			company: "Previous Company",
			role: "Software Engineer",
			startDate: "Jun 2020",
			endDate: "Dec 2022",
			achievements: [
				"Built responsive web applications serving 100k+ monthly active users",
				"Improved application performance by 50% through optimization and caching strategies",
				"Collaborated with design team to implement accessible UI components",
			],
			technologies: ["JavaScript", "Vue.js", "Express", "MongoDB"],
		},
	],
	skills: [
		{
			category: "Languages",
			skills: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
		},
		{
			category: "Frameworks & Libraries",
			skills: ["React", "Astro", "Node.js", "Express", "Vue.js"],
		},
		{
			category: "Tools & Platforms",
			skills: ["Git", "Docker", "AWS", "PostgreSQL", "MongoDB"],
		},
	],
	education: [
		{
			institution: "University Name",
			degree: "Bachelor of Science",
			field: "Computer Science",
			year: "2020",
			details: "Graduated with honors",
		},
	],
};
