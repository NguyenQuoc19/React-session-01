import './App.css';
import ChartBar from './components/chartbar';
import ChartBarData from './data/ChartBarData';

import Profiler from './components/profile';
import ProfilerData from './data/ProfileData';

import SocialBlock from './components/SocialBlock';
import SocialBlockData from './data/SocialBlockData';

import Index from './components/ChartColumn';
import ChartColumnData from './data/ChartColumnData';

import Persons from './components/Persons';
import PersonData from './data/PersonData';

function App() {
  return (
    <div>
        <h1>ChartBar</h1>
        {
          ChartBarData.map((chartbar) => {
            const {text, color1, colors, percentage} = chartbar;
            return (
              <div key={text}>
                  <ChartBar text={text} color1={color1} colors={colors} percentage={percentage}/>
              </div>
            );
          })
        }
        <hr/>

        <h1>Profile</h1>
        <div className='profile'>
          {
            ProfilerData.map((profile) => {
              const {nameIcon, name, percentage, colors} = profile;
              return (
                <div key={name}>
                  <Profiler nameIcon={nameIcon} name={name} colors={colors} percentage={percentage}/>
                </div>
              );
            })
          }
        </div>
        <hr/>

        <h1>Social Block</h1>
        <div className='socialBlock'>
          {
            SocialBlockData.map((socialBlock) => {
              const {text, color, iconName, total, unit} = socialBlock
              return(
                <div key={text}>
                    <SocialBlock text={text} color={color} iconName={iconName} total={total} unit={unit}/>
                </div>
              );
            })
          }
        </div>
        <hr/>

        <h1>ChartColumn</h1>
        <div className='ChartColumn'>
            {
              ChartColumnData.map((ChartColumn) => {
                const {text, total, unit, percentages, colors, days} = ChartColumn
                return(
                  <div key={text}>
                      <Index text={text} total={total} unit={unit} percentages={percentages} colors={colors} days={days}/>
                  </div>
                );
              })
            }
        </div>
        <hr/>

        <h1>Person</h1>
        <div className='person'>
          {
            PersonData.map((person, index) => {
              const {avata, infors,contacts} = person
              return (
                <div key={index}>
                  <Persons avata={avata} infors={infors} contacts={contacts}/>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;
