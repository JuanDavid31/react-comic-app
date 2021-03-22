import { Switch, Route } from "react-router-dom";
import './App.css';
import ComicsPage from "./components/ComicsPage";
import ComicDetailPage from "./components/ComicDetailPage";

function App() {
  return (
      <Switch>
        <Route path='/' exact={true}>
          <ComicsPage />
        </Route>
        <Route path='/:id'>
            <ComicDetailPage />
        </Route>
      </Switch>
  );
}

export default App;
