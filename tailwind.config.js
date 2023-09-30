/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{tsx, ts, css, scss, html}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        container: {
            center: true,
        }
    },
    plugins: [
        function ({addComponents}) {
            addComponents({
                '.container': {
                    center: true,
                    maxWidth: '900px',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '900px',
                    },
                    '@screen xl': {
                        maxWidth: '900px',
                    },
                }
            })
        }
    ]
}

