import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='font-pblack text-3xl'>Aora!</Text>
            <StatusBar style="auto" />
            <Link
                href='/home'
                style={{
                    color: 'blue',
                }}
            >Go to Home</Link>
        </View>
    );
}