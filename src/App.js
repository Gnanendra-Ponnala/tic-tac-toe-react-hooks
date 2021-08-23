import GlobalContext from './GlobalContext'
import WebRouter from './router/WebRouter'


function App() {
  return (
    <GlobalContext>
        <div className="App">
          <WebRouter />
      </div>
    </GlobalContext>
    
  );
}

export default App;
