import { Fragment } from "react/jsx-runtime";

import Counter from "./components/Counter";
import Headers from "./components/Header";
import Auth from "./components/Auth";

function App() {
  return (
    <Fragment>
      <Headers />
      <Auth />
      <Counter />
    </Fragment>
  );
}

export default App;
