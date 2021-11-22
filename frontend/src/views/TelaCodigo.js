import React from 'react'
import Estilo from '../components/estilo'
import { View, Text, Pressable } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

var aleatorio = Math.floor(Math.random() * 90000) + 10000;

const codigo = () => {
    const navigation = useNavigation()

    function sendMail() {
        try {
            MailComposer.composeAsync({
                subject: 'Suporte Vending Machine',
                recipients: ['camillebobsin.cb@gmail.com'],
                body: " "
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={Estilo.container}>
            <View style={[Estilo.box, Estilo.codigo]}>
                <Text style={[styles.texto, styles.txt]}>código</Text>
            </View>
            <Pressable style={[Estilo.box, Estilo.back]} title='back' onPress = {() => navigation.navigate('TelaKit')}>
                <Text style={styles.back}>↺</Text>
            </Pressable>
            <Text style={[styles.texto, styles.txtKit]}>Kit</Text>
            <View style={[Estilo.boxCod]}>
                <Text style={[styles.texto, styles.txt]}>{`${aleatorio}`}</Text>
            </View>
            <Text style={[styles.texto]}>inserir o código na máquina para pegar o kit</Text>
            <View style={[Estilo.box, Estilo.ativar]}>
                <Text style={[styles.texto, styles.ativar]}>ativar o código</Text>
            </View>
            <Pressable style={[Estilo.box, Estilo.problema]} title='problema' onPress = {sendMail}>
                <Text style={[styles.texto, styles.problema]}>relatar problema</Text>
            </Pressable>
        </View>
    )
}

export default codigo


EStyleSheet.build({
    $corPreto: '#000000',
})

const styles = EStyleSheet.create({
    texto: {
        textAlign: "center",
        color: '$corPreto',
        fontWeight: "normal",
        lineHeight: 43,
        fontSize: 16
    },
    txtKit: {
        top: '3.125rem',
        fontSize: 36
    },
    txt: {
        fontSize: 36
    },
    problema: {
        fontSize: 15,
        lineHeight: 15
    },
    ativar: {
        fontSize: 18,
        lineHeight: 21
    },
    back: {
        fontSize: 19,
        lineHeight: 21
    }
})