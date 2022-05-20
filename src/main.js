import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ClassScreen from './screens/class';
import StoryScreen from './screens/story';
import MessageScreen from './screens/message';
import NotificationScreen from './screens/notification';
import CameraScreen from './screens/camera';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarActiveTintColor: '#06B2F8',
            }}
        >
            <Tab.Screen
                name="Class"
                component={ClassScreen}
                options={{
                    tabBarLabel: 'Lớp học',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="group" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Story"
                component={StoryScreen}
                options={{
                    tabBarLabel: 'Câu chuyện',
                    tabStyle: {
                        paddingTop: 10,
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="folder" color={color} size={size} />
                    ),
                    headerShown: false
                }}

            />
            <Tab.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    tabBarLabel: '',
                    showLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ borderRadius: 30, width: 60, height: 60, padding: 8, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                            <Icon name="camera" color={color} size={size} />
                        </View>
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    tabBarLabel: 'Tin nhắn',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comments" color={color} size={size} />
                    ),
                    headerShown: false
                }}

            />
            <Tab.Screen
                name="Notification"
                component={NotificationScreen}
                options={{
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bell" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

export default MyTabs;
