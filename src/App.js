import './App.css';
import BlueDivider from './components/blueDivider/BlueDivider';
import MainViewPage from './components/MainViewPage/MainViewPage';
import Menu from './components/Menu/Menu';
import Hours from './components/Hours/Hours';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MainViewPage />
      <BlueDivider />
      <Menu />
      <Hours />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
