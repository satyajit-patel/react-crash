import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import getQuote from './components/api/getQuote'

const App = () => {
  const [quoteList, setQuoteList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getQuote();
      if(result) {
        setQuoteList(result);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-1'>
        {/* { // The curly braces open's the JavaScript space
          (quoteList.length > 0) ? 
            quoteList.map((it, index) => {
              const profileLink = `https://www.google.co.in/${it.name}`;
              return (<Card key={index} name={it.name} quote={it.quote} link={profileLink} />);
            }) :
            (<h1 className='text-center bg-red-500 text-xl'>No Data Found</h1>)
        } */}
        {quoteList.length > 0 ? 
          quoteList.map((it, index) => {
            const profileLink = `https://www.${it.name}-wikipedia/google.com`;
            return (
              <Card 
                key={index} 
                name={it.name} 
                quote={it.quote} 
                link={profileLink} 
              />
            );
          }) : (
            <h1 className='text-center bg-red-500 text-xl'>No Data Found</h1>
          )
        }
      </div>
    </div>
  )
}

export default App
