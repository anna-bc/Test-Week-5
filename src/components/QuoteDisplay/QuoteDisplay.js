import React, { useState } from "react"
import { quotes } from "../../state/models/quotes";

function QuoteDisplay() {
    const [quote, setQuote] = useState("");
  return (
    <div className="QuoteDisplay">
      <button className="QuoteDisplay__button" onClick={() => setQuote(quotes[Math.floor(Math.random()*quotes.length)])}>Click Me</button>
      <div className="QuoteDisplay__quote">{quote}</div>
    </div>
  )
};

export default QuoteDisplay;
