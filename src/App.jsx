import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";

function App() {

  return <>
    <Layout currentPageName={"Home"}>
      <Home />
    </Layout>
  </>;
}

export default App;
