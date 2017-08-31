var searchYouTube = (options, cb) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      maxResults: options.max,
      videoEmbeddable: true,
      part: 'snippet',
      key: options.key,
      type: 'video',
      q: options.query
    },
    success: function(data) {
      cb(data.items);
    },
    failure: function(data) {
      console.log('Failure ' + data);
    }
  });
};

window.searchYouTube = searchYouTube;
