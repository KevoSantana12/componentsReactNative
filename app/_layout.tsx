
import { View, Text } from 'react-native'
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { Slot, Stack } from 'expo-router';
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native';
import React, { useEffect } from 'react'
import { useThemeColor } from 'hooks/useThemeColor';
import { useColorScheme } from 'hooks/useColorScheme.web';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { allRoutes } from 'constants/Routes';
import '../global.css';


SplashScreen.preventAutoHideAsync();


const Index = () => {

    const backgroundColor = useThemeColor({}, 'background');
    const colorScheme = useColorScheme();


    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });


    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }


    return (

        <GestureHandlerRootView
            style={{ backgroundColor: backgroundColor, flex: 1 }}
        >
            <SafeAreaProvider>

                <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

                    {/* <ThemedView margin>

                        <ThemedText type='h1' className='mt-20'>
                            Hola Mundo
                        </ThemedText>
                    </ThemedView> */}

                    <Stack
                        screenOptions={{
                            headerShadowVisible: false,
                            contentStyle: {
                                backgroundColor: backgroundColor,
                            },
                            headerStyle: {
                                backgroundColor: backgroundColor,
                            },
                        }}
                    >
                        <Stack.Screen
                            name="index"
                            options={{
                                title: '',
                            }}
                        />

                        {allRoutes.map((route) => (
                            <Stack.Screen
                                key={route.name}
                                name={route.name}
                                options={{
                                    title: route.title,
                                }}
                            />
                        ))}
                    </Stack>

                    {/* <Slot>

                    </Slot> */}

                </ThemeProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>


    )
}

export default Index