
import Piece from './Piece';

const apiUrl = "http://localhost:3001/pieces";

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            Admin
          </li>
        </ul>
      </nav>
      <Piece title={"Smiley"} year={2022} medium={"digital collage"} description={"A design"} />
    </>
  )
}

export default App
