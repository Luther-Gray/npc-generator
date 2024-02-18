import React, { useState } from "react";
import "./npcGenerator.css";

const NPCGenerator = () => {
  const [character, setCharacter] = useState({});
  const [isMale, setIsMale] = useState(true);
  const [maxAge, setMaxAge] = useState(85);

  //   I'm grabbing JSON files and using them to create the arrays that serve as pools of names to draw from.
  const maleNames = require("./data/maleNames.json").names;
  const femaleNames = require("./data/femaleNames.json").names;
  const philosophies = require("./data/moralPhilosophies.json").philosophy;
  const enneagrams = require("./data/enneagram.json").enneagramTypes;
  const mbtis = require("./data/myers-briggs.json").MBTI;
  const colors = require("./data/colors.json").color;
  const prefixes = require("./data/attributes.json").prefixAdjective;
  const occupations = require("./data/attributes.json").occupation;

  //   Using the JSON data that we imported from above, I'm randomly selecting 1 entry from the array and storing it in another new variable. For example, colors.json has an array called color. We are *requiring* that array above, and storing it in a variable called colors. Then we are selecting a random number from that array that will correlate with it's position. We are using numbers by getting the length of the array, which returns a number, then selecting a random number using the array length as the MAX number we have the potential to select. Whatever this random number is, we are storing that result in a new variable, called color in this example. Lastly we are slotting color into the state so that we can use it later.
  const generateRandomCharacter = () => {
    const names = isMale ? maleNames : femaleNames;
    const name = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * maxAge) + 1;
    const enneagram = enneagrams[Math.floor(Math.random() * enneagrams.length)];
    const mbti = mbtis[Math.floor(Math.random() * mbtis.length)];
    const philosophy =
      age < 13
        ? "Too young to decide"
        : philosophies[Math.floor(Math.random() * philosophies.length)];
    let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    let occupation =
      occupations[Math.floor(Math.random() * occupations.length)];
    if (age < 10) {
      prefix = "Innocent";
      occupation = "Child";
    }
    const color = colors[Math.floor(Math.random() * colors.length)];
    setCharacter({
      name,
      age,
      philosophy,
      enneagram,
      mbti,
      prefix,
      occupation,
      color,
    });
  };

  //   This function has the sole purpose of determining if the settings for the generator are geared to create a male or female character. There is no difference other than the pool of names the generator will pick from.
  const handleGenderChange = () => {
    setIsMale(!isMale);
  };
  // This function handles the max age that can be generated via a slider.
  const handleMaxAgeChange = (event) => {
    setMaxAge(parseInt(event.target.value));
  };

  return (
    // This is the slider and it's "style". Most of that work is done in the CSS.
    <div className="generation">
      <div>
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              id="gender"
              className="toggle-switch-checkbox"
              checked={isMale}
              onChange={handleGenderChange}
            />
            <div className="slider toggle-switch-inner" />
            <span>{isMale ? "Male" : "Female"}</span>
          </label>
        </div>

        {/* This is the max age slider and it's "style". There's not much to style here, but if you wanted to make a 800 year old elf, then the max needs to be set to 800. I almost used boxes so you could type the min and max manually but the slider is more elegant. */}

        <div>
          <label htmlFor="maxAge">Maximum Age: {maxAge}</label>
          <input
            type="range"
            id="maxAge"
            name="maxAge"
            min="1"
            max="150"
            value={maxAge}
            onChange={handleMaxAgeChange}
          />
        </div>
      </div>

      {/* The titular button that makes the character */}
      <div>
        <button class="button" onClick={generateRandomCharacter}>
          Generate
        </button>
      </div>

      {/* Here's the thing that actually displays to the page. Anything visual you want to do to the text or formatting, this is the place. */}
      {character.name && (
        <div>
          <p>Name: {character.name}</p>
          <p>Age: {character.age}</p>
          {/* <p>Philosophy: {character.philosophy}</p> */}
          <p>Enneagram Type: {character.enneagram}</p>
          {/* <p>MBTI: {character.mbti}</p> */}
          <p>
            Occupation: {character.prefix} {character.occupation}{" "}
          </p>
          <p>Color: {character.color}</p>
        </div>
      )}
    </div>
  );
};

export default NPCGenerator;
