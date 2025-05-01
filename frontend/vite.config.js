import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react";

dotenv.config();
// eslint-disable-next-line no-undef
const { BACKEND_URL } = process.env;
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				// eslint-disable-next-line no-undef
				target: BACKEND_URL|| "http://localhost:5000",
			},
		},
	},
});
