// Kage test source (anime), version 1.1.0. Static data. The stream is a CC0 sample clip
// published by MDN, so playback and downloads can be tested with a real video.
function search(query, page) {
  return [{ id: "anime-1", title: "Demo Anime " + query, latest_entry: "Episode 2", status: "Ongoing" }];
}
function details(id) {
  return { id: id, title: "Demo Anime", author: "Kage Tester", status: "Ongoing", genres: ["Test"] };
}
function episodes(id) {
  return [{ id: id + "-e2", title: "Episode 2", number: 2 }, { id: id + "-e1", title: "Episode 1", number: 1 }];
}
function streams(episodeId) {
  return [{ url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4", quality: "720p" }];
}
