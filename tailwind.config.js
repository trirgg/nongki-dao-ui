/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warna utama seperti wagmi.bio
        background: '#0F0F13', // Warna latar belakang gelap
        foreground: '#FFFFFF',
        primary: {
          DEFAULT: '#00FFAA', // Warna aksen utama (neon green)
          hover: '#00E69A',
          dark: '#00CC88',
        },
        secondary: {
          DEFAULT: '#FF3864', // Warna aksen kedua (pink)
          hover: '#FF1F54',
        },
        accent: {
          blue: '#2D7DFF', // Aksen biru
          purple: '#7B61FF', // Aksen ungu
          yellow: '#FFD600', // Aksen kuning
        },
        dark: {
          DEFAULT: '#0F0F13', // Warna latar belakang utama
          light: '#1A1A23', // Warna latar belakang card
          medium: '#25252F', // Warna latar belakang input
          border: '#2D2D3D', // Warna border
        },
        light: {
          DEFAULT: '#FFFFFF',
          muted: '#EBEBF0', // Warna teks sekunder
          gray: '#9999A5', // Warna teks tersier
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00FFAA, #2D7DFF)',
        'gradient-secondary': 'linear-gradient(to right, #FF3864, #7B61FF)',
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 255, 170, 0.5), 0 0 20px rgba(0, 255, 170, 0.3)',
        'neon-pink':
          '0 0 10px rgba(255, 56, 100, 0.5), 0 0 20px rgba(255, 56, 100, 0.3)',
      },
    },
  },
  plugins: [],
}
