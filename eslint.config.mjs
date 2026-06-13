import { globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [...nextVitals, globalIgnores(["out/**", ".next/**", "next-env.d.ts"])];

export default eslintConfig;
