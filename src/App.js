import React, { useState, useEffect } from 'react'
import './App.css'
import MyMap from './components/MyMap'

function App() {
  const [ipData, setIpData] = useState({
    ip: '',
    location: { country: '', lat: '', lng: '' },
  })

  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('complete data', data)
        setIpData({ ip: data.ip, location: data.location })
      })
  }, [])

  console.log('ipData', ipData)

  return (
    <div className='App'>
      <h1>Hallo {ipData.ip}</h1>
      {ipData.location.lat !== '' && <MyMap ipData={ipData} />}
      {ipData.location.country !== '' && (
        <img
          alt={`flag-${ipData.location.country}`}
          src={`https://flagcdn.com/224x168/${ipData.location.country.toLowerCase()}.png`}></img>
      )} 
    </div>
  )
}

export default App
