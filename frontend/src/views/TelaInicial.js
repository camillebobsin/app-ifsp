import React, { useEffect } from 'react'
import Estilo from '../components/estilo'
import { View, Text, Pressable, Alert } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

const mainStack = () => {
    const navigation = useNavigation()
    const route = useRoute()

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

    useEffect(() => {
        const nome = route.params.aluno.nome
        Alert.alert(
            "Login realizado",
            `Nome: ${nome}`
          );
    }, [])

    return (
        <View style={Estilo.container}>
            <View style={[Estilo.box, Estilo.logo]}>
                <Text style={[styles.mke]}>MKE</Text>
            </View>
            <Pressable style={[Estilo.box, Estilo.boxSquareA]} title='kit 1' onPress = {() => navigation.navigate('TelaKit')}>
                <Text style={styles.txt}>kit 1</Text>
            </Pressable>
            <Pressable style={[Estilo.box, Estilo.boxSquareV]} title='kit 2' onPress = {() => navigation.navigate('TelaKit')}>
                <Text style={styles.txt}>kit 2</Text>
            </Pressable>
            <Text style={styles.texto}>escolha um kit</Text>
            <View style={[Estilo.box, Estilo.devolucao]}>
                <Text style={[styles.devolucao]}>devolução</Text>
            </View>
            <Pressable style={[Estilo.box, Estilo.problema]} title='problema' onPress = {sendMail}>
                <Text style={[styles.problema]}>relatar problema</Text>
            </Pressable>
        </View>
    )
}

export default mainStack


EStyleSheet.build({
    $corPreto: '#000000',
})

const styles = EStyleSheet.create({
    texto: {
        textAlign: "center",
        color: '$corPreto',
        top: '10.313rem',
        fontSize: 36,
        fontWeight: "normal",
        lineHeight: '2.688rem'
    }, 
    txt: {
        color: '#000000', 
        fontSize: 36, 
        fontWeight: "normal",
        lineHeight: 43
    },
    mke: {
        textAlign: "center",
        color: '$corPreto',
        lineHeight: 43,
        fontSize: 36
    },
    devolucao: {
        fontSize: 18,
        lineHeight: 21
    },
    problema: {
        fontSize: 15,
        lineHeight: 15
    }
})
