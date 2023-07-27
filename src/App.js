import "./App.css";
import Navbar from "./components/Navbar";
import "./style.css";
import Grid from "./components/Grid";
import Card from "./components/Card";
import data from "./data";
// <Grid/>

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">{cards}</section>{" "}
    </div>
  );
}

export default App;
