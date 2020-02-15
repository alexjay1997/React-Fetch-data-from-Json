import React, { Component } from 'react'

class Sample_Props extends React.Component  {

render(){
   
    return( 

<div>
    {/* Props! pano gamitin ---------------- start-------------- */}
<h1> {this.props.tangaTo}</h1>
<h1> {this.props.bobo}</h1>
    {/*---------------------------------------end---------------- */}
</div>
);
    }

}


export default Sample_Props;