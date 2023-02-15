import "./App.css";
import HelloWorld from "./components/HelloWorld";
import ListOfNames from "./components/ListOfNames/ListOfNames";
import Navigation from "./components/Navigation/Navigation";
import QuoteDisplay from "./components/QuoteDisplay/QuoteDisplay";
import StarDisplay from "./components/StarDisplay/StarDisplay";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <>
      <Navigation />
      <HelloWorld id="HelloWorld" />
      <ListOfNames id="ListOfNames" />
      <UserProfile id="UserProfile" />
      <StarDisplay id="StarDisplay" number={5} />
      <QuoteDisplay id="QuoteDisplay" />
    </>
  );
}

export default App;
