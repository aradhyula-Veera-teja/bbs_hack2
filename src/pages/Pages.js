import { Route, Switch } from "react-router-dom";
import Addmeetups from "./Addmeetups";
import Allmeetups from "./Allmeetups";
function Pages() {
  return (
    <section>
      <Switch>
        <Route path="/" exact>
          <Allmeetups />
        </Route>
        <Route path="/add-new-meetups">
          <Addmeetups />
        </Route>
      </Switch>
    </section>
  );
}
export default Pages;
