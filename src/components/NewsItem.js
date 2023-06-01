
import React, { Component } from 'react'
 
 export class NewsItem extends Component {

            
   render() {
    let {Title,Description,imgurl,newsurl,author,publishedAt,source} = this.props;
     return (
       <div>
         <div className="card" >
              <img src={!imgurl?"https://pbs.twimg.com/profile_images/1108430392267280389/ufmFwzIn_400x400.png":imgurl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{Title}...<span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex: '1'}}>{source}<span class="visually-hidden">unread messages</span></span></h5>
                <p className="card-text">{Description}...</p>
                <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} On {new Date(publishedAt).toGMTString()}</small></p>
                
                <a rel="noreferrer" href={newsurl} target={'_blank'} className="btn btn-sm btn-dark">Read more</a>
              </div>
            </div>
       </div>
     )
   }
 }
 
 export default NewsItem
 