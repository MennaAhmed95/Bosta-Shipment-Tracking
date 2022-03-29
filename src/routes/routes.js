import { Switch, Route } from "react-router-dom";
import Home from "./../containers/Home/index";
import TrackingPage from "../containers/TrackingShipment";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/trackingShipment" exact component={TrackingPage} />
    </Switch>
  );
};

export default Routes;
