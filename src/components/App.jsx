class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: null,
      currentVideo: null
    };

    this.getYoutubeVids = this.getYoutubeVids.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
  }

  componentDidMount() {
    this.getYoutubeVids('best anime opening theme songs');
  }

  selectVideo (video) {
    this.setState({
      currentVideo: video
    });
  }

  getYoutubeVids(query) {
    console.log(this.props.YOUTUBE_API_KEY);
    var options = {
      key: this.props.YOUTUBE_API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  render () {
    return (

      this.state.videos ?
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchInput={this.getYoutubeVids}/>
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
      :
      <div>Loading</div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
