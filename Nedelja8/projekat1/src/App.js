import React, { useState } from 'react';
import './App.css';
import PastLList from './components/past-l-list';
import { getPastLaunches, getUpcomingLaunches } from './utility/space-x-service';
import UpcomingLList from './components/upcoming-l-list';
import { Roadster } from './components/Roadster';
import {getRoadster} from './utility/space-x-service'
import {Content} from './layout/content'
import {Header} from './layout/header'
import {Footer} from './layout/footer'

function App() {
  
  const [pastData,setPastData]=useState([])
  const [upcomingData, setUpcomingData] = useState([])
  const [RoadsterData, setRoadsterData] = useState([])

  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
