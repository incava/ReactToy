import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native"

export default class MainComponent extends Component {
    render(): JSX.Element {

        //리스트 형태의 레이아웃 만들어보기
        // 1) 실습에서 사용할 const 변수 : JSX컴포넌트 객체를 변수에 저장.

        const aaa: JSX.Element = <Text>Nice</Text>

        //2) 실습 - 변수 하나에 여러개의 컴포넌트 저장하기 위해 큰 뷰그룹 사용
        const bbb: JSX.Element = <View style={{ marginTop: 8 }}>
            <Text>Hello React Native</Text>
            <Button title='button'></Button>
        </View>


        let name = "Hello"

        //5) 실습 - 배열의 요소로 JSX 컴포넌트를 저장
        const arr: JSX.Element[] = [aaa, bbb, bbb]

        const datas: string[] = ["aaa", "bbb", "ccc","aaa", "bbb", "ccc","aaa", "bbb", "ccc","aaa", "bbb", "ccc"]

        return (
            <View style={style.root}>
                <Text style={style.title}>ListLayout {name}</Text>
               {/* {aaa} */}
                {this.showItemView()}
                {this.showItemView2('sam', 'song', "indigo")}

                {/* 5. 배열변수에 JSX컴포넌트들을 요소로 넣어 사용하기 */}
                {/* {arr} */}

                {/* 키속성이 필수로 요구됨. */}
                {datas.map(function (value: string, index: number, array: string[]) {
                    return (
                            <View key={index} style={style.itemView}>
                                <Text>{value}</Text>
                            </View>
                        )
                    })
                }

                {/* 배열의 .map()를 이용했을때의 단점 */}
                {/* key 속성을 개별적으로 지정해야 하는 것 */}
                {/* 개수가 많으면 자동 스크롤이 되지 않음. */}
                {/* 가로 스크롤 또는 스크롤바 제어등 리스트뷰에서의 기능이 없음. */}
                {/* RN에서는 리스트뷰용 컴포넌트를 별도로 제공. */}
            </View>
        )
    }

    showItemView2(name: string, btnTitle: string, btnColor: string): JSX.Element {
        return (
            <View style={{ marginTop: 16 }}>
                <Text> {name} </Text>
                <Button title={btnTitle} color={btnColor}></Button>
            </View>
        )
    }

    showItemView(): JSX.Element {
        return (
            <View style={{ marginTop: 16 }}>
                <Text> Nice world </Text>
                <Button title='press me'></Button>
            </View>
        )
    }


}

const style = StyleSheet.create({
    root: { flex: 1, padding: 16, },
    title: { fontSize: 24, fontWeight: 'bold', color: 'black' },
    itemView:{ 
        padding:16,
        margin:8,
        borderWidth:1,
        borderRadius:8,
     }
})