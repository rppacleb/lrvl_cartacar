import React from 'react';
import ReactDOM from 'react-dom';
import { Core as RootCore } from './Core';
import { Core as AuthCore } from './components/auth/Core';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import '../../css/global.css'
import '../../css/scrollbar.css'

const pageTheme = createMuiTheme({
	palette: {
        background: {
            default: '#e9ebee'
        },
		primary: {
			light: '#e9ebee',
			main: '#8a82d8',
		},
		secondary: {
			light: '#ffffff',
			main: '#e3e1f8',
			dark: '#f2f5fa'
		},
		error: {
			main: '#DA4B1B',
		},
		warning: {
			main: '#DA4B1B',
		},
		info: {
			light: '#0a2d33',
			main: '#15616D',
		},
		success: {
			main: '#4caf50',
		},
	},
    typography: {
		fontFamily: [
		  '-apple-system',
		  '"Nunito"',
		].join(','),
	},
})

if (document.getElementById('root')) {
	ReactDOM.render(<ThemeProvider theme={pageTheme}><CssBaseline /><RootCore /></ThemeProvider>, document.getElementById('uroot'));
} else {
	ReactDOM.render(<ThemeProvider theme={pageTheme}><CssBaseline /><AuthCore /></ThemeProvider>, document.getElementById('auth'));
}
