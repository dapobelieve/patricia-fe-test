import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="container-fluid mx-0 p-0">
      <div className="row gx-0 my-0 mx-0 me-0 p-0">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
