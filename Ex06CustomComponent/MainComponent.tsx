import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import MyComponent3 from './MyComponent3'
import MyComponent4 from './MyComponent4'
import MyComponent5 from './MyComponent5'
import ComponentA from './ComponentA'
import ComponentB from './ComponenB'

export default class MainComponent extends Component {

    render(): React.JSX.Element {

        return (
            //1. 나만의 Component 만들어서 사용해보기
            // <View style={ style.root }>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent 사용 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            //이런 식으로 Header, Body, Nav 등을 영역별로 나눌 수있음.
            // <View style={style.root}>
            //     <Text>Hello RN</Text>

            //     {/* MyComponent 사용 */}
            //     <MyComponent2 name="sam"></MyComponent2>
            //     <MyComponent2 name="peter"></MyComponent2>
            // </View>

            //3.별도의 .tsx 파일에 나만의 컴포넌트를 만들고 사용해보기
        //     <View style={style.root}>
        //     <Text>Hello RN</Text>

        //     {/* MyComponent 사용 */}
        //     <MyComponent3 aaa={this.clickBtn} title="sam"></MyComponent3>
        //     <MyComponent3 aaa={this.clickBtn2} title="peter"></MyComponent3>
        //     <MyComponent4></MyComponent4>
        //     <MyComponent5 title='click me' color='indigo' onPress={()=>Alert.alert('clicked button')}></MyComponent5>
       
       
       
       
       
        // </View>

            //6. 컴포넌트간의 데이터 제어
            <View style={style.root}>
                <ComponentA msg={this.state.message}></ComponentA>
                <ComponentB onPress={this.changeMessage}></ComponentB>
            </View>

        )

    }
    //6번 실습에서 사용할 변수 
    state = {
        message : "Hello world"
    }

    changeMessage = ()=>{
        this.setState({message:"Nice to meet you"})
    }



    clickBtn = ()=>{
        Alert.alert('button click')
    }
    clickBtn2 = ()=>{
        Alert.alert('button2 click')
    }

}//MainComponent class..




//2. Custom Component에 값을 전달.
// MyComponent2의 속성(property) 값들의 타입을 지정.

type Props={
    name:string,
}


class MyComponent2 extends Component<Props>{
    render(): React.JSX.Element {
        return (
            <View style={{ margin: 16 }}>
                <Text style={{ marginBottom: 8, color: 'black' }}>Hello {this.props.name}</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}


//1. Custom Component 만들기 
class MyComponent extends Component {
    render(): React.JSX.Element {
        return (
            <View style={{ margin: 16 }}>
                <Text style={{ marginBottom: 8, color: 'black' }}>Hello sam</Text>
                <Button title='click me'></Button>
            </View>
        )
    }
}




const style = StyleSheet.create({
    root: { flex: 1 }
})