import './App.css';
import Experience from './components/Exp';
import Pie from './components/Foot';
import ResponsiveAppBar from './components/Nav';
import Encabezado from './components/about';
import Contact from './components/contact';
import MyBio from './components/description';
import Formacion from './components/formacion';
import Skills from './components/skills';

function App() {
  
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Encabezado/>
      <MyBio/>
      <Skills/>
      <Formacion/>
      <Experience/>
      <Contact/>
      <Pie/>
    </div>
  );
}

export default App;
