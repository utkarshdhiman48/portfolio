import React, { Component } from 'react';
import TopicList from "../common/TopicList";
import Card from "../common/Card";
import Basic from '../Layouts/Basic';

import { getAllBlogs, getAllBlogTopics } from '../../Services/data.js'

export default class Blogs extends Component {
	state = {
		blogs: [],
		topics: [],
		selectedTopics: []
	}

	componentDidMount() {
		this.setState({
			blogs: getAllBlogs(),
			topics: getAllBlogTopics()
		});
	}

	handleTopicSelect = (topic) => {
		const selectedTopics = new Set(this.state.selectedTopics);
		if (selectedTopics.has(topic))
			selectedTopics.delete(topic);
		else
			selectedTopics.add(topic);

		this.setState({
			selectedTopics: [...selectedTopics]
		});
	}

	render() {
		const { topics, selectedTopics, blogs } = this.state;

		const filteredBlogs = selectedTopics.length > 0 ?
			blogs.filter(blog => {
				return selectedTopics.reduce((acc, next) => {
					return acc && blog["topics"].includes(next);
				}, true);
			}) : blogs;


		return (
			<Basic heading="Blogs">
				<TopicList
					topics={topics}
					selectedTopics={selectedTopics}
					handleTopicSelect={this.handleTopicSelect} />
				<div className="container-cards">
					{filteredBlogs.length > 0 && filteredBlogs.map(blog => {
						return <Card className="cardified glass02 p-1r b-1r" key={blog.title} heading={blog.title} content={blog.description} links={blog.links} tags={blog.topics} handleTagSelect={this.handleTopicSelect} />
					})}
				</div>
			</Basic>
		);
	}
}