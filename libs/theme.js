import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const style = {
    global: props => ({
        body: {
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const component = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4,
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset: 3,
        })
    }
}

const font = {
    heading: "'M PLUS Rounded 1c'",
}

const color = {
    glassTeal: '#88ccca',
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: 'true'
}

const theme = extendTheme({
    config,
    style,
    component,
    color,
    font,
})

export default theme;

