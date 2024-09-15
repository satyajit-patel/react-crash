import {TextCard} from './components/aceternityUI/textReveal/TextCard';
import { ImranKhan } from './App';
import { useContext, useState } from 'react';

const NewApp = () => {
    const {x, setX} = useContext(ImranKhan);

    return (
        <div className='flex flex-row flex-wrap justify-evenly bg-slate-800'>
            {
                x.nums.map((it, index) => (
                    <div key={index}><TextCard it={it} /></div>
                ))
            }
      </div>
    )
}

export default NewApp;
