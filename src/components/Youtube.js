import React from 'react'
import {Link} from 'react-router-dom'

function Youtube() {
    return (
      <div className="youtube-channel-container" id='youtube'>
        <div className="youtube-info">
          <img width="150" className="_3" height="150" src="./MSC.png" alt="" />
          <h1>MSC TECHNICAL</h1>
          <h2>A Channel For Web Developers</h2>
          <div className="youtube-btns">
            <button>
              <a target="_1" href="https://www.youtube.com/channel/UCRfz2v0QJ07syoZtQ3w0b9g">
                View Channel
              </a>
            </button>
            <button>
              <Link to="/tutorials">View Tutorials</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Youtube