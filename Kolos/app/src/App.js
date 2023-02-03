import { Data } from './components/Data';
import { LineChart } from './components/LineChart';
import './App.css';

const styles = {
  display: 'flex',
  justifyContent: 'space-between'
};



function App() {
  return (
    <div className="App">
      <div style={styles}>
          <div className="col-2">
              <Data></Data>
          </div>
          <div className="col-10">
            
          <LineChart></LineChart>
          </div>

      </div>
    </div>

  );

}

export default App;
