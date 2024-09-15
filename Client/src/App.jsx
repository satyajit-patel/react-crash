import {TextCard} from './components/aceternityUI/textReveal/TextCard';

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

    return (
      <div className='flex flex-row flex-wrap justify-evenly bg-slate-800'>
        {/* <div><TextCard/></div>
        <div><TextCard/></div> */}
        {
          data.map((it) => (
            <div key={it.id}><TextCard it={it} /></div>
          ))
        }
      </div>
    );
}

export default App;
