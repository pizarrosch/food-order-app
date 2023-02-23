import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
