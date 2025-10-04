import {SwiggyData} from './mockData.js';
import Header from './components/Header'
import CardContainer from './components/Card'



function App() {
  return (
    <div className="main-layout h-screen flex flex-col">
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;


