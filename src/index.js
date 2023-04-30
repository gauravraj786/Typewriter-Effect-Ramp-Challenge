import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Typewriter({ text }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(displayedText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [currentIndex, displayedText, text]);

  return <div>{displayedText}</div>;
}

function MyComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const url =
      "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge";
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const pElements = Array.from(doc.querySelectorAll("p.flag"));
        const newUrl = pElements.map((p) => p.getAttribute("value")).join("");
        return fetch(newUrl);
      })
      .then((response) => response.text())
      .then((text) => {
        setCharacters(text.split(""));
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Typewriter text={characters} />
      </div>
    );
  }
}

export default MyComponent;

const rootElement = document.getElementById("root");
ReactDOM.render(<MyComponent />, rootElement);
