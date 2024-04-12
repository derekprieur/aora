import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        // <>
        //     <Text>Header</Text>
        //     <Slot />
        //     <Text>Footer</Text>
        // </>
        <Stack>
            <Stack.Screen
                name='index'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}

export default RootLayout
