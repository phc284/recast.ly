class App extends React.Component {
  constructor ({videos}) {
    super(videos);
    console.log(videos);
    this.state = {
      videos: videos,
      currentVideo: videos[0]
    };
    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo(video) {
    this.setState({
      currentVideo: video
    });
  }

  // getSearchInput () {
  //   //something in Search.jsx
  //   searchVideo('');
  // }
  //
  // searchVideo(query) {
  //   searchYoutube({max: 5, query: query, key: window.YOUTUBE_API_KEY})
  // }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search videos={this.state.videos}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
ReactDOM.render(<App videos={window.exampleVideoDatas}/>, document.getElementById('app'));
