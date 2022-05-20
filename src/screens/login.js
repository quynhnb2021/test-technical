import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert, Dimensions, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const WIDTH = Dimensions.get("screen").width;

function LoginScreen({ navigation }) {
    const [textInputName, onChangeText] = React.useState("demo");
    const [textInputPass, onChangeNumber] = React.useState("123456");

    const checkTextInput = () => {
        if (!textInputName.trim()) {
            alert('Please Enter Email or UserName');
            return;
        }
        if (!textInputPass.trim()) {
            alert('Please Enter Password');
            return;
        }
        navigation.navigate('Main')
    };
    return (
        <View style={styles.styleView}>
            <Text style={styles.titleText} >Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="Email or username"
                value={textInputName}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={textInputPass}
                placeholder="Password"
                secureTextEntry={true}
            />
            <TouchableHighlight style={{ ...styles.styleViewButton, backgroundColor: textInputName.trim() !== '' && textInputPass.trim() !== '' ? '#06B2F8' : "#D2D8EB" }} onPress={checkTextInput}>
                <Text>login</Text>
            </TouchableHighlight>

            <View style={{ marginTop: 20 }}>
                <Text style={{ color: '#06B2F8' }}> Forgot your password?</Text>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    styleView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80,
        paddingHorizontal: 20
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    forgotText: {
        color: 'red'
    },
    input: {
        height: 50,
        width: '100%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: '#D2D7EB'
    },
    styleViewButton: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '100%',
        backgroundColor: '#D2D8EB',
        marginHorizontal: 25,
        marginTop: 20

    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
    },
    inputStyle: {
        flex: 1,
    },
});

export default LoginScreen;
