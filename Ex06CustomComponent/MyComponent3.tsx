import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

type Props = {
    title:string,
    aaa: ()=>void //함수의 타입[파라미터 X 리턴 X]
}

class MyComponent3 extends Component<Props>{

    render(): JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title}></Button>
            </View>
        )
    }
}

export default MyComponent3