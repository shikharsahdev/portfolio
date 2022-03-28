import { useEffect, useState } from "react";

function Banner({handleShowEaster}) {
  const words = ["work", "perform", "engage", "grow"];
  const [highlightText, setHighlightText] = useState("");
  useEffect(() => {
    let word = 0;
    let letter = 0;
    let change = 1;
    const waitingCount = 7;
    let typer = true;
    let changeTyper = false;
    setInterval(() => {
      typer = changeTyper ? !typer : typer;
      changeTyper = !changeTyper;
      const setText = (text) => {
        setHighlightText(text + (typer ? "|" : ""));
      }
      if (letter === 0 && change === - 1) {
        word++;
        if (word >= words.length) {
          word = 0;
        }
        letter = 0;
        change = 1;
      } else if (letter < words[word].length) {
        letter = letter + change;
      } else if (letter < words[word].length + waitingCount) {
        letter = letter + change;
      } else {
        change = -1;
        letter = letter + change;
      }

      setText(words[word].substring(0, letter));
    }, 150);
  }, []);
  const abc=() => {
    console.log("called")
    handleShowEaster()
  }
  return (
    <div className="container banner">
      <span className="h text">
        Helping create beautiful experiences for web & mobile that<br/><span className="ht">{ highlightText || " " }</span>
      </span>
      <span class="subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing <b>elit</b>, <b>sed do eiusmod</b> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
      </span>
      <span className="h foottext">
        <img src={process.env.PUBLIC_URL + '/me.jpeg'} onClick={abc}/>shikhar<span className="ht">.</span>sah.dev
      </span>
    </div>
  )
}

export default Banner;