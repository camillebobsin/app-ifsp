import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import TelaInicial from '../views/TelaInicial'
import TelaKit from '../views/TelaKit'
import TelaCodigo from '../views/TelaCodigo'

const Tab = createBottomTabNavigator()

export default props => (
    <NavigationContainer independent={true}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    switch (route.name) {
                        case 'TelaInicial':
                            iconName = focused ? 'home-outline' : 'home-sharp'
                        break
                        case 'TelaKit':
                            iconName = focused ? 'home-outline' : 'home-sharp'
                        break
                        case 'TelaCodigo':
                            iconName = focused ? 'home-outline' : 'home-sharp'
                        break
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            screenOptions={{
                headerShown: false,
                activeTintColor: 'red',
                inactiveTintColor: 'blue',
                showLabel: true,
                // labelStyle: { fontSize: 30 }
            }} initialRouteName="TelaCodigo"> 
            <Tab.Screen name="TelaInicial" component={TelaInicial}/>
            <Tab.Screen name="TelaKit" component={TelaKit}/>
            <Tab.Screen name="TelaCodigo" component={TelaCodigo}/>
        </Tab.Navigator>
    </NavigationContainer>
)