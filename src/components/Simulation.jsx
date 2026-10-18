import { useEffect } from 'react';


const Simulation = () => {

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/src/physics.js'
    script.type = 'module'
    document.body.appendChild(script)
  }, []);

  return (
    <>

      <header style={{ backgroundColor: '#14151F', height: '10vh', width: '100%', margin: 0, display: 'flex' }}>
        <div style={{ width: '25%', display: 'flex', alignItems: 'center' }}>
          {/* Title */}
          <p style={{ fontSize: '35px', margin: '10px' }}>NS physics simulation</p>
        </div>

        <div id="simulationButtonsContainer" style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Simulation buttons */}
          <button type="button" id="playPauseSimulation" data-action="playPauseSimulation" style={{ width: '75px', height: '75px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">play_pause</span>
          </button>
          <button type="button" data-action="stopSimulation" style={{ width: '75px', height: '75px', marginLeft: '10px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">stop_circle</span>
          </button>
          <button type="button" data-action="updateCanvas" style={{ width: '75px', height: '75px', marginLeft: '10px' }}></button>
          <button type="button" data-action="runSimulation" style={{ width: '75px', height: '75px', marginLeft: '10px' }}></button>
        </div>

        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          {/* Select sim */}
          <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <select id="selectSim" data-lastselected="" style={{ width: '75%', height: '50%' }} defaultValue="Select sim: ">
              <option>Select sim:</option>
              <option>Projectile motion</option>
              <option>Momentum</option>
              <option>Create your own</option>
            </select>
          </div>
        </div>

        <div style={{ width: '25%' }}>
          <button id="loginButton" style={{ width: '75px', height: '75px' }}>Login</button>
        </div>
      </header>

      {/* Canvas and sidebars */}
      <div style={{ display: 'flex', flexDirection: 'row', height: '90vh' }}>
        <br />

        {/* Object creation sidebar */}
        <div id="leftSidebar" className="sidebar">
          <div className="sidebarEnd">
            <p style={{ margin: 0 }}>Object creation</p>
          </div>

          <div id="objectListContainer" style={{ height: '80%', maxHeight: '80%', overflowY: 'scroll' }}></div>

          <div id="newObjectButtonContainer" className="sidebarEnd">
            <button style={{ width: '90%', height: '80%', marginLeft: '5%', marginTop: '2.5%' }}>+ New Object</button>
          </div>
        </div>

        <div id="centreContainer" style={{ backgroundColor: '#1E1F2B', width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <canvas id="canvas"></canvas>
          <div><p></p></div>
        </div>

        {/* Force creation sidebar */}
        <div id="rightSidebar" className="sidebar">
          <div className="sidebarEnd">
            <p style={{ margin: 0 }}>Force creation</p>
          </div>

          <div id="forceListContainer" style={{ height: '80%', maxHeight: '80%', overflowY: 'scroll' }}></div>

          <div id="newForceButtonContainer" className="sidebarEnd">
            <button style={{ width: '90%', height: '80%', marginLeft: '5%', marginTop: '2.5%' }}>+ New Force</button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Simulation