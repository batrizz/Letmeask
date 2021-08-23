import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AdminRoom } from './pages/AdminRoom';
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from './pages/Room';

import { AuthContextProvider } from './contexts/AuthContexts';

function App() {
  return (
    // hooks do react-router-dom (relação ao navegador e HTML);
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        <Route path="/admin/rooms/:id" component={AdminRoom} /> 
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;