import React from 'react';
import { Image } from 'react-native';

interface TabIconProps {
    focused: boolean;
    iconUrl: string;
    size?: number;
    activeColor?: string;
    inactiveColor?: string;
}

export default function TabIcon({
    focused,
    iconUrl,
    size = 24,
    activeColor = '#ffff',
    inactiveColor = '#a3a3a3'
}: TabIconProps) {
    return <Image className=''
    source={{ uri: iconUrl }}
    style={{
        width: size,
        height: size,
        tintColor: focused ? activeColor : inactiveColor
    }}
/>

}
