import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './screens/Home/Home';



function App() {
  return (
    <div className="App">
     <Header />
     {/* <Sidebar /> */}
     <Home />
    </div>
  );
}

export default App;
