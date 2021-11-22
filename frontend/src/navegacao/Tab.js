import React from 'react'
import { Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaInicial from '../views/TelaInicial'
import TelaKit from '../views/TelaKit'
import TelaCodigo from '../views/TelaCodigo'
import TelaCadastro from '../views/TelaCadastro'
import TelaLogin from '../views/TelaLogin'

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {

                switch (route.name) {
                    case 'TelaInicial':
                        <Pressable>
                            <Ionicons name={"home-outline"} size={40} color={'#000000'} />
                        </Pressable>
                    break
                    case 'TelaKit':
                        <Pressable>
                            <Ionicons name={"home-outline"} size={40} color={'#000000'} />
                        </Pressable>
                    break
                    case 'TelaCodigo':
                        <Pressable>
                            <Ionicons name={"home-outline"} size={40} color={'#000000'} />
                        </Pressable>
                    break
                    case 'TelaCadastro':
                        <Pressable>
                            <Ionicons name={"home-outline"} size={40} color={'#000000'} />
                        </Pressable>
                    break
                    case 'TelaLogin':
                        <Pressable>
                            <Ionicons name={"home-outline"} size={40} color={'#000000'} />
                        </Pressable>
                    break
                }

                return <Ionicons name={name} size={size} color={color} />;
            },
        })}
        screenOptions={{
            headerShown: false,
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="TelaLogin"> 
        <Tab.Screen name="TelaLogin" component={TelaLogin} screenOptions={{headerShown: false}}/>
        <Tab.Screen name="TelaCadastro" component={TelaCadastro}/>
        <Tab.Screen name="TelaInicial" component={TelaInicial}/>
        <Tab.Screen name="TelaKit" component={TelaKit}/>
        <Tab.Screen name="TelaCodigo" component={TelaCodigo}/>
    </Tab.Navigator>
)