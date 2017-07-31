import React from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';
import './login.css';

const Login = (props) => {
	const onSubmit = () => {
		fetch('http://catspaw.xaut.edu.cn/api/user', {
		  method: 'POST',
		  headers: {
		    'Content-Type': 'application/json',
		    'Api-Key': 'y7K04l0Edh5C65A88Kiw4mXPv0ib9M3x',
		  },
		  body: JSON.stringify({
		    name: this.inputRef.value,
		    employee_id: this.employeeIdRef.value,
		    code: qs.parse(props.location.search).code,
		  })
		}).then((response) => {
			return response.json();
		}).then((json) => {
    	localStorage.setItem("userInfo", JSON.stringify(json));
  		props.history.push('/my-posts')	
	  });
	}

  return (
		<div>
    		<label>User Name</label>
    		<input name='name' ref={(e) => {this.inputRef = e}} defaultValue='上山打老虎'/>
    		<label>Employee Id</label>
    		<input name='employeeId' ref={(e) => {this.employeeIdRef = e}} defaultValue='12345' />
    		<button onClick={onSubmit}>Submit</button>
		</div>
  );
}

export default withRouter(Login);
