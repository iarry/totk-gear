import GearList from "./gearlist";
import gear from "./data";
import { Load } from "./storage";

function App() {
  return <GearList gears={Load(gear)}></GearList>;
}

export default App;
