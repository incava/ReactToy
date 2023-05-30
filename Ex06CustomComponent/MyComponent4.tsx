import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

type Props = {
    title:string,
    aaa: ()=>void, //함수의 타입[파라미터 X 리턴 X]
    color : string
}

class MyComponent4 extends Component<Props>{

    //정적변수로 props가 전달되지 않을 때의 기본값 지정 가능.
    static defaultProps={
        title: 'untitled',
        color: 'black',
        aaa: ()=>{}
    }

    render(): JSX.Element {
        return(
            <View style={{margin:16}}>
                <Button onPress={this.props.aaa} title={this.props.title} color={this.props.color}></Button>
            </View>
        )
    }
}

export default MyComponent4