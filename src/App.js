import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import LeftTab from "./components/LeftTab";
import RightTab from "./components/RightTab";

function App() {
  // changement de tab suivant si il est true ou false
  const [changeTab, setChangeTab] = useState(true);

  // Appel API, pas besoin de useEffect car il le lance que au click
  const [api, setApi] = useState([]);

  const gestFirstQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes?count=3")
      .then((response) => response.data)
      .then((data) => {
        setApi(data);
      });
  };

  return (
    <div className="App">
      {/* changement de coté suivant si il est true ou false */}
      <button type="button" onClick={() => setChangeTab(!changeTab)}>
        Change Tab
      </button>

      <div className="container">
        <div className="left">
          {/* changement de coté si changeTab est true et affiche le resultat avec le ternaire */}
          {changeTab ? (
            <>
              {/* au click il lance l'apel à l'api avec la fonction gestFirstQuote*/}
              <button type="button" onClick={() => gestFirstQuote()}>
                Get FirstQuotes
              </button>
              <>
                {/* nous lui indiquons les props api et setApi */}
                <LeftTab api={api} setApi={setApi} />
              </>
            </>
          ) : null}
        </div>

        <div className="right">
          {/* changement de coté si changeTab est false et affiche le resultat avec le ternaire*/}
          {changeTab ? null : (
            <>
              {/* au click il lance l'apel à l'api avec la fonction gestFirstQuote */}
              <button type="button" onClick={() => gestFirstQuote()}>
                Get SecondQuotes
              </button>
              <>
                {/* nous lui indiquons les props api et setApi */}
                <RightTab api={api} setApi={setApi} />
              </>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
