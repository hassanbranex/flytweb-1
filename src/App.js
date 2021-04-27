import "./App.scss";
import { Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col md="12">
            <h1>
              Hello <span>World</span>
            </h1>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;
