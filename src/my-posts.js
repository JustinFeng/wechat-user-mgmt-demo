import React, { Component } from 'react';
import './my-posts.css';
import Post from './post'

class MyPosts extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    posts: [],
	  };
	  this.loadMyPosts();
	}

	loadMyPosts() {
		const userInfo = JSON.parse(localStorage.getItem('userInfo'));

		fetch(`http://catspaw.xaut.edu.cn/api/user/${userInfo.openid}/post`, {
		  method: 'GET',
		  headers: {
		    'Accept': 'application/json',
		    'Api-Key': 'y7K04l0Edh5C65A88Kiw4mXPv0ib9M3x',
		  }
		}).then((response) => {
			return response.json();
		}).then((json) => {
    	this.setState({posts: json})
	  });
	}

  render() {
  	let content;
  	if (this.state.posts.length === 0) {
  		content = <div>Loading...</div>
  	} else {
  		content = this.state.posts.map((post) => {
			      			return <Post {...post} />
			      		})
  	}

    return (
      <div>
      	<h2>My Posts</h2>
      	{	content }
      </div>
    );
  }
}

export default MyPosts;
