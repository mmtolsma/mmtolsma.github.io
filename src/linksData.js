import { readable } from 'svelte/store';

export const navLinks = readable([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'CV', url: '/cv' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Contact', url: '/contact' }
]);