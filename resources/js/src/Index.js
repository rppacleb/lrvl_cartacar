import React from 'react';
import ReactDOM from 'react-dom';
import { Core as UCore } from './components/user/Core';
import { Core as ACore } from './components/admin/Core';
import { Core as AuthCore } from './components/auth/Core';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/global.css'
import './assets/css/scrollbar.css'

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

if (document.getElementById('aroot')) {
	ReactDOM.render(<ThemeProvider theme={pageTheme}><CssBaseline /><Router><ACore /></Router></ThemeProvider>, document.getElementById('aroot'));
} else if (document.getElementById('uroot')) {
	ReactDOM.render(<ThemeProvider theme={pageTheme}><CssBaseline /><Router><UCore /></Router></ThemeProvider>, document.getElementById('uroot'));
} else {
	ReactDOM.render(<ThemeProvider theme={pageTheme}><CssBaseline /><Router><AuthCore /></Router></ThemeProvider>, document.getElementById('auth'));
}
