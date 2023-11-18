import Search from "./components/Search";
import { useState } from "react";
function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      {recipeData.map((recipeItem) => (
        <h1>{recipeItem.title}</h1>
      ))}
    </div>
  );
}

export default App;
