import React, {Component} from 'react'

export default class Shelf extends Component{



render(){
    return(
        <div className='shelf' 
        onClick= {(e) => e.stopPropagation()}>
        </div>)
}
}