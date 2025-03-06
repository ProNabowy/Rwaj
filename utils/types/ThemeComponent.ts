import { Theme } from "@mui/material";

export type ThemeComponent<T> = (theme: Theme) => T;
