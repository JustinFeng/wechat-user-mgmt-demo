import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './index.css';
import 'whatwg-fetch';
import Login from './login';
import MyPosts from './my-posts';
import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
  <div>
    <nav>
      <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdb586dfc47052b71&redirect_uri=http://catspaw.xaut.edu.cn/login&response_type=code&scope=snsapi_userinfo#wechat_redirect">Login</a>
      <Link to="/my-posts">My Posts</Link>
    </nav>
    <div>
      <Route path="/login" component={Login}/>
      <Route path="/my-posts" component={MyPosts}/>
    </div>
  </div>
);

ReactDOM.render((
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
