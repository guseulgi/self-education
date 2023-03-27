import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 03
// import Library from './chapter03/Library';
// ReactDOM.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 04
// import Clock from './chapter04/Clock';
// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 1000);

// 05
// import CommentList from './chapter05/CommentList';
// ReactDOM.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// 06
// import NotificationList from './chapter06/NotificationList';
// ReactDOM.render(
//   <React.StrictMode>
//     <NotificationList />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import MyHeader from './biteReact/MyHeader';
import MyFooter from './biteReact/MyFooter';
ReactDOM.render(
  <React.StrictMode>
    <MyHeader/>
      <App/>
    <MyFooter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
