import {Grid} from '@material-ui/core';
import youtube from './api/youtube'
import React from 'react';
import SearchBar from './components/SearchBar.js'
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList'

// function App() {
//   return (
//     <div className="App">
      
//       <h1> youtube clone</h1>
//     </div>
//   );
// }
class App extends React.Component {

  state={
    videos:[],
    selectedVideo:null
  }

  componentDidMount(){
    this.handleSubmit('welcome to React learning')
  }

  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
  }
  handleSubmit= async (searchTerm)=>{
    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyB9T_mV9o6geO0MTChdhihYm5_tkmD0xMY',
        q:searchTerm
      }
    })
    // console.log(response.data.items);
    this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
  }
  render() {
    const {selectedVideo, videos}=this.state
    return (
      
<Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>

   
    );
  }
}

export default App;

