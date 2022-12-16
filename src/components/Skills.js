import React from 'react'

function Skills() {
  return (
      <>
      <div id='skills' className="skills">
      <h1>What Do We Offer For You</h1>
        <h2>HTML</h2>
        <div className="progress-bar">
          <div className="html">
            <span>87%</span>
          </div>
        </div>
        <h2>CSS</h2>
        <div className="progress-bar">
          <div className="css">
            <span>71%</span>
          </div>
        </div>
        <h2>JAVASCRIPT</h2>
        <div className="progress-bar">
          <div className="javascript">
            <span>68%</span>
          </div>
        </div>
        <h2>PHP</h2>
        <div className="progress-bar">
          <div className="php">
            <span>55%</span>
          </div>
        </div>
        <h2>REACT JS</h2>
        <div className="progress-bar">
          <div className="reactjs">
            <span>76%</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills