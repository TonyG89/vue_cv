
const codeTimeUrl = "https://img.shields.io/endpoint?style=flat&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D17123%26project%3D%26in%3D"
// const onlyTimeUrl = "https://api.codetime.dev/shield?id=17123&project=&in="

const codeTime = [
  codeTimeUrl + 86400000,
  codeTimeUrl + 604800000,
  codeTimeUrl + 2592000000,
]

class Book {
  constructor(author, title, desc = null) {
    this.title = title;
    this.author = author;
    this.desc = desc;
  }
}

const books = [
  [
    new Book('Kyle Simpson', 'You Don’t Know JS', ["Up & Going", "Scope & Closures"]),
    new Book()
  ],
  [
    new Book('Kyle Simpson', 'You Don’t Know JS', [
      "this & Object Prototypes",
      "Types & Grammar",
      "Async & Performance",
      "ES6 & Beyond",
    ]),

  ],
]

const bookStatus = ['readed', 'in progress']

const bookCourses = []

// console.log(parseCodeTime(2592000000).then(data => data))

export default {
  codeTime, books, bookStatus,
  bookCourses
}