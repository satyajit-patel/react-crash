import React from 'react'
import './App.css'
import {FaMapMarker} from 'react-icons/fa'

// use of hooks
import {useState} from 'react' // importing useState hook

const Box = (props) => {
  // hooks always stay at above the return statement and gives true/false value
  // [userDefineName, userDefineNameFunction with just set attached at front in camelCase]
  const [desc, setDesc] = useState(false); // means we don't want to show bydefault

  let s = props.description;
  if(!desc) {
    s = s.substring(0, 20) + '...';
  }

  return (
    <div>
      <div className="box-container">
            <div className="box" id="satya">
                <h2>Satajit</h2>
                <p>Right-hand Batsman</p>
                <p>
                  {/* {props.description} */}
                  {s}

                  {/* adding event listener */}
                  {/* flag is just userName.. it sets if it was more previously then less and vice-versa */}
                  {/* this is called dnamic stuff */}
                  <button onClick={() => setDesc((flag) => !flag)}>
                    {desc ? 'show_less' : 'show_more'} 
                  </button>
                </p>
                <div id='location'>
                  <br />
                  <br />
                  <FaMapMarker />
                  <i>Odisha, India</i>
                </div>
            </div>
            <div className="box" id="abhi">
                <h2>Abhishek</h2>
                <p>Right-hand Batsman</p>
            </div>
            <div className="box" id="arpi">
                <h2>Arpita</h2>
                <p>Right-hand Bowler</p>
            </div>
        </div>
    </div>
  )
}

export default Box


