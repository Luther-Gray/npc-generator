# NPC Generator

NPC Generator is a self-explanatory tool for creating interesting characters and prompting their stories.

## Features

The tool provides the following features:

1. **Generate a Name:** 
   - This feature allows you to generate a random name. You can toggle between male and female names.

2. **Generate an Age:** 
   - This feature generates an age for the character within a certain limit of 150 years. You can select the age limit using a slider. If the age is too young, certain features will display a non-option.

3. **Assign Enneagram:** 
   - Interesting characters are born from their beliefs and maxims. This feature assigns an Enneagram to the character.

4. **Generate Quirks and Occupation:** 
   - Quirks of character and occupation are generated. This can be used to explain the character's past and help write their future.

5. **Choose a Color:** 
   - Select a color for the character. The choice of color can influence the character's traits and story.

## Options

- Select Character Sex before generation via a toggle. This does nothing but change the pool of possible names.
- Set Maximum Age for generated character. By default, the maximum is 300, but you can change that maximum on line 86 of npcGenerator.jsx
- Currently, there isn't a user interface for tweaking how the moral philosophy is displayed. However, you can uncomment lines 105 & 107 if you want to use MBTI or Moral Philosophies instead of Enneagrams.

## How to Run

To run this project, use the following command:

npm start