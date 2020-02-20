import React, { Component } from 'react'

class Sample_Props extends React.Component  {

render(){
   
    return( 

<div>
    {/* Props! pano gamitin ---------------- start-------------- */}
<h1> {this.props.propsOne}</h1>
<h1> {this.props.propsTwo}</h1>
    {/*---------------------------------------end---------------- */}
</div>
);
    }

}


export default Sample_Props;