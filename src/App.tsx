import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/rooms/new" component={NewRoom} exact />
          <Route path="/rooms/:id" component={Room} exact />
          <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
