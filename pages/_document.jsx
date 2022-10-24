import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'
import { ParallaxProvider } from 'react-scroll-parallax'

class MyDocument extends Document {
    render() {
        return (
            <ParallaxProvider>
            <Html>
                <Head/>
                <head>
                </head>
                <body>
                
                <NextScript/>
                </body>
            </Html>
            </ParallaxProvider>
        )
    }
}

export default MyDocument