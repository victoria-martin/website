import { Switch as SwitchMaterial, withStyles } from "@material-ui/core";
import colors from "../helpers/colors.json";

export const Switch = withStyles({
  switchBase: {
    color: "#ff0000",
    color: colors.orange,
    opacity: "0.9",
    "&$checked": { color: colors.orange },
    "&$checked + $track": { backgroundColor: colors.orange },
  },
  checked: {},
  track: {},
})(SwitchMaterial);

// export default Switch;
