import React from 'react'
import Estilo from '../components/estilo'
import { View, Text, Pressable, FlatList, SafeAreaView } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const componentes = [
    { id: '0', text: '• Componente 1' },
    { id: '1', text: '• Componente 2' },
    { id: '2', text: '• Componente 3' },
    { id: '3', text: '• Componente 4' },
    { id: '4', text: '• Componente 5' },
    { id: '5', text: '• Componente 6' },
    { id: '6', text: '• Componente 7' },
    { id: '7', text: '• Componente 8' }
];

const ListaComponentes = ({ text }) => (
    <View style={styles.list}>
        <Text style={styles.comp}>
            {text}
        </Text>
    </View>
)

const kit = () => {
    const navigation = useNavigation()
    return(
        <View style={Estilo.container}>
            <View style={[Estilo.box, Estilo.boxKitA]}>
                <Text style={[styles.texto, styles.txt]}>kit</Text>
            </View>
            <Pressable style={[Estilo.box, Estilo.back]} onPress = {() => navigation.navigate('TelaInicial')}>
                <Text style={styles.back}>↺</Text>
            </Pressable>
            <Pressable style={[Estilo.box, Estilo.gerar]} title='gerar' onPress = {() => navigation.navigate('TelaCodigo')}>
                <Text style={[styles.texto, styles.gerar]}>gerar código</Text>
            </Pressable>
            <Text style={[styles.texto, styles.txtKit]}>Kit</Text>
            {/* <SafeAreaView>
                <View style={styles.list}>
                    <FlatList
                        showsVerticalScrollIndicator={true}
                        data={componentes}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ListaComponentes {...item}/>}
                    />
                </View>
            </SafeAreaView> */}
            <View style={styles.list} >
                <FlatList
                    data={[
                    {key: '• Componente 1'},
                    {key: '• Componente 2'},
                    {key: '• Componente 3'},
                    {key: '• Componente 4'},
                    {key: '• Componente 5'},
                    {key: '• Componente 6'},
                    {key: '• Componente 7'},
                    {key: '• Componente 8'},
                    ]}
                    renderItem={({item}) => <Text style={[styles.item, styles.comp]}>{item.key}</Text>}
                />
            </View>
        </View>
    )
}

export default kit

EStyleSheet.build({
    $corPreto: '#000000',
})

const styles = EStyleSheet.create({
    texto: {
        textAlign: "center",
        color: '$corPreto',
        fontWeight: "normal",
        lineHeight: 43
    },
    txtKit: {
        top: '0.938rem',
        fontSize: 36
    }, 
    comp: {
        fontSize: 25,
        lineHeight: 30,
        justifyContent: 'space-between',
        fontWeight: "normal",
        padding: 5,
        height: '2rem'
    },
    txt: {
        fontSize: 36
    },
    list: {
        margin: 10,
        textAlign: "center",
        color: '$corPreto',
        // fontWeight: "normal",
        // lineHeight: 43,
        // height: '2rem',
        // padding: 5,
        marginTop: '12rem',
        marginBottom: '15rem',
        // marginLeft: '3.25rem'
        alignItems: "center",
        // justifyContent: "center"
    }, 
    gerar: {
        fontSize: 20,
        lineHeight: 21
    },
    back: {
        fontSize: 19,
        lineHeight: 21
    },
    fund: {
        backgroundColor: '#F1F0F0'
    }
})