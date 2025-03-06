import { useMediaQuery, useTheme } from "@mui/material";

/**
 * A hook to check if the current screen size is within certain breakpoints.
 *
 * The return value is an object with boolean values indicating whether the
 * current screen size is within each of the Material-UI breakpoints.
 *
 * @returns {Object}
 * @property {boolean} xl - Whether the screen size is extra large or smaller.
 * @property {boolean} lg - Whether the screen size is large or smaller.
 * @property {boolean} md - Whether the screen size is medium or smaller.
 * @property {boolean} sm - Whether the screen size is small or smaller.
 * @property {boolean} xs - Whether the screen size is extra small or smaller.
 */
export default function useBreakPoints() {
	const theme = useTheme();

	const xl = useMediaQuery(theme.breakpoints.down("xl"));
	const lg = useMediaQuery(theme.breakpoints.down("lg"));
	const md = useMediaQuery(theme.breakpoints.down("md"));
	const sm = useMediaQuery(theme.breakpoints.down("sm"));
	const xs = useMediaQuery(theme.breakpoints.down("xs"));

	return {
		xl,
		lg,
		md,
		sm,
		xs,
	};
}
