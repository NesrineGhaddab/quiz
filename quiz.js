class Question {
  constructor(description, answer, point, coverImg, character) {
    this.description = description
    this.answer = answer
    this.point = point
    this.coverImg = coverImg
    this.character = character
  }
}
let naruto = new Question("A ninja with a dream of becoming the strongest ninja and leader of his village.",
  "Naruto", 5, "https://i.pinimg.com/564x/85/31/7b/85317b621555591cfdc1daebd40f399d.jpg",
  "https://photos.tf1.fr/780/780/perso-showpage-8efac4-fe1481-0@1x.png")
let deathnote = new Question("A high school student who gains the powers of a death god and uses them to bring justice.",
  "Death Note", 10, "https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  "/assets/img/death.png")
let onepeace = new Question("A group of friends embark on an adventure to find a mysterious treasure.",
  "One Piece", 2, "https://www.manga-news.com/public/images/pix/dvd/690/One-piece-anime-east-blue.jpg",
  "/assets/img/onePiece.png")
let question = document.getElementById("question")
let points = document.getElementById("score")
let answer = document.getElementById("answer")
let cover = document.getElementById("cover")
let character = document.getElementById("character")
let audioSHD = document.getElementById("youShD")
let audioYES = document.getElementById("yes")
let audioGUN = document.getElementById("gun")

const quizQuestions = [naruto, deathnote, onepeace];

let index = 0
let display = () => {
  answer.value = ""
  question.innerHTML = quizQuestions[index].description
  cover.src = quizQuestions[index].coverImg
  character.src = quizQuestions[index].character
}
display()
let checkAnswer = () => {
  if (answer.value.toLowerCase() === quizQuestions[index].answer.toLowerCase()) {
    if (index === 2) {
      audioYES.play()
      alert("good job you win")
      index = 0
      display()
    }
    else {
      audioYES.play()
      index++
      points.innerHTML = +points.innerHTML + quizQuestions[index].point
      display()
    }
  }
  else {
    audioGUN.play()
  }

}

