import { Instrument_Sans, Tajawal } from "next/font/google";

const instrument_Sans = Instrument_Sans({
	subsets: ["latin"],
});
const tajawal = Tajawal({
	subsets: ["arabic"],
	weight: ["500"],
});

export default instrument_Sans;

export { instrument_Sans, tajawal };
