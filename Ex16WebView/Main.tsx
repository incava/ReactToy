// ## WebView library

import React from 'react'
import {View} from 'react-native'
import WebView from 'react-native-webview'

export default function Main():JSX.Element{
    return (
        <View style={ {flex:1, padding:16} }>

            <WebView source={ {uri:'https://reactnative.dev'} } ></WebView>

        </View>
    )
}