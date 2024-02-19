/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1140px',
            },
        },
        colors: {
            'dark': '#0B0D17',
            'light': '#D0D6F9',
            'white': '#FFFFFF',
            'transparent': 'transparent'
        },
        extend: {
            backgroundColor: {
                'custom': '#0B0D17',
            },
            backgroundImage: {
                homeDesktop: 'url(/background-home-desktop.jpg)',
                homeMobile: 'url(/background-home-mobile.jpg)',
                homeTablet: 'url(/background-home-tablet.jpg)',
                crewDesktop: 'url(/crew/background-crew-desktop.jpg)',
                crewMobile: 'url(/crew/background-crew-mobile.jpg)',
                crewTablet: 'url(/crew/background-crew-tablet.jpg)',
                destinationDesktop: 'url(/destination/background-destination-desktop.jpg)',
                destinationMobile: 'url(/destination/background-destination-mobile.jpg)',
                destinationTablet: 'url(/destination/background-destination-tablet.jpg)',
                technologyDesktop: 'url(/technology/background-technology-desktop.jpg)',
                technologyMobile: 'url(/technology/background-technology-mobile.jpg)',
                technologyTablet: 'url(/technology/background-technology-tablet.jpg)',
            },
            fontFamily: {
                'Barlow': ['Barlow', 'sans-serif'],
                'BarlowCondensed': ['Barlow Condensed', 'sans-serif'],
                'Bellefair': ['Bellefair', 'serif'],
            },
            keyframes: {
                appearanceIn: {
                    '0%': { opacity: '0', transfrom: 'scale(0.5)' },
                    '100%': { opacity: '1', transfrom: 'scale(1)' },
                }
            },
            animation: {
                appearanceIn: 'appearanceIn 1s ease-in-out normal both',
            }
        },
    },
    darkMode: "class",
    plugins: [nextui()]
}
