import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import { useState } from "react";
function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      {/* passing the prop */}
      <RecipeList recipeData={recipeData} />
    </div>
  );
}

export default App;
