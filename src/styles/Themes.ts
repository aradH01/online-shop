export type AppTheme = typeof light;
export type FontColor = keyof typeof light.font;


const light = {
    name: 'light',
    background: '#FCFCFC',
    components: {
        white: '#fff',
        black: '#000',
        background: '#FCFCFC',
        primary: '#184D47',
        lightPrimary: "#16625b",
        darkPrimary: "#1a3732",
        disabled: "#2120241F",
        linearButton: 'linear-gradient(108deg, #5DBDC5 -27.77%, #4AA4A7 125.06%)',
        glassLinear:"linear-gradient(132.12deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%)",
        grayMedium: '#6E6E73',
        superLightGray: '#F5F5F7',
        nonActive: '#92929D',
        lightGray: '#E2E2E4',
        tableBorder: '#B9B9B9',
    },
    font: {
        white: '#FCFCFC',
        black: '#000',
        componentPrimary:"#184D47",
        primary: '#1D1D1F',
        grayMedium: '#6E6E73',
        grayLight: '#E2E2E4',
        currentColor: 'currentColor',
        nonActive: '#92929D',
        button: '#fff',
        warning: '#ff9933',
        success: '#17A561',
        danger: '#FF5A26',
        darkDanger: '#661b00',
    },
};

const dark: AppTheme = {
    name: 'dark',
    background: '#FCFCFC',
    components: {
        white: '#fff',
        black: '#000',
        background: '#FCFCFC',
        primary: '#184D47',
        lightPrimary: "#16625b",
        darkPrimary: "#1a3732",
        linearButton: 'linear-gradient(108deg, #5DBDC5 -27.77%, #4AA4A7 125.06%)',
        glassLinear:"linear-gradient(132.12deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.15) 100%)",
        disabled: "#2120241F",
        grayMedium: '#6E6E73',
        superLightGray: '#F5F5F7',
        nonActive: '#92929D',
        lightGray: '#E2E2E4',
        tableBorder: '#B9B9B9',

    },
    font: {
        white: '#FCFCFC',
        black: '#000',
        componentPrimary:"#184D47",
        primary: '#1D1D1F',
        grayMedium: '#6E6E73',
        grayLight: '#E2E2E4',
        currentColor: 'currentColor',
        nonActive: '#92929D',
        button: '#fff',
        warning: '#ff9933',
        success: '#17A561',
        danger: '#FF5A26',
        darkDanger: '#661b00',
    },
};

export const FontColorKeys = Object.keys(light.font);
export const Themes: Record<string, AppTheme> = {light, dark};
