//리액트 라이브러리 사용
import React, { Component} from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native'


//리액트네이티브는 Component를 상속받은 클래스들이 화면에 보여질 수 있음.
class MyApp extends Component {
    //리엑트의 Component클래스가 화면에 보여줄 View를 그려내는 작업 메소드 
    //이 메소드 안에서 JSX(Java Script +XML) 언어로 뷰를 설계하고 return 해줌
    render() {

        let name = "SAM" // 지역변수
        let btnTitle = "Button"

        return (
            // <Text>Hello World</Text>
            // <Text>Nice to meet you</Text> 
            //Error - 컴보넌트는 1의 컴포넌트만 리턴 가능
            //뷰 그룹을 사용 (컴포넌트 그룹)
            //JSX는 xml안에서도 JS의 변수, 함수 사용이 가능
            <View style={style.root}>
                <Text style={style.title}>Hello {name}</Text>
                <Text style={style.text}>Nice to meet you</Text>
                <Text>Hello World</Text>
                <Text>Nice to meet you</Text>

                {/* Button컴포넌트는 style속성이 존재하지 않음. */}
                <View style={{ marginTop: 16 }}>
                    <Button title={btnTitle}></Button>
                </View>
                <Image source={require('./image/newyork.jpg')} style={style.img}>

                </Image>

            </View>
        )
    }//render method 

} //My App Class

//스타일 작업 객체들을 하나로 묶어서 관리하는 StyleSheet 객체 생성
const style = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: '#AAFFCC',
        padding:16,
    },
    titleText:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        margin: 16,
    },
    text:{
        margin:8,
        color:'black',

    },
    img:{
        flex:1,
        width:null,
        resizeMode:"stretch"
    }


})


//스타일객체 - 스타일 속성값은 CSS를 기반으로 제작되었음.
const textStyle = {
    color: 'red',
    fontSize: 20,
    fontWeight: "bold",
}

const rootStyle = {
    padding: 16,
    backgroundColor: '#AAFFCC',
    // height: '100%'
    // flexGrow:1 RN에서는 flexGrow속성을 그냥 flex로 사용함
    flex: 1
}

//중간에 있는 글씨 스타일
const plainTextStyle = {
    margin: 8,
    color: "black",
}

//버튼의 스타일 객체
const btnStyle = {
    margin: 80,
}


//MyApp클래스를 다른 .js에서 사용할수 있도록 내보내기
export default MyApp
