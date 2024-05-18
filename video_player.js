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

    const iFrame = document.createElement("iframe");
    iFrame.width = "400";
    iFrame.height = "225";
    iFrame.src = embedUrl;

    // Create a unique id for each iframe
    const uniqueId = "video-" + videoId;
    iFrame.id = uniqueId;

    // Create a remove button
    const removeButton = document.createElement("button");
    // removeButton.className("button-6");
    removeButton.textContent = "Remove";

    removeButton.onclick = function () {
      removeYouTubeVideo(uniqueId);
    };

    // Append iframe and button to the container
    let iframecontainer = document.getElementById("iFrameContainer");

    let container = document.createElement("div");
    container.className = "video-container";
    container.appendChild(iFrame);
    container.appendChild(removeButton);

    iframecontainer.appendChild(container);

    
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

function removeYouTubeVideo(videoId) {
  var iFrame = document.getElementById(videoId);
  var removeButton = iFrame.nextSibling; // Assuming button is added right after the iframe
  if (iFrame) {
    iFrame.remove();
  }
  if (removeButton) {
    removeButton.remove();
  }
}
