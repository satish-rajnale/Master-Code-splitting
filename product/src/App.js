import logo from './logo.svg';
import './App.css';
// import DefComponent from './MyComponents';
import loadable from "@loadable/component"
import Header from "home/Header"


const DefComponent = loadable(()=> import("./MyComponents"))
const Layout = loadable(()=> import("./MyComponents"), {
  resolveComponent: components => components.Layout
})
const Cart = loadable(()=> import("./MyComponents"), {
  resolveComponent: (components, props) => components[`Cart${props.locationwiseComp}`]
})

function App() {
  return (
    <div className="App">
      <Header/>
     <div>Product App</div>
     <DefComponent/>
     <Layout/>
     <Cart locationwiseComp="Local"/>
    </div>
  );
}

export default App;
