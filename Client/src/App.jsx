import { useCallback, useEffect, useState } from "react";

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
      

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [B2Text, setB2Text] = useState("B-2");
    const [loading, setLoading] = useState(true);
    const [nums, setNums] = useState([]);

    const handleB1 = () => {
        setCount1(count1 + 1);
    }
    const handleB2 = () => {
      setB2Text("clicked");
      setCount2(count2 + 1);
      setTimeout(() => {
        setB2Text("B-2");
      }, 1000);
    }

    // // with empty dependencies
    // useEffect(() => {
    //     alert("I will run once at very first render");
    // }, []);

    const dp = useCallback(() => {
      const getData = () => {
        setNums(data);
        setLoading(false);
      }
      getData();
    }, [])

    // with dependencies
    useEffect(() => {
        // alert("I will run every time when rerender/count1/count2/setNums gets updated");
        dp();
    }, [count1, count2, setNums])

    return (
        <div className="h-screen w-screen">
            <div className="bg-slate-500 flex flex-wrap justify-center items-center">
                <div className="bg-slate-300 rounded-md h-[100px] w-[150px] text-center m-2 p-2">
                    <button onClick={handleB1} className="bg-black text-white h-12 w-14 rounded-md">B-1</button>
                    <p>Count is: {count1}</p>
                </div>
                <div className="bg-slate-300 rounded-md h-[100px] w-[150px] text-center m-2 p-2">
                    <button onClick={handleB2} className="bg-black text-white h-12 w-14 rounded-md">{B2Text}</button>
                    <p>Count is: {count2}</p>
                </div>
            </div>
            <div className="bg-black">
                {
                    loading ? 
                    (
                        <h1 className="text-center text-white">Loading Please Wait.....</h1>
                    ): 
                    (
                        nums.map((it) => (
                            <div key={it.id} className="text-white text-center">
                                <p>{it.quote}</p>
                                <p>~{it.author}</p>
                                <br />
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
}

export default App;
