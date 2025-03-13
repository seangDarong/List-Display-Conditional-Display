import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header"
import {JAVA_RESULTS,PYTHON_RESULTS,HTML_RESULTS,ENGLISH_RESULTS} from "./data.js"
import Scores from "./components/Scores.jsx"

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <main className="scores-container">
      <Scores courseName="Java" courseResult={JAVA_RESULTS}/>
      <Scores courseName="Python" courseResult={PYTHON_RESULTS}/>
      <Scores courseName="HTML" courseResult={HTML_RESULTS}/>
      <Scores courseName="English" courseResult={ENGLISH_RESULTS}/>
    </main>


      {/* <main className="scores-container">
        <div class="scores">
          <h1>Fake Course</h1>

          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First name 1 </td>
                <td>Last name 1 </td>
                <td>55</td>
              </tr>
              <tr>
                <td>First name 2 </td>
                <td>Last name 2 </td>
                <td>45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main> */}
    </>
  );
}

export default App;
