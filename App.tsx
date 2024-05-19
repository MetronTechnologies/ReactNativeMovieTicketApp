import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNav from "./src/navigators/Tabs/TabNav.tsx";
import Details from "./src/screens/Details/Details.tsx";
import SeatBooking from "./src/screens/SeatBooking/SeatBooking.tsx";
import SplashScreen from 'react-native-splash-screen';


const stack = createNativeStackNavigator();
const App = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, []);
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <stack.Screen
                    name={'Tab'}
                    component={TabNav}
                    options={{
                        animation: 'default'
                    }}
                />
                <stack.Screen
                    name={'Details'}
                    component={Details}
                    options={{
                        animation: 'slide_from_right'
                    }}
                />
                <stack.Screen
                    name={'SeatBooking'}
                    component={SeatBooking}
                    options={{
                        animation: 'slide_from_bottom'
                    }}
                />
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default App;