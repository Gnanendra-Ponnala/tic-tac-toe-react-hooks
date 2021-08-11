import GlobalContext from './GlobalContext'
import StartGameComponent from './components/StartGameComponent'


function App() {
  return (
    <GlobalContext>
        <div className="App">
          <StartGameComponent />
      </div>
    </GlobalContext>
    
  );
}

export default App;
