/**

=========================================================
** Fonts Functions
=========================================================

**/

import { Inter as createInter } from "@next/font/google";
import { Jost as createJost } from "@next/font/google";

export const Jost = createJost({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});
