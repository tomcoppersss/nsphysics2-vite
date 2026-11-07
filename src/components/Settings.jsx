import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const SettingsPage = () => {

  const { logout } = UserAuth();
  const navigate = useNavigate();
  const navigateSimulation = () => {
    navigate('/simulation');
  }

  const changeTheme = e => {
    console.log('change');
    switch (e.target.value) {
      case "Light mode":
        console.log('light');
        document.getElementById('root').className = 'lightMode';
        break;
      case "Dark mode":
        console.log('dark');
        document.getElementById('root').className = 'darkMode';
        break;
    }
  }

  const saveSettings = (form, filename = 'settings.json') => {
    const settings = {};

    form.querySelectorAll('select, input[type="text"]').forEach(input => {
      if (input.name) {
        settings[input.name] = input.value;
      }
    });

    form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      if (checkbox.name) {
        settings[checkbox.name] = checkbox.checked;
      }
    })

    form.querySelectorAll('input[type="number"]').forEach(input => {
      if (input.name) {
        settings[input.name] = Number(input.value);
      }
    })
    
    console.log(settings);
  }

  const handleSettingsSubmit = e => {
    e.preventDefault();
    saveSettings(e.currentTarget);
  }

  return (
    <>
      <header>
        <div style={{ width: '25%', display: 'flex', alignItems: 'center' }}>
          {/* Title */}
          <p style={{ fontSize: '35px', margin: '10px' }}>Settings</p>
        </div>

        <div style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>

        <div style={{ width: '25%', display: 'flex', flexDirection: 'row' }}>
        </div>

        <div style={{ width: '25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <button type="button" onClick={navigateSimulation} style={{ width: '75px', height: '75px', marginLeft: '10px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">settings</span>
          </button>
          <button type="button" onClick={logout} style={{ width: '75px', height: '75px', marginLeft: '10px' }}>
            <span style={{ fontSize: '50px' }} className="material-symbols-outlined">logout</span>
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'row', height: '90vh' }}>

        <div id="leftSidebar" className="sidebar">
        </div>

        <div style={{width: '70%', display: 'flex', flexDirection: 'column', border: '1px solid #000'}}>

          <div style={{width: '50%', paddingLeft: '10px'}}>
            <form onSubmit={handleSettingsSubmit}>
              <div><h2>Personalisation</h2></div>

              <div className="settingsGrid">

                <label htmlFor='selectTheme'>Menu theme:</label>
                <select id="selectTheme" onChange={changeTheme} name='theme' defaultValue="Dark mode">
                  <option>Light mode</option>
                  <option>Dark mode</option>
                </select>

                <label htmlFor='editPlaybackSpeed'>Playback speed:</label>
                <input id='editPlaybackSpeed' type="number" name='playbackSpeed'></input>

                <label htmlFor='editScale'>Canvas scale: </label>
                <input id='editScale' type="number" name='scale'></input>

                <label htmlFor='editGravity'>Gravity: </label>
                <input id='editGravity' type='number' name='gravity'></input>

                <label htmlFor='editShowVectors'>Show vectors</label>
                <input id='editShowVectors' type='checkbox' name='showVectors'/>

                <label htmlFor='editShowProjectilePath'>Show projectile path</label>
                <input id='editShowProjectilePath' type='checkbox' name='showProjectilePath' />

              </div>
              <br />
              <button type="submit" style={{ width: '60px', height: '30px'}}>Save</button>
            </form>
          </div>

        </div>

      </div>
  
    </>
  )
}

export default SettingsPage