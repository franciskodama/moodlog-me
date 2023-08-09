/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#fcd34d',
        'secondary': '#262626',

        // tertiary: "#DADCE0",
        // accent: "#DDF906",
        
        // red: "#ef4444",
        // orange: "#ef9943",
        // yellow: "#efe043",
        // green: "#43ef43",
        // cyan: "#43efef",
        // "blue ice": "#dbeafe",
        // blue: "#4343ef",
        // purple: "#9943ef",
        // fuschia: "#ef43ef",
        // rose: "#f986ac",
        // brown: "#8d4d0c",
        // champagne: "#e0ccb8",
        // white: "#f2f2f2",
        // gray: "#a6a6a6",
        // black: "#1a1a1a"
      },
      fontFamily: {
        // sans: ["var(--font-jost)", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: true,
  },
  plugins: [],
}
