// shoot js when DOM is loaded
$(document).ready(function() {

    // setting global variables
    var recentTrackUrl = "https://ws.audioscrobbler.com/2.0?method=user.getRecentTracks&user=dianathedev&limit=100&api_key=a8de5ee9631ba5026c38ead04e2e47a7&format=json";
    var defaultCoverImage = "https://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png";
    //var refreshTime = 5000; //look for updated JSON every "xxx" miliseconds

    //definig the function which gets JSON data from the last.fm api and sets it to the
    function setRecentTrack() {
        $.getJSON(recentTrackUrl, function(data){

            $.each(data.recenttracks.track, function(i, info){
                var cover = info.image[3]["#text"];

                if(cover.length > 0) {
                    $('<div/>', {
                        'class': 'square',
                        'css': {
                            'background-image': "url('" + cover + "')"
                        }
                    }).appendTo('#root');
                }
            });
        });
    }
    //run function on pageload then load on time interval
    setRecentTrack();
    //setInterval(setRecentTrack, refreshTime);


});

$(document).on('ready', function() {
  var winHeight = $(window).height(),
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});
