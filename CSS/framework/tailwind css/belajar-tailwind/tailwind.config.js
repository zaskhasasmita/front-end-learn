/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode : 'class',
        theme: {
            extend: {
                spacing: {
                    '13': '3.25rem',
                    '15': '3.75rem',
                    '128': '32rem',
                    '144': '36rem',
                },
                fontFamily: {
                    inter : ['Inter'],
                },
                colors : {
                    jek : '#bada55',
                    kopi : '#c0ffee',
                },
                animation : {
                    'spin-lambad' : 'spin 3s linear infinite',
                    goyangdombret : 'goyang 0.3s ease-in-out infinite'
                },
                keyframes : {
                    'goyang' : {
                        '0%, 100%' : { transform : 'rotate(-3deg)' }   ,
                        '50%' : { transform : 'rotate(3deg)' } ,
                    }
                }
            }
        },
  plugins: [],
}

