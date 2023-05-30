import React, { Component } from 'react'
import { View, Image, StyleSheet, Touchable, TouchableHighlight, Alert, TouchableOpacity, TouchableNativeFeedback, Text, ScrollView, ImageBackground } from 'react-native'

export default class MainComponent extends Component {

    state: React.ComponentState = {
        img: require('./image/moana02.jpg'),
        img2: require('./image/moana03.jpg'),
        imgArr:[
            require('./image/moana01.jpg'),
            require('./image/moana02.jpg'),
            require('./image/moana03.jpg'),
            require('./image/moana04.jpg'),
            require('./image/moana05.jpg'),
            {uri : 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg'},
        ],
        imgNum : 0
    }

    render(): JSX.Element {
        return (
            //1. 그림이미지 source는 require()함수 이용 - 별도의 스타일이 없으면 원본사이즈
            // <View style={style.root}>
            //     <Image source={require('./image/moana01.jpg')}></Image>
            // </View>
            // 네트워크 이미지는 사이즈를 지정하지 않으면 보여주지 못함.
            // 스타일이 필수!
            // <View style={style.root}>
            //     <Image style={ {width:200,height:200} } source={{uri:"https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg"}}></Image>
            // </View>

            //버튼 클릭으로 이미지변경은 이미 해봤음. 그래서 이미지를 클릭했을 때 이미지 변경
            // RN은 클릭이 될 수 있는 뷰가 정해져 있음. [Button, Text, TouchableXXX]
            <View style={style.root}>
                {/* <TouchableHighlight onPress={this.clickImg} style={{ padding: 4, width: 208 }}>
                    <Image style={style.image} source={this.state.img}></Image>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.clickImg2} style={{ padding: 4, width: 208 }}>
                    <Image style={style.image} source={this.state.img2}></Image>
                </TouchableOpacity> */}

                {/* android 에서만 적용되는 Touchable */}
                {/* <TouchableNativeFeedback onPress={this.clickImg3}> */}
                    {/* 단, 뷰그룹을 가지고 있어야 효과가 보여짐 */}
                    {/* <View style={{width:310, height:200, backgroundColor:'lightblue', alignSelf:'center', justifyContent:'center', alignItems:'center', borderRadius:16}}> */}
                        {/* <Text style={{color:'white', fontWeight:'bold', marginBottom:16}}>MOANA</Text> */}
                        {/* <Image style={{width:300,height:150}} source={this.state.imgArr[this.state.imgNum]}></Image> */}
                    {/* </View> */}
                {/* </TouchableNativeFeedback> */}
                {/* 4. 이미지가 많으면 스크롤이 필요함. */}
                {/* <ScrollView style={style.root}>
                    <Image source={this.state.imgArr[0]} style={style.image}></Image>
                    <Image source={this.state.imgArr[0]} style={style.image}></Image>
                    <Image source={this.state.imgArr[0]} style={style.image}></Image>
                    <Image source={this.state.imgArr[0]} style={style.image}></Image>
                    <Image source={this.state.imgArr[0]} style={style.image}></Image>
                </ScrollView> */}

                {/* 5. 배경 이미지 */}
                <View style={{flex:1}}>
                    <ImageBackground source={this.state.imgArr[5]} style={{width:'100%',height:"100%"}}>
                        <Text style={{color:'white', fontWeight:'bold', fontSize:40,margin:16}}>Image BackGround</Text>
                    </ImageBackground>
                </View>


            </View>

            
        )
    }

    clickImg = () => {
        // Alert.alert('clicked')
        this.setState({ img: require('./image/moana05.jpg') })
    }
    clickImg2 = () => {
        // Alert.alert('clicked')
        this.setState({ img: require('./image/moana05.jpg') })
    }
    clickImg3 = () => {
        let num:number = this.state.imgNum
        num = (++num % 6)
        this.setState({imgNum:num})
    }


}

//스타일시트 객체
const style = StyleSheet.create({
    root: { flex: 1, },
    image: {
        width: 200,
        height: 200
    }
})