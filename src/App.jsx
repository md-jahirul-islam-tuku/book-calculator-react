import "./App.css";
import Books from "./assets/Books/Books";
import Navbar from "./assets/Navbar/Navbar";
import Sidebar from "./assets/Sidebar/Sidebar";

const url=fetch('books.json')
.then(res=>res.json())

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="flex w-5/6 mx-auto">
        <div className="w-[70%] p-4">
          <Books url={url}></Books>
        </div>
        <div className="w-[30%] p-4">
          <Sidebar></Sidebar>
        </div>
      </main>
    </>
  );
}

export default App;
