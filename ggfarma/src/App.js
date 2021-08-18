import './App.css';
import Header from './components/header/header.js'
import MainContent from './components/mainContent/mainContent.js'
import InsertItemsHeader from './components/insertItemsHeader/InsertItemsHeader.js';
import InsertItemsContent from './components/insertItemsContent/InsertItemsContent';

function App() {
  return (
    <div className="App">
      <InsertItemsHeader/>
      <InsertItemsContent/>
      {/*<Header />
      <MainContent />*/}
      
    </div>
  );
}

export default App;
