import { createTheme } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Theme {
    COLORS: {
      BACKGROUND: string;
      PRIMARY_900: string;
      PRIMARY_800: string;
      PRIMARY_100: string;
      PRIMARY_50: string;
      SECONDARY_900: string;
      SECONDARY_500: string;
      SECONDARY_400: string;
      SUCCESS_900: string;
      SUCCESS_50: string;
      ALERT_900: string;
      ALERT_800: string;
      ALERT_50: string;
      SHAPE: string;
      TITLE: string;
      GRADIENT: string[];
    };

    FONTS: {
      TITLE: string;
      TEXT: string;
    },
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    COLORS?: {
      BACKGROUND?: string;
      PRIMARY_900?: string;
      PRIMARY_800?: string;
      PRIMARY_100?: string;
      PRIMARY_50?: string;
      SECONDARY_900?: string;
      SECONDARY_500?: string;
      SECONDARY_400?: string;
      SUCCESS_900?: string;
      SUCCESS_50?: string;
      ALERT_900?: string;
      ALERT_800?: string;
      ALERT_50?: string;
      SHAPE?: string;
      TITLE?: string;
      GRADIENT?: string[];
    };

    FONTS?: {
      TITLE?: string;
      TEXT?: string;
    },
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F7F7'
    }
  },
  COLORS: {
    BACKGROUND: '#F7F7F7',

    PRIMARY_900: '#B83341',
    PRIMARY_800: '#E03F50',
    PRIMARY_100: '#D16470',
    PRIMARY_50: '#FFABB3',

    SECONDARY_900: '#572D31',
    SECONDARY_500: '#7A6769',
    SECONDARY_400: '#93797B',

    SUCCESS_900: '#528F33',
    SUCCESS_50: '#F7FFF9',

    ALERT_900: '#B27F00',
    ALERT_800: '#C5941A',
    ALERT_50: '#F3EFE5',

    SHAPE: '#DCDCDC',
    TITLE: '#FFF',

    GRADIENT: ['#B83341', '#E03F50'],
  },

  FONTS: {
    TITLE: 'DMSerifDisplay_500Regular',
    TEXT: 'DMSans_500Regular',
  },
});

export default theme;

