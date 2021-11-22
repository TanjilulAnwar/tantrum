import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <div className="container">
      <div className="head-text">Hello! I'm Tanjilul Anwar</div>

      <div className="main">
        <div className="main-item gingham-green">
          <div className="child-item">
            <table className="table-green">
              <tr>
                <td>
                  <div className="round-item gingham-green"></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-item gingham-red">
          <div className="child-item"></div>
        </div>
      </div>
      <div className="main">
        <div className="main-item gingham-orange">
          <div className="child-item"></div>
        </div>
      </div>
      <div className="main">
        <div className="main-item gingham-purple">
          <div className="child-item"></div>
        </div>
      </div>
      <div className="main">
        <div className="main-item gingham-blue">
          <div className="child-item"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
