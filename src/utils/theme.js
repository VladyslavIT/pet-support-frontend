const theme = Object.freeze({
  colors: {
    accent: '#F59256',
    brightAccent: '#FF6101',
    black: '#111111',
    white: '#FFFFFF',
    link: '#3091EB',
    dark: 'rgba(17, 17, 17, 0.6)',
    light: 'rgba(255, 255, 255, 0.6)',
    border: 'rgba(245, 146, 86, 0.5)',
    burgerBlack: '#212121',
    background: {
      primary: '#FDF7F2',
      card: '#D9D9D9',
      gradient: 'linear-gradient(90deg, #FF634E 0%, #FFDF48 105.44%)',
    },
    text: {
      primary: '#000000',
      secondary: '#111321',
      nav: '#181C27',
      placeholder: '#535353',
    },
  },
  filters: [
    'blur(2px)',
    'blur(10px)',
    'blur(50px)',
    'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))',
  ],
  shadows: [
    '7px 4px 14px rgba(49, 21, 4, 0.07)',
    '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    '0 9px 47px 11px rgba(51, 51, 51, 0.18)',
    '0px 4px 10px 4px #9e9e9e',
  ],
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  spacing: [4, 8, 10, 12, 16, 20, 24, 28, 32, 40, 64],
  shape: {
    borderRadius: { s: 8, m: 20, l: 40, xl: 50 },
    borderWidth: 2,
  },
  typography: {
    font: {
      primary: ['Manrope', 'sans-serif'],
      secondary: ['Poppins', 'sans-serif'],
    },
    size: {
      xxxs: '12px',
      xxs: '14px',
      xs: '16px',
      s: '18px',
      m: '20px',
      l: '24px',
      xl: '28px',
      xxl: '32px',
      xxxl: '68px',
      xxxxl: '48px',
      xxxxxl: '68px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
});

export default theme;
