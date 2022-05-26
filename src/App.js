import React from 'react'
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing'
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager'
const colorGithub = '#010409'
const imageProfile =
    'https://i.pinimg.com/564x/c2/67/cc/c267cc49b73eda207728ee175b086b6a.jpg'
const colorFontGithub = '#C9D1D9'
const colorFontDark = '#4F565E'
const urlToMyGithub = 'https://github.com/miojo1'
const App = () => {
    const handlePressGoToGithub = async () =>{
    const res =  await  Linking.canOpenURL(urlToMyGithub)
    if(res){
     await  Linking.openURL(urlToMyGithub)
    }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle={'light-content'} />
            <View style={style.content} >
                <Image
                    accessibilityLabel='BuracoNegro'
                    style={style.avatar}
                    source={{ uri: imageProfile }}
                />
                <Text accessibilityLabel='Nome: Wendell RIbeiro'
                    style={[style.defaultText, style.name]}>
                    Wendell Ribeiro
                </Text>
                <Text accessibilityLabel='Nickname: Miojo1'
                    style={[style.defaultText, style.nickname]}>
                    Miojo1
                </Text>
                <Text accessibilityLabel='Descrição:Tentando ser um programador Instagram: @Miojo_bjj'
                    style={[style.defaultText, style.description]}>
                    Tentando ser um programador Instagram: @Miojo_bjj
                </Text>
                <Pressable onPress={handlePressGoToGithub} >
                    <View style={style.button}>

                        <Text style={[style.defaultText, style.textButton]} >
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export default App

const style = StyleSheet.create({
    container: { //Colunm
        backgroundColor: '#010409',
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center'
        //flexDirection:'row'
    },
    content: {
        alignItems: 'center',
        padding: 90

    },
    avatar: {
        height: 300,
        width: 300,
        borderRadius: 150,
        borderColor: 'white',
        borderWidth: 2,

    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    nickname: {
        fontSize: 18,
        color: colorFontDark,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorFontDark,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 15,
    },
})