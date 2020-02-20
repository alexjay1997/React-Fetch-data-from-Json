import React, { Component } from 'react';
import Sample_Props from './Components/Sample_Props.js';
//import Pagination from "react-js-pagination";

import './App.css';
class Home extends Component{

// api pano mag fetch----- 

    constructor(props){
        super(props);
        this.state = {
            albums:[],
            isLoaded:false,
       
        }


    }
  //--reactjs function for fetching
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/photos')
              .then(res => res.json())
              .then(json => {

                    this.setState({
                        isLoaded: true,
                        albums: json,

                    })

              });


    }
    //****************************** */




  




    render() {
// variable for state if loaded..
        var { isLoaded, albums } = this.state;

        if(!isLoaded) {

            return <div>Loading... Data  from Api json file! .</div>;

        }
        else {

            return(

            <div>


                              
                <h1> Data has been Loaded! From The API Json File!!</h1>

                    <table class="tblData">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Url</th>
                            <th>Image</th>
                            </tr>
                        {albums.map(item => (
                            <tr key={item.albumId}>
                              <td>  {item.id}  </td>
                                <td>{item.title}</td>
                                <td>{item.url}</td>
                        <td><img src={ item.thumbnailUrl }/></td>
                                
                            </tr>
               
                                
         
                           ))}


                        </table>
                      
            <h1>HomePage</h1>
            {// sample how to user props below!!
            }
            <br/>
           <h2>Props below</h2>
       
     <Sample_Props propsOne="Sample Props1"/>
      <Sample_Props propstwo= "Sample Props2" />
    
      </div>



        );

    }


 

        //else end here!!
    }
    /// else ending...
}

export default Home;
//