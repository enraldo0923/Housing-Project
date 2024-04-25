import React from "react";
import {students} from  "./data";


class Getname extends React.Component{
    state = {
       students:students,
       selected :{},
       name: '',
       surname:'',
    };
    
    
    

    render(){
        
    
    const onDelete =(id)=>{
        console.log(id);
        let res = this.state.students.filter((vl)=>vl.id!==id);
        this.setState({students :res});
    };
    const onAdd=()=>{
        let newUser={
          id: Date.now(),
          name:this.state.name
        };
        this.setState({name:''})
    }
        const filter =({target: {value,name}})=>{
        let res  = students.filter((vl) => vl.name.toLocaleLowerCase().includes(value));
        this.setState({students:res});
        }
        const onEdit =(value)=>{
        console.log(value);
        this.setState({selected:value });
        } 
        const onSave =(value)=>{
            let res  = this.state.students.map((value)=> this.state.selected?.id === value.id?this.state.selected:value);
            this.setState({students : res,selected:null});
            } 
            const onCancel =(value)=>{
                console.log(value);
                this.setState({selected:null });
                } 
        const onChangeName =({target:{value}})=>{
            this.setState((state)=>{return{selected:{...state.selected,name:value}}})
            console.log(value);
        };
        return (
            <div>
                <h1>Selected: {this.state.selected?.name}</h1>
                <h1>Name :{this.state.name}</h1>
                <input value={this.state.name} type="text" placeholder="Name" />
                <button onClick={onAdd}>Add</button>
                <hr />
                {/* <input onChange={filter} name= "id" type="text"placeholder="ID" />
                <input onChange={filter} name= "id" type="text"placeholder="Name" /> */}
                <table width={'40%'} border={1} style={{ borderCollapse: "collapse"}}>
                    <thead>
                         <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                        <th>Edit</th>


                        </tr>  
                    </thead>
                    <tbody>
                    {
                        this.state.students.length ?
                        this.state.students.map((sd,index)=>{
                            let check = this.state.selected?.id === sd.id;
                    return(
                    <tr key={sd.id}>
                        <td>{sd.id}</td>
                        <td>{check ? <input onChange={onChangeName} value={this.state.selected.name}/>: sd.name}</td> 
                        <td>
                        {check?(
                            <React.Fragment>
                        <button onClick={()=>onCancel(sd.id)}>Cancel</button>
                        <button onClick={()=>onSave(sd)}>Save </button> 
                        </React.Fragment>)
                        :(
                        <React.Fragment>
                        <button onClick={()=>onDelete(sd.id)}>Delete </button>
                        </React.Fragment>)}
                        </td>
                        <td>
                        <button onClick={()=>onEdit(sd)}> Edit </button>

                        </td>
                          
                    </tr>

                            )
                        })
                        : <tr><th colSpan={5}>No Data</th></tr>
                    }
                    </tbody>
                    
                </table>
            </div>
        )
    }
}






export default Getname;