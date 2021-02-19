import { Paper,TextField } from '@material-ui/core'
import React from 'react'

class SearchBar extends React.Component{
   state={
       searchTerm:''
   }
   handleChange=(event)=>{
       this.setState({searchTerm:event.target.value})
    // console.log(event.target.value)
   }


   handleSubmit=(e)=>{
       const { searchTerm}=this.state;
       const { onFormSubmit}=this.props;
    //    const searchTerm:string
    // console.log(this.state.searchTerm, this.state.value, this.state.value1)
    onFormSubmit(searchTerm);
    // event.preventDefault();
    e.preventDefault();
}
    render(){
        return(
            // <h2>Search bar</h2>
            <Paper elevation={6} style={{padding:'25px'}}>
            <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="Search.." onChange={this.handleChange}/>
            </form>
            </Paper>
        )
    }
}

export default SearchBar;