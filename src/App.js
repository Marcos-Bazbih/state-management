import './App.css';
// import AppRouter from './App-Router';
import MassageContextProvider from './Context/massage-context';
import Massage from './components/pages/Massage';
import Header from './components/parts/Header';
import Footer from './components/parts/Footer';
import Sidebar from './components/parts/Sidebar';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MassageContextProvider>
        <Home />
      </MassageContextProvider>
      <Footer />
    </div>
  );
}

export default App;
