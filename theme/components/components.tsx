import { Components, Theme } from "@mui/material";
import { Button } from "./Button/Button";
import { FormControl } from "./FormControl/FormControl";
import { FormHelperText } from "./FormHelperText/FormHelperText";
import { FormLabel } from "./FormLabel/FormLabel";
import { Input } from "./Input/Input";
import { InputLabel } from "./InputLabel/InputLabel";
import { Stack } from "./Stack/Stack";
import { TextField } from "./TextField/TextField";
import { Typography } from "./Typography/Typography";
import "./components.d";

export default function components(theme: Theme): Components {
	return {
		MuiButton: Button(theme),
		MuiTextField: TextField(theme),
		MuiFormControl: FormControl(theme),
		MuiInput: Input(theme),
		MuiInputLabel: InputLabel(theme),
		MuiFormLabel: FormLabel(theme),
		MuiStack: Stack(theme),
		MuiFormHelperText: FormHelperText(theme),
		MuiTypography: Typography(theme),
	};
}
