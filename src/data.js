import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "Hidden Structure",
      artist: "Leavv, Flitz&Suppe",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#9ec192", "#c28863"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9913",
    },
    {
      name: "Upstate",
      artist: "Philanthrope, Brock Berrigan, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#a54034", "#f8c57a"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10245",
    },
    {
      name: "Distance",
      artist: "Nymano, Ouska, Anetta Morozova",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5a5582", "#191514"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10152",
    },
    {
      name: "One Last Call",
      artist: "Nymano, Kanisan, Mau",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5a5582", "#191514"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10134",
    },
    {
      name: "Sunday Mornings",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5a5582", "#191514"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10139",
    },
    {
      name: "Journeys",
      artist: "Sitting Duck, squeeda",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5b352a", "#efc84f"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8650",
    },
    {
      name: "Tumbling",
      artist: "Swørn",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#410f47", "#d06d84"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9225",
    },
  ];
}

export default chillHop;
