import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
   country: 'in',
   pagesize: 9
  }

  static propTypes = {
   country: PropTypes.string,
   pagesize: PropTypes.number,
   category: PropTypes.string
  }
  
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);

    this.state = {
        articles : [],
        loading : false,
        page: 1

    }
     document.title = `NewsBuzz-${this.capitalizeFirstLetter(this.props.category)}`
} 

async updateNews(){

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseddata = await data.json();
  console.log(parseddata);
  this.setState({articles: parseddata.articles , 
    totalResults: parseddata.totalResults,
    loading: false
  
  })
}

async componentDidMount(){

  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pagesize}`;
  this.setState({loading: true})
  let data = await fetch(url);
  let parseddata = await data.json();
  console.log(parseddata);
  this.setState({articles: parseddata.articles , 
    totalResults: parseddata.totalResults,
    loading: false
  
  })
  

}

handlePrevClick = async ()=>{

  this.setState({page: this.state.page - 1});
  this.updateNews();

}
handleNextClick = async ()=>{

  this.setState({page: this.state.page |+ 1});
  this.updateNews();  
}


  render() {
    return (
      <div>
        <div className='container my-3'>
          
            <h2 className='text-center' style={{margin: '35px 0px'}}><u>NewsBuzz - Get Top Headlines On {this.capitalizeFirstLetter(this.props.category)}</u> </h2>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key ={element.url}>
              <div  className='my-4'>
                    <NewsItem Title={element.title?element.title.slice(0,45):""} Description = {element.description?element.description.slice(0,88):""} imgurl={element.urlToImage} 
                    newsurl = {element.url} author = {element.author} publishedAt = {element.publishedAt} source={element.source.name} />
                
                </div>
                </div>})}
            </div>
        </div>
        <div className='container my-3 d-flex justify-content-between'>
        
        <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&#8592; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.pagesize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>



        </div>
      </div>
    )
  }
}

export default News
