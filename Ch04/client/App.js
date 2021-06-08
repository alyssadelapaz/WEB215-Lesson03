// This file houses all the custom views that have been developed for the application and needs to be given the theme values and routing features (Page 107)
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'
import { hot } from 'react-hot-loader'

const App = () => {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])
    return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <MainRouter/>
        </ThemeProvider>
    </BrowserRouter>
)}

// Making the App component hot enables live reloading of React components during development (Page 108)
export default hot(module)(App)