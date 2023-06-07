import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native'

export default function Main():JSX.Element{

    const [message, setMessage]= useState<string>('message......')

    const fetchData= ()=>{
        console.log('fetch start...')

        //1. JavaScript의 네트워크 작업 객체 : XMLHttpRequest
        //const xhr= new XMLHttpRequest()
        //서버의 응답결과를 받을때 반응하는 콜백메소드를 등록
        // xhr.onreadystatechange= ()=>{
        //     // 서버의 응답을 여러개 올 수 있음.
        //     if( xhr.readyState==4 && xhr.status==200 ){
        //         Alert.alert('응답완료')
        //         setMessage( xhr.responseText )
        //     }
        // }

        // xhr.open('GET','http://mrhi2023.dothome.co.kr/index.html',true)
        // xhr.send()

        //2. fetch()함수 - JS에 기본 내장된 네트워크 통신 라이브러리
        // promiss .then()메소드
        //fetch('http://mrhi2023.dothome.co.kr/index.js').then((response:Response)=>Alert.alert(response.status.toString())) //결과 :200 - OK

        fetch('http://mrhi2023.dothome.co.kr/index.js')
            .then((response:Response)=>{
                //응답객체에게 응답결과를 글씨로 바꿔달라고 요청
                
            })
        

    }

    return (
        <View style={style.root}>
            <Button title='fetch data from network' onPress={()=>fetchData()}></Button>
            <ScrollView style={style.container}>
                <Text style={style.text}> {message} </Text>
            </ScrollView>
        </View>
    )
}

const style= StyleSheet.create({
    root:{flex:1, padding:16,},
    container:{marginTop:16},
    text:{ padding:8, color:'black'},
})