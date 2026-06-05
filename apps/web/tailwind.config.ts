import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cacao:  { 50:'#FAF4EF',100:'#F0E2D6',200:'#E0C8B4',300:'#C9A88C',400:'#A87E5E',500:'#855C3E',600:'#6B4A33',700:'#543A28',800:'#3E2C20',900:'#2A1E16' },
        rose:   { 50:'#FBF1F1',100:'#F6E1E2',200:'#ECC4C6',300:'#DFA1A4',400:'#CE8186',500:'#B96A70',600:'#A1545B',700:'#834349',800:'#65343A',900:'#48262A' },
        delft:  { 50:'#EEF2F8',100:'#D6E0EE',200:'#AEC2DC',300:'#7E9BC2',400:'#5277A6',500:'#345C8A',600:'#274C77',700:'#1F3A5C',800:'#182C45',900:'#111E2E' },
        willow: { 50:'#F3F5ED',100:'#E2E8D2',200:'#C7D1AC',300:'#A8B681',400:'#8B9A60',500:'#6F7E48',600:'#586638',700:'#44502C' },
        water:  { 100:'#E1E9EC',200:'#C5D2D9',300:'#9DB2BD',400:'#7E97A3',500:'#637C88',600:'#4E646F' },
        dune:   { 100:'#EDE3D2',200:'#E2D4BC',300:'#D9C5A3' },
        cream:  { DEFAULT:'#FAF6EF', deep:'#F4EDE1' },
        ink:    { DEFAULT:'#241C17', soft:'#3A2F27' },
        stone:  { 300:'#B8AC9D',500:'#8A7C6E',600:'#6E6256' },
        sand:   '#E8DCC8',
        oranje: { DEFAULT:'#E07B39', deep:'#C8632A' },
        // semantic
        bg:'var(--bg)', surface:'var(--surface)', border:'var(--border)',
        primary:'var(--primary)', accent:'var(--accent)', heritage:'var(--heritage)',
        success:'#586638', info:'#274C77', warning:'#C8842A', error:'#A8443F',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],   // Fraunces
        body: ['var(--font-body)', 'sans-serif'],    // Hanken Grotesk
      },
      borderRadius: { sm:'8px', md:'10px', lg:'16px', xl:'24px' },
      boxShadow: {
        soft:'0 1px 2px rgba(36,28,23,.04), 0 4px 16px rgba(36,28,23,.06)',
        lift:'0 4px 12px rgba(36,28,23,.08), 0 12px 32px rgba(36,28,23,.10)',
      },
      backgroundImage: {
        'hero-fade':'linear-gradient(180deg, rgba(36,28,23,0) 0%, rgba(36,28,23,.55) 100%)',
        'cream-grain':"url('/textures/linen-grain.png')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
