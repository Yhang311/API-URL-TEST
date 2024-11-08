import React, { useEffect, useState } from 'react';
import fetch_token from './fetch_token.js'; 
import fetch_calendar from './inform.js';

const App = () => {
  const username = "test23"; //test name
  const team = "김천"; // test team
  const [token, setToken] = useState('');  //token
  const [Local_token, setLocalToken] = useState(localStorage.getItem('token') || '');
  const [Local_name, setLocalName] = useState(localStorage.getItem('username') || '');
  const [Local_team, setLocalTeam] = useState(localStorage.getItem('team') || '');
  const [calendarData,setcalendarData] = useState(null);

  useEffect(() => {
    const getTokenInfo = async () => {
      if (username !== Local_name || team !== Local_team) {
        const fetchedToken = await fetch_token(username, team);
        setToken(fetchedToken);
        setLocalToken(fetchedToken);
        setLocalName(username);
        setLocalTeam(team);
        
        localStorage.setItem('token', fetchedToken);
        localStorage.setItem('username', username);
        localStorage.setItem('team', team);
      } else {
        setToken(Local_token);   //token value
      }
    };
    getTokenInfo(); 
  }, [username, team, Local_name, Local_team, Local_token]);


  useEffect(() => {
    const getCalendarInfo = async () => {
      if (token) { 
        const fetchedCalendar = await fetch_calendar(token);
        setcalendarData(fetchedCalendar);
      }
    };
    getCalendarInfo(); 
  }, [token]); 


  return (
    <div>
      <h3>Information</h3>
      <p>Token: {token}</p>

      <h3>Information</h3>
      <p>
      {/* {calendarData.map((author, index) => (
            <li key={index}>{author}</li>
          ))} */}
          {<p>
            {calendarData ? JSON.stringify(calendarData) : 'Loading...'}</p>}
      </p>
    </div>
  );
};

export default App;
