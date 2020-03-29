import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {App} from './App';
import Header from "./components/topbar";
import Footer from "./components/footer";


//footer attribute values
let socialAccounts = [{id:"twitter",icon:"fab fa-twitter", link:"https://www.twitter.com/yneedthis"},{id:"instagram",icon:"fab fa-instagram",link:"https://www.instagram.com/yneedthis"}]
let remarks = [{id:1,text:"This service may contain affiliate links and  hyperlinks to other websites that I do not control"},
{id:2,text:"All images are copyrighted to their respective owners"}]


ReactDOM.render(<Header  title="Modest Fashion" />, document.getElementById('header'));

ReactDOM.render(<App />, document.getElementById('container'));

ReactDOM.render(<Footer remarks={remarks} createdBy="Created by Shareeza Hussain" socialAccounts={socialAccounts } />, document.getElementById('footer'));








