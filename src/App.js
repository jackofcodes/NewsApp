
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize=15
  apikey=process.env.REACT_APP_NEWS_API
  //apikey="f593d7ac06fb4de6b98fc67f1e243a78"
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News key="home" pagesize={this.pagesize} apikey={this.apikey} country="in" category="general"/>}/>
          <Route exact path="/general" element={<News key="general" pagesize={this.pagesize} apikey={this.apikey} country="in" category="general"/>}/>
          <Route exact path="/business" element={<News key="business" pagesize={this.pagesize} apikey={this.apikey} country="in" category="business"/>}/>
          <Route exact path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} apikey={this.apikey} country="in" category="entertainment"/>}/>
          <Route exact path="/health" element={<News key="health" pagesize={this.pagesize} apikey={this.apikey} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News key="science" pagesize={this.pagesize} apikey={this.apikey} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News key="sports" pagesize={this.pagesize} apikey={this.apikey} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News key="technology" pagesize={this.pagesize} apikey={this.apikey} country="in" category="technology"/>}/>
        </Routes>
        </Router>
        
      </div>
    )
  }
}

