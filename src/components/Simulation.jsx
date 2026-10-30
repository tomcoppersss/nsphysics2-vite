import { useEffect } from 'react';
import { logout } from '../lib/supabaseClient.js'

const ObjectSidebar = () => {
  return (
    <>
      <div className="sidebarEnd">
        <p style={{ margin: 0 }}>Object creation</p>
      </div>

      <div id="objectListContainer" style={{ height: '80%', maxHeight: '80%', overflowY: 'scroll' }}></div>

      <div id="newObjectButtonContainer" className="sidebarEnd">
        <button style={{ width: '90%', height: '80%', marginLeft: '5%', marginTop: '2.5%' }}>+ New Object</button>
      </div>
    </>
  )

}

const ForceSidebar = () => {
  return (
    <>
      <div className="sidebarEnd">
        <p style={{ margin: 0 }}>Force creation</p>
      </div>

      <div id="forceListContainer" style={{ height: '80%', maxHeight: '80%', overflowY: 'scroll' }}></div>

      <div id="newForceButtonContainer" className="sidebarEnd">
        <button style={{ width: '90%', height: '80%', marginLeft: '5%', marginTop: '2.5%' }}>+ New Force</button>
      </div>
    </>
  )
}

const ProjectileMotionSidebar = () => {

  return (
    <>
      <div style={{ height: '10%', maxHeight: '10%', backgroundColor: '#191A25' }}>

        <div style={{ height: '10%', display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <p style={{ width: '100%', height: 'calc(100% / 3)' }}>Edit simulation</p>
          <p>All units should be given in SI units.</p>
        </div>

        <div style={{ height: '80%', maxHeight: '80%', overflowY: 'scroll', display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
          <p style={{ width: '100%' }}>Edit cannon</p>

          <div style={{ height: 'calc(100% / 3)' }}>
            <div id='cannonProperties' className='propertyGrid'>
              <label htmlFor='editCannonAngle'>Cannon angle</label>
              <input id='editCannonAngle' type='number' name='angle' defaultValue={sim.cannon.angle} />

              <label htmlFor='editCannonballSpeed'>Cannonball speed</label>
              <input id='editCannonballSpeed' type='number' name='cannonballSpeed' defaultValue={Math.hypot(sim.cannon.cannonballVx, sim.cannon.cannonballVy)} />

              <label htmlFor='editCannonX'>Cannon X</label>
              <input id='editCannonX' type='number' name='cannonX' defaultValue={sim.cannon.x} />

              <label htmlFor='editCannonHeight'>Cannon height</label>
              <input id='editCannonHeight' type='number' name='cannonY' defaultValue={sim.cannon.y} />
            </div>
          </div>

          <div style={{ height: 'calc(100% / 3)' }}>
            <div style={{ height: '10%' }}>
              <p>Edit world</p>
            </div>
            <div id='simulationProperties' className='propertyGrid'>
              <label htmlFor='editGravity'>Gravity</label>
              <input id='editGravity' type='number' name='gravity' defaultValue={sim.gravity} />

              <label htmlFor='editAirResistance'>
                Air resistance
                <button className='tooltip' style={{ width: 16, height: 16 }} data-text='Drag force coeffecient. Use values between 0 and 0.001'>i</button>
              </label>
              <input id='editAirResistance' type='number' name='airResistance' defaultValue={sim.airResistance} />

              <label htmlFor='showVectors'>Show vectors</label>
              <input id='showVectors' type='checkbox' name='showVectors' defaultChecked={sim.showVectors} />

              <label htmlFor='showProjectilePath'>Show projectile path</label>
              <input id='showProjectilePath' type='checkbox' name='showProjectilePath' defaultChecked={sim.showProjectilePath} />
            </div>
          </div>

          <div style={{ height: 'calc(100% / 3)' }}>
            <div style={{ height: '10%' }}>
              <p>Edit projectiles</p>
            </div>
            <div id='cannonballProperties' className='propertyGrid'>
              <label htmlFor='editCannonballMass'>Cannonball mass</label>
              <input id='editCannonballMass' type='number' name='projectileMass' defaultValue={1} />

              <label htmlFor='editCannonballRadius'>Cannonball size</label>
              <input id='editCannonballRadius' type='number' name='projectileRadius' defaultValue={5} />
            </div>
          </div>
        </div>

        <div id='newObjectButtonContainer' style={{ width: '100%', height: '10%', backgroundColor: '#191A25' }}>
          <button id='fireCannonButton' style={{ width: '90%', height: '80%', marginLeft: '5%', marginTop: '2.5%' }}>Fire Cannon</button>
        </div>

      </div>


    </>
  )
}

const GeneralSim = () => {
  return (
    <Simulation leftSidebar={<ObjectSidebar />} rightSidebar={<ForceSidebar />}/>
  )
}

const ProjectileMotion = () => {
  return (
    <Simulation leftSidebar={<ProjectileMotionSidebar />} rightSidebar={null}/>
  )
}

const SimulationPage = (props) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/src/physics.js';
    script.type = 'module';
    document.getElementById('root').appendChild(script);

    return () => {
      document.getElementById('root').removeChild(script);
    };
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
            <select id="selectSim" data-lastselected="" style={{ width: '75%', height: '50%' }} defaultValue="Create your own">
              <option>Select sim:</option>
              <option>Projectile motion</option>
              <option>Momentum</option>
              <option>Create your own</option>
            </select>
          </div>
        </div>

        <div style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <button type="button" data-action="settings" style={{ width: '75px', height: '75px', marginLeft: '10px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">settings</span>
          </button>
          <button type="button" onClick={logout} style={{ width: '75px', height: '75px', marginLeft: '10px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </header>

      {/* Canvas and sidebars */}
      <div style={{ display: 'flex', flexDirection: 'row', height: '90vh' }}>
        <br />

        {/* Object creation sidebar */}
        <div id="leftSidebar" className="sidebar">
          {props.leftSidebar}
        </div>

        <div id="centreContainer" style={{ backgroundColor: '#1E1F2B', width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <canvas id="canvas"></canvas>
          <div><p></p></div>
        </div>

        {/* Force creation sidebar */}
        <div id="rightSidebar" className="sidebar">
          {props.rightSidebar}
        </div>
      </div>
    </>
  )
}

export default SimulationPage