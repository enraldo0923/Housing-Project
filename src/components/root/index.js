import React from 'react'
import Navbar from "../navbar";
import Body from '../body';
 
export default class Root extends React.Component {
  constructor(props){
    super(props)
    this.state={
      students :[
        {id : 1, name : "Abbosbek"},
        {id : 2, name : "Asadbek"},
        {id : 3, name : "Azamatbek"},
        {id : 4, name : "Muzaffar"},
        {id : 5, name : "Gulbahor"},
        {id : 6, name : "Eshqobil"},
        {id : 7, name : "Yuldosh"},
        {id : 8, name : "Jabbor"},
        {id : 9, name : "Eshmat"},
        {id : 10, name : "Toshmat"},
        {id : 11, name : "Ali"},
        {id : 12, name : "Vali"},
          ]
    }
  }
  render() {
    return (
      <div >
      
            <Navbar students ={this.state.students}/>
            <Body students ={this.state.students}/>
       
      </div>
    )
  }
}
