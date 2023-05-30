import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

type Props = {
    onPress: ()=>void
}

export default class ComponentB extends Component<Props>{
    render(): React.JSX.Element {
        return(
            <View style={{margin:8}}>
                <Button title='Change Message' onPress={this.props.onPress}></Button>
            </View>
        )
    }
}