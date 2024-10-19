import { Cards } from "./components/Cards";
import { Button } from "./components/Button";
import './App.css'

function App() {
  const cardItem = [
    { img: "https://media.istockphoto.com/id/1249219777/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-parcel-%D0%B8%D0%BB%D0%B8-paper-%D1%81-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF%D0%BE%D0%BC-%D0%BA%D0%BE%D1%80%D0%B7%D0%B8%D0%BD%D1%8B-%D0%B2-%D1%82%D0%B5%D0%BB%D0%B5%D0%B6%D0%BA%D0%B5-%D0%BD%D0%B0-%D0%BA%D0%BB%D0%B0%D0%B2%D0%B8%D0%B0%D1%82%D1%83%D1%80%D0%B5.jpg?s=1024x1024&w=is&k=20&c=IMhtHZiMMd5a4cFNtSsNIFA7rWRa6IGkf2axwOo_VHQ=",
      title: "Card title",
      text: "Some quick example text to build on nhe card title and make up the bulk of the card's content.",
      btnName: "Go somewhere"
    },
    {
      title: "Special title treatment",
      text: "With supporting text below as a natural lead-in additional content",
      btnName: "Go somewhere",
    }
  ]
  return (
    
    <div className="cardContainer">
      <Cards image={cardItem[0].img}>
      <h2>{cardItem[0].title}</h2>
      <p>{cardItem[0].text}</p>
      <Button btnName={cardItem[0].btnName} />
      </Cards>

      <Cards>
      <h2>{cardItem[1].title}</h2>
      <p>{cardItem[1].text}</p>
      <Button btnName={cardItem[0].btnName} />
      </Cards>
    </div>
  )
}

export default App
