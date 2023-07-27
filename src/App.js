import "./App.css";
import Navbar from "./components/Navbar";
import "./style.css";
import Grid from "./components/Grid";
import Card from "./components/Card";
import data from "./data";
// 

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key = {item.id}
        {...item}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Grid/>
      <section className="cards-list">{cards}</section>{" "}
    </div>
  );
}

export default App;
