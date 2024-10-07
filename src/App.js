
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/RowPost/Rowpost';
import { originals,action,horror, comedy, documentaries } from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title="Netflix Originals" url={originals}/>
      <Rowpost title="Action" isSmall url={action}/>
      <Rowpost title='Horror' isSmall url={horror}/>
      <Rowpost title='Comedy' isSmall url={comedy}/>
      <Rowpost title='Documentaries' isSmall url={documentaries}/>
      <Footer/>



    </div>
  );
}

export default App;
