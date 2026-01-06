# Tenzies

A React-based dice game where players roll until all dice show the same number.

## Description

Tenzies is a fast-paced dice game where players must get all 10 dice to display the same value. Click on dice to "freeze" them at their current value, then roll the remaining dice until all match.

## Features

- 10 randomly generated dice
- Click to hold/unhold individual dice
- Automatic win detection
- Confetti celebration on victory
- New game functionality
- Accessibility support with screen reader announcements
- Keyboard focus management

## Installation
```bash
npm install react react-dom nanoid react-confetti
```

## Usage

1. Roll the dice by clicking the "Roll" button
2. Click on any dice you want to keep (they turn green)
3. Roll again to change the unheld dice
4. Continue until all dice show the same number
5. Click "New Game" to play again

## Game Rules

- All 10 dice must show the same value to win
- Held dice maintain their value between rolls
- Only unheld dice change when rolling
- Click held dice to unhold them

## Technologies

- React (Hooks: useState, useRef, useEffect)
- nanoid (unique ID generation)
- react-confetti (win celebration)

## Component Structure
```
src/
├── App.jsx
├── Dice.jsx
└── index.css
```

## State Management

- `dice`: Array of 10 dice objects with value, isHeld, and id properties
- `gameWon`: Derived state checking if all dice match and are held

## Key Functions

- `generateAllNewDice()`: Creates array of 10 random dice objects
- `hold(id)`: Toggles the held state of a specific die
- `rollDice()`: Rolls unheld dice or starts new game if won

## Accessibility

- ARIA live region for win announcement
- Screen reader support
- Automatic focus on "New Game" button after winning

## Browser Support

Requires modern browser with ES6+ and React 16.8+ support.

## License

Available for educational and personal use.

## Acknowledgments
- React team for the framework
