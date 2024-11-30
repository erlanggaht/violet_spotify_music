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
			baseviolet: 'var(--baseviolet)',
			darkslategrey: 'var(--darklategrey)',
			whitegrey: 'var(--whitegrey)',
			erieblack: 'var(--erieblack)',
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
			dot: '50%',
			card: '20px'
  		},
		fontSize: {
			sm: '16px',
			xs: '13px',
			"2xl": '26px'
		},
		backgroundImage: {
			'search-icon': "url('/icon/search.svg')",
			'pause-icon': "url('/icon/pause.svg')",
			'gitar': "url('https://s3-alpha-sig.figma.com/img/414a/2ca1/b266e38e0cb73e39b2cb3d97fe7af317?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YO0O16f6WZjFW61cGwP89JfC83qBu6SgUXBBdB-XTYe19YcG95hDOKTuZdYjg61fL7EsvzP3XNeYlHVzwIqykkjtRIqgWl5DlPgg19-KBCv90BnNa4lAV6F2-cJW37bjy6Fmrir5SvmsMeooEjjtPTwfagR9g6-itRh3rm0cjSzepDRYCFAXpguq0A4YIOyP0v0JXB5OcHgx4n1pCFO8jY3Gd0-Hn-vUWKqMRKwYbUA4~ch0jT6tIUyLxeGCZqUGyTLJur7flkIQbfjxSk7f9mknvsRjr4100Q1Q6SG-HeZk1Z5VdB97jiU~hWVXuTIcg1pT44t90EPpr92ZbSylXw__')"
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
