# Tenzies Game

A fun and interactive dice game built with React where players roll dice until all ten dice show the same number.

## 🌐 Demo

🔗 **Live Demo:** [Tenzies Website](https://tenziesbg.netlify.app/)

---
## 🎮 Game Rules

1. Roll the dice to get random values (1-6)
2. Click on individual dice to "freeze" them at their current value
3. Keep rolling until all 10 dice show the same number
4. Frozen dice won't change when you roll
5. Win the game when all dice match!

##  Features

- **Interactive Gameplay**: Click to hold/unhold dice between rolls
- **Win Detection**: Automatic detection when all dice match
- **Celebration Effects**: Confetti animation upon winning
- **Accessibility**: Screen reader announcements and keyboard focus management
- **New Game**: Start a fresh game after winning

##  Technologies Used

- **React** - UI framework with hooks (useState, useEffect, useRef)
- **nanoid** - Generates unique IDs for dice components
- **react-confetti** - Celebratory confetti animation
- **CSS** - Custom styling (not included in snippet)

## Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd tenzies-game

# Install dependencies
npm install

# Start the development server
npm start
```

##  Dependencies
```json
{
  "react": "^18.x.x",
  "react-dom": "^18.x.x",
  "nanoid": "^4.x.x",
  "react-confetti": "^6.x.x"
}
```

##  Component Structure

### App.jsx (Main Component)
- Manages game state (dice array)
- Handles dice rolling logic
- Detects win conditions
- Renders Dice components and UI

### Dice.jsx (Child Component)
- Displays individual die with its value
- Shows held/unheld state visually
- Handles click events to toggle hold state

##  Key Features Explained

### State Management
```javascript
const [dice, setDice] = useState(() => generateAllNewDice());
```
- Lazy initialization for performance
- Each die object contains: `value`, `isHeld`, and `id`

### Win Condition Logic
```javascript
const gameWon = dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value);
```
- All dice must be held
- All dice must have the same value

### Accessibility Features
- Screen reader announcements for game state
- Automatic focus management on win
- ARIA live regions for dynamic updates

## 🎲 How to Play

1. Click "Roll" to roll all unheld dice
2. Click on any die to hold it at its current value (it will change appearance)
3. Click "Roll" again - held dice stay the same, others re-roll
4. Continue until all dice show the same number
5. When you win, confetti appears and the button changes to "New Game"
6. Click "New Game" to play again!

## 🔧 Customization

You can customize:
- Number of dice (change the array size in `generateAllNewDice`)
- Dice range (modify `Math.ceil(Math.random() * 6)`)
- Styling (update CSS classes)
- Confetti effects (configure react-confetti props)

##  Responsive Design

The game is designed to work on various screen sizes. Ensure your CSS includes appropriate breakpoints for mobile, tablet, and desktop views.

## 🙏 Acknowledgments

- Inspired by the classic Tenzies dice game
- Built as a learning project for React fundamentals

---

**Enjoy the game! 🎲🎉**

