
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Course from './component/Course';
import Home from './component/Home';
import Trainer from './component/Trainer';
import ALLExercise from './component/ALLExercise';
import Cardio from './component/BodyParts/Cardio';
import Back from './component/BodyParts/Back';
import Chest from './component/BodyParts/Chest';
import LowerArms from './component/BodyParts/LowerArms';
import Shoulders from './component/BodyParts/Shoulders';
import UpperArms from './component/BodyParts/UpperArms';
import UpperLegs from './component/BodyParts/UpperLegs';
import LowerLegs from './component/BodyParts/LowerLegs';



function App() {
  
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/trainer' element={<Trainer/>}/>
        <Route path='/exercise' element={<ALLExercise/>}/>
        <Route path='/back' element={<Back/>}/>
        <Route path='/cardio' element={<Cardio/>}/>
        <Route path='/chest' element={<Chest/>}/>
        <Route path='/lowerarms' element={<LowerArms/>}/>
        <Route path='/shoulders' element={<Shoulders/>}/>
        <Route path='/upperarms' element={<UpperArms/>}/>
        <Route path='/upperlegs' element={<UpperLegs/>}/>
        <Route path='/lowerlegs' element={<LowerLegs/>}/>
      </Routes>
      
      {/* <Course/> */}

    </div>
  );
}

export default App;
