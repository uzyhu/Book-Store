import Layout from "./layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Layout children={<Home />}></Layout> //1. children을 프롭스로 쓰는 방법
    // <Layout><Home /></Layout> //2.사이에 children 노드를 넣는 방법
  );
}

export default App;
