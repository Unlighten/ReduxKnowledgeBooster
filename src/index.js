import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import _ from 'lodash'
const API_KEY = 'AIzaSyCcZMc3oluWWr_zpDplDcwsv7M0AGEkMJs'

//A quick understanding of Redux - Redux is predictable state container for JS applications

//we use fat arrow because it can change the instance of THIS
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('world of warcraft')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            })
        })
    }

    render() {
        //this is lodash throttling the function to trigger once every 3 milliseconds
        //SearchBar can still update as often it wants, it is just this one specific function that is throttled
        const videoSearch = _.debounce((term) => { this.videoSearch(term) } , 300)
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'))