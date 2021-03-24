import { Switch, Route } from "react-router-dom";
import './App.css';
import ComicsPage from "./components/comics_page/ComicsPage";
import ComicDetailPage from "./components/comic_detail_page/ComicDetailPage";

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
