import styles from "./App.css";
import Nav from "./components/Nav/Nav";
import RecipeList from "./components/RecipeList/RecipeList";
import Search from "./components/Search/Search";
import { useState } from "react";
import RecipeListContainer from "./components/RecipeListContainer/RecipeListContainer";
import InnerContainer from "./components/InnerContainer/InnerContainer";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeItemID, setRecipeItemID] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      {/*Nesting component ViewRecipe - parent component RecipeList - child component*/}
      <RecipeListContainer>
        <InnerContainer>
          {/* passing the prop */}
          <RecipeList
            recipeData={recipeData}
            setRecipeItemID={setRecipeItemID}
          />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails recipeItemID={recipeItemID} />
        </InnerContainer>
      </RecipeListContainer>
    </div>
  );
}

export default App;
