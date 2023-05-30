import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'

export default class MainComponent extends Component {

    //화면갱신에 영향을 주는 아주 특별한 멤버변수
    state: React.ComponentState = {
        message: "",
        msg: "",
        text:"RESULT"
    }


    render(): JSX.Element {
        return (
            <View style={style.root}>
                {/* TextInput은 스타일이 없으면 아무것도 그리지 않아 존재가 안보임 */}
                <TextInput onChangeText={this.changeText} style={style.textInput}></TextInput>

                <Text style={style.text}>{this.state.message}</Text>

                {/* TextInput의 입력에 사용한 소프트키보드의 [완료]버튼을 눌렀을 때 글씨 보여주기 */}
                <TextInput onSubmitEditing={this.submitText} style={style.textInput}></TextInput>
                <Text style={style.text}>{this.state.msg}</Text>

                <TextInput multiline={true} onChangeText={this.aaa} style={style.textInput}></TextInput>
                <Button onPress={this.clickBtn} title="작성완료"></Button>
                <Text style={style.text}>{this.state.text}</Text>

            </View>

        )
    }
    
    //버튼 클릭 이벤트
    clickBtn = ()=> this.setState({text:this.inputValue})


    //textInput 글씨가 변경될 때 마다 반응하는 메소드
    inputValue:string=""

    aaa = (value:string)=>{
        //일반 변수에 저장
        this.inputValue= value

    }


    // 소프트키보드의 완료버튼을 선택했을때 반응하기
    submitText = (event:any)=>{ //파라미터로 string이 아닌 이벤트객체가 전달됨.
        let value = event.nativeEvent.text
        this.setState({msg:value})
    }

    //글씨변경때 마다 반응하는 콜백메소드 - 파라미터로 써있는 글씨가 전달됨.
    changeText = (value : string)=>{
        //텍스트컴포넌트가 보여주는 state 변수값을 변경
        this.setState({message:value})
    }

}

const style = StyleSheet.create({
    root: {
        flex: 1,
        padding: 16
    },
    textInput: {
        borderWidth: 2,
        bordercolor: 'green',
        borderRadius: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    text: {
        marginTop: 16,
        fontWeight: 'bold',
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
    }
})