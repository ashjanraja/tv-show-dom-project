//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function zeroCheck(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach((item) => {
    let episode = document.createElement("div");
    episode.setAttribute("class", "episode");
    rootElem.appendChild(episode);
    let title = document.createElement("h3");
    episode.appendChild(title);
    title.setAttribute("class", "title");
    title.innerHTML = `${item.name} - S${zeroCheck(item.season)}E${zeroCheck(
      item.number
    )} `;
    let imgTag = document.createElement("img");
    episode.appendChild(imgTag);
    imgTag.src = `${item.image.medium}`;
    let pSummary = document.createElement("p");
    episode.appendChild(pSummary);
    pSummary.innerHTML = `${item.summary}`;
  });
}

window.onload = setup;
