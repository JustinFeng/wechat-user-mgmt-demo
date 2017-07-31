import React from 'react';
import './post.css';

const Post = (props) => (
	<div className='post'>
		<p>{props.title}</p>
		<p>{props.description}</p>
	</div>
)

export default Post;
