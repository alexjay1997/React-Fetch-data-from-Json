import React, { Component } from 'react';
import Sample_Props from './Components/Sample_Props.js';
import './App.css';
class Home extends Component{

// api pano mag fetch----- 

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded:false,

        }


    }
    //--reactjs function for fetching
    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
              .then(res => res.json())
              .then(json => {

                    this.setState({
                        isLoaded: true,
                        items: json,

                    })

              });


    }



    render() {
// variable for state if loaded..
        var { isLoaded, items } = this.state;

        if(!isLoaded) {

            return <div>Loading... Data  from Api json file! .</div>;

        }
        else {

            return(
            <div>
                <h1> Data has been Loaded! From The API Json File!!</h1>

                    <table>
                        {items.map(item => (
                            <tr key={item.id}>
                              <td>  Name: {item.name}  </td>
                                <td>Username:{item.user}</td>
                                <td>Email:{item.email}</td>
                        <td>Address:{item.address["street"]}&nbsp;{item.address["suite"]}&nbsp;{item.address["city"]}&nbsp;{item.address["zipcode"]}</td>
                                <td>Phone:{item.phone}</td>
                            </tr>
               
                                
         
                           ))}
                        </table>
           
            <h1>HomePage</h1>
            {// sample how to user props below!!
            }
            <br/>
           <h2>Props below</h2>
       
     <Sample_Props tangaTo="Sample Props1"/>
      <Sample_Props bobo= "Sample Props2" />
    
      </div>
        );

    }

        //else end here!!
    }
    /// else ending...
}


export default Home;