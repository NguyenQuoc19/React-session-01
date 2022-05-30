import './App.css';
import ChartBar from './components/chartbar';
import ChartBarData from './data/ChartBarData';

import Profiler from './components/profile';
import ProfilerData from './data/ProfileData';

import SocialBlock from './components/SocialBlock';
import SocialBlockData from './data/SocialBlockData';

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

    </div>
  );
}

export default App;
