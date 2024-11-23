import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			darkslategrey: 'var(--darklategrey)',
			whitegrey: 'var(--whitegrey)',
			erieblack: 'var(--erieblack)'
  		},
  		width: {
  			header_left: '340px',
			header_right: '340px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			search: '36px',
			dot: '50%'
  		},
		fontSize: {
			sm: '16px',
			xs: '12px'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
