import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import Header from './Header';
import Student from './Student';
import Footer from './Footer';
import MainBody from './MainBody';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div style={{backgroundColor:'black',color:'grey'}}>
  <Header/>
  <MainBody/>
  <div className="container-row"> Students Enrolled </div>
  <Student experience={2}  name="Krish Walley" headshot="https://api.lorem.space/image/face?w=150&h=157"/>
  <Student experience={5}  name="Angel Walley" headshot="https://api.lorem.space/image/face?w=150&h=156"/>
  <Student experience={7}  name="Raina Walley" headshot="https://api.lorem.space/image/face?w=150&h=151"/>
  <Footer/>
  </div>)


