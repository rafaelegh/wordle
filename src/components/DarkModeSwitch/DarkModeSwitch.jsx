import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch } from "@mui/material";
import { useStore } from "../../Context/Store";

function DarkModeSwitch() {
  const {setDark} = useStore();

  return (
    <div>
      <Switch onClick={() => setDark(prevDark => !prevDark)} />
    </div>
  );
}

export default DarkModeSwitch;
