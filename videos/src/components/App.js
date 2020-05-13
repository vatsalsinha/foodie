import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    state = {videos: [], selectedvideo: null };

    componentDidMount(){
        this.onTermSubmit('food recipes');
    }
    
    onTermSubmit = async (term) => {
        const KEY = "AIzaSyB880BAX9pZzbGrgmt3TXYl8qbGdzdYBSg";
        const response =  await Youtube.get("/search",{
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${KEY}`
            }
        });
        this.setState({
            videos: response.data.items,
            selectedvideo: response.data.items[0]
        });

    }
    onvideoselect = (video) =>{
        this.setState({selectedvideo: video});
    };
    render(){
        return(
            <div className="ui container">
                <SearchBar ontermsubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedvideo} />
                        </div>
                        <div className="five wide column"> 
                            <VideoList videos={this.state.videos} onvideoselect={this.onvideoselect}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;