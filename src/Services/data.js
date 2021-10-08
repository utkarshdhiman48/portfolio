class InternetObject{
  title;
  description;
  images;
  tags;
  links;
	constructor(title, links, description, topics, images){
		this.title = title;
		this.links = links;
		this.description = description;
		this.topics = topics;
		this.images = images;
	}

  getPlainObject(){
    return {
      title: this.title,
			links: this.links,
      description: this.description,
      images: this.images,
      tags: this.tags
    }
  }
}

// InternetObject schema
	// title: String
	// links: object
		// repo
		// live
	// description: String
	// topics: Array
	// images: Array
  
const projects = [];

projects.push(new InternetObject("remindit-48-bot", [{to:"https://github.com/utkarsh48/remindit48_bot", label: "Repository"}], "It is a telegram bot to set reminders and receive them at 12 am IST on the day of the reminder. All you have to do is /start the bot and /add a reminder. It sends a notification as a 'message'. So it stays in the notifications as well as chat.", ["Node", "Express", "JavaScript", "Firebase"]));
projects.push(new InternetObject("scrollSpy", [{to: "", label: "Open"}, {to:"/y", label: "Repository"}], "A script that can spy for internal links present within the viewport and correspondingly add a CSS class to its pointer link. It works without any dependencies like jQuery.", ["JavaScript"]));
projects.push(new InternetObject("Meme Generator", [{to: "https://utkarsh48.github.io/meme-generator", label: "Open"}, {to:"https://github.com/utkarsh48/meme-generator", label: "Repository"}], "A simple meme generator using Canvas.", ["HTML", "CSS", "JavaScript"]));
projects.push(new InternetObject("theExecryptioner", [{to:"https://github.com/utkarsh48/theExecryptioner", label: "Repository"}], "A chrome extension for encrypting text, text files and vice-versa.", ["HTML", "CSS", "JavaScript"]));

export function getAllProjects(){
	return projects;
}

export function getAllProjectTopics(){
	const topics = new Set();
	projects
		.forEach(project=>
			project["topics"].forEach(topic=>topics.add(topic)));
	return [...topics];
}


const blogs = [];

blogs.push(new InternetObject("Custom Frontend for Google Form", [{to: "https://dev.to/utkarshdhiman48/custom-frontend-for-google-form-456l", label: "Read"}], "There may be cases when you need a consistent design for your website. Although you can always create your form with a server and database but embedding Google form in your website can be much easier and economical.", ["JavaScript", "HTML", "Google Form", "Frontend"]));
blogs.push(new InternetObject("Regular Expressions - not so regular!", [{to: "https://dev.to/utkarshdhiman48/regular-expressions-not-so-regular-2m9p", label: "Read"}], "Regular Expressions aka RegEx. or RegExp. are powerful tools widely used for pattern matching within strings. They are supported by almost all programming languages.", ["Regex"]));
blogs.push(new InternetObject("Beginners Guide to Networking & Security", [{to: "https://dev.to/utkarshdhiman48/beginners-guide-to-networking-security-3okd", label: "Read"}], "Getting started with networking and security. Use of various tools and applications for better understanding of networking fundamentals.", ["Network", "Security"]));

export function getAllBlogs(){
	return blogs;
}

export function getAllBlogTopics(){
	const topics = new Set();
	blogs
		.forEach(blog=>
			blog["topics"].forEach(topic=>topics.add(topic)));
	return [...topics];
}