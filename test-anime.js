// Kage test source (anime). Static data, no network access.
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
  return [{ url: "https://example.org/" + episodeId + ".m3u8", quality: "720p" }];
}
