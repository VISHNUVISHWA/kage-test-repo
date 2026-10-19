// Kage test source (manga). Static data, no network access.
var TITLES = [
  { id: "demo-1", title: "Demo Manga One", status: "Ongoing", latest: "Chapter 3" },
  { id: "demo-2", title: "Demo Manga Two", status: "Completed", latest: "Chapter 1" }
];
function search(query, page) {
  var q = String(query).toLowerCase();
  return TITLES.filter(function (t) { return t.title.toLowerCase().indexOf(q) !== -1; })
    .map(function (t) { return { id: t.id, title: t.title, latest_entry: t.latest, status: t.status }; });
}
function details(id) {
  return { id: id, title: "Demo " + id, author: "Kage Tester", status: "Ongoing",
           description: "Static fixture title served by the test source.", genres: ["Test", "Fixture"] };
}
function chapters(id) {
  return [
    { id: id + "-c3", title: "Chapter 3", number: 3, date: "2026-03-01" },
    { id: id + "-c2", title: "Chapter 2", number: 2, date: "2026-02-01" },
    { id: id + "-c1", title: "Chapter 1", number: 1, date: "2026-01-01" }
  ];
}
function pages(chapterId) {
  return ["https://example.org/" + chapterId + "/1.jpg", "https://example.org/" + chapterId + "/2.jpg"];
}
