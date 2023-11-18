import styles from "./App.css";
import Nav from "./components/Nav/Nav";
import RecipeList from "./components/RecipeList/RecipeList";
import Search from "./components/Search/Search";
import { useState } from "react";
import RecipeListContainer from "./components/RecipeListContainer/RecipeListContainer";
import InnerContainer from "./components/InnerContainer/InnerContainer";
function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      {/*Nesting component ViewRecipe - parent component RecipeList - child component*/}
      <RecipeListContainer>
        <InnerContainer>
          {/* passing the prop */}
          <RecipeList recipeData={recipeData} />
        </InnerContainer>
      </RecipeListContainer>
    </div>
  );
}

export default App;
