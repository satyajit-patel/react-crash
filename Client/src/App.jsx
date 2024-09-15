import { createContext, useState } from 'react';
import NewApp from './NewApp';

// create the context
// wrap with provider
// use the context
const ImranKhan = createContext();

function App() {
  const data = [
    {
      quote: "The only constant is change.",
      author: "Heraclitus"
    },
    {
      quote: "I know that I know nothing.",
      author: "Socrates"
    },
    {
      quote: "Less is more.",
      author: "Ludwig Mies van der Rohe"
    },
    {
      quote: "To lead the people, walk behind them.",
      author: "Lao Tzu"
    },
    {
      quote: "The more you learn, the less you know.",
      author: "Socrates"
    },
    {
      quote: "The pursuit of happiness is the source of unhappiness.",
      author: "Blaise Pascal"
    }
  ];

  const [x, setX] = useState({nums: data});

  return (
    <div>
      <ImranKhan.Provider value={{x, setX}}>
        <NewApp />
      </ImranKhan.Provider>
    </div>
  );
}

export default App;
export {ImranKhan};
