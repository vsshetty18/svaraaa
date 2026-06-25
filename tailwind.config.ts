import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#07182D",
          50: "#0a2040",
          100: "#0d2850",
          200: "#1a3a6b",
          300: "#254d85",
          400: "#2e5fa0",
          500: "#3671bb",
          600: "#07182D",
          700: "#05121f",
          800: "#030c14",
          900: "#010609",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fdf8e7",
          100: "#faf0cc",
          200: "#f5e19a",
          300: "#efd267",
          400: "#e8c23a",
          500: "#D4AF37",
          600: "#a98b2c",
          700: "#7e6821",
          800: "#544516",
          900: "#29220b",
        },
        ivory: {
          DEFAULT: "#F8F5EE",
          50: "#fdfcfa",
          100: "#F8F5EE",
          200: "#f0ead8",
          300: "#e8dfc2",
          400: "#e0d4ac",
          500: "#d8c996",
        },
        accent: {
          DEFAULT: "#C8A97E",
          50: "#faf4eb",
          100: "#f4e8d4",
          200: "#ead1a9",
          300: "#dfba7e",
          400: "#d4a357",
          500: "#C8A97E",
          600: "#a08762",
          700: "#786547",
          800: "#50432f",
          900: "#282218",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #C8A97E 50%, #D4AF37 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #07182D 0%, #0a2040 50%, #07182D 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #07182D 0%, #0d2850 60%, #1a3a6b 100%)",
      },
      boxShadow: {
        luxury: "0 25px 50px -12px rgba(7, 24, 45, 0.4)",
        gold: "0 10px 30px -5px rgba(212, 175, 55, 0.3)",
        card: "0 4px 20px rgba(7, 24, 45, 0.08)",
        "card-hover": "0 20px 40px rgba(7, 24, 45, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
