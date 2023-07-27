import "./App.css";
import Navbar from "./components/Navbar";
import "./style.css";
import Grid from "./components/Grid";
import Card from "./components/Card";
import cardimg from "./images/katie-zaferes.png";

// <Grid/>

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card
        img={cardimg}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
