// Function to extract the YouTube video ID from a given URL
function getYouTubeVideoId(url) {
  var videoId = null;
  // Regular expression to capture the video ID from various YouTube URL formats
  var regex =
    /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  var match = url.match(regex);
  if (match && match[1]) {
    videoId = match[1];
  }
  return videoId;
}

// Function to set the embed URL to the iframe
function embedYouTubeVideo(videoId) {
  if (videoId) {
    var embedUrl = "https://www.youtube.com/embed/" + videoId;

    //Creating the iframe container upon button press 
    let container = document.getElementById("iFrameContainer");
    const iFrame = document.createElement("iframe");
    iFrame.id = "videoId";
    iFrame.width = "600";
    iFrame.height = "400";
    container.appendChild(iFrame);
    iFrame.src = embedUrl;
  } else {
    alert("Invalid YouTube URL");
  }
}

// Function to convert the URL and embed the video
function convertAndEmbed() {
  var url = document.getElementById("youtubeUrl").value;
  var videoId = getYouTubeVideoId(url);
  embedYouTubeVideo(videoId);

  // Clearing the input field
  document.getElementById("youtubeUrl").value = "";
}
