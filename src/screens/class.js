import { DATA, dataStudents } from '.././helper/constant'
import { Text, View, SafeAreaView, FlatList, StyleSheet, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Appbar } from 'react-native-paper';
import * as React from 'react';

import { useNavigation } from '@react-navigation/native';

const AppBarComponent = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bottom}>
            <Appbar.Action
                icon="arrow-left"
                onPress={() => navigation.pop()}
            />
            <Text style={{ flex: 1, textAlign: 'center', alignSelf: 'center', fontWeight: 'bold', fontSize: 24 }}> Title</Text>

            <Appbar.Action
                icon="mail"
                onPress={() => Alert.alert('Icon pressed')}
            />
        </View>
    )
}

const Item = ({ title }) => (
    <View style={styles.container} >
        <Icon style={{ marginRight: 8, alignSelf: 'center', color: '#7274A1' }} name="bell" />
        <Text style={{ color: '#7274A1' }} >{title}</Text>
    </View>
);

const ItemStudent = ({ title, image, number }) => (
    <View style={styles.styleStudent} >
        <Image source={image} style={{ width: 40, height: 40 }} />
        <Text style={{ marginTop: 8, alignSelf: 'center', fontWeight: 'bold' }} >{title}</Text>
        <View style={{ position: "absolute", right: 5, top: 10, backgroundColor: '#83DB23', borderRadius: 14, width: 28, height: 28, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white' }}>{number}</Text>
        </View>


    </View>
);

function ClassScreen() {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const renderItemStudent = ({ item }) => {
        console.log('itemm', item)
        return (
            <ItemStudent title={item.title} image={item.image} number={item.number} />

        )
    }
    return (
        <SafeAreaView >
            <AppBarComponent />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={dataStudents}
                renderItem={renderItemStudent}
                keyExtractor={item => item.id}
            />
            <View style={styles.styleStudent} >
                <Image source={require('.././assets/ic_plus.png')} style={{ width: 40, height: 40 }} />
                <Text style={{ marginTop: 8, alignSelf: 'center', fontWeight: 'bold', color: '#06B2F8' }} >Lớp học</Text>
            </View>

            <View style={styles.styleGroup} >
                <Image source={require('.././assets/ic_plus.png')} style={{ width: 40, height: 40, alignSelf: 'center' }} />
                <Text style={{ marginTop: 8, alignSelf: 'center', fontWeight: 'bold', color: '#06B2F8' }} >Nhóm</Text>
            </View>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    bottom: {
        backgroundColor: '#F2F2F2',
        flexDirection: "row",
    },
    container: {
        marginTop: 20,
        marginHorizontal: 8,
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: '#D2D7EB',
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'center'
    },
    styleStudent: {
        marginTop: 16,
        marginHorizontal: 4,
        width: 80, height: 80,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4,
        borderColor: '#D2D7EB',
        flexDirection: "column",
        borderWidth: 1,
    },
    styleGroup: {
        marginTop: 16,
        marginHorizontal: 4,
        width: 160, height: 80,
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 4,
        borderColor: '#D2D7EB',
        flexDirection: "column",
        borderWidth: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    nameScreen: {
        fontSize: 32,
        fontWeight: 'Bold'
    }
});

export default ClassScreen;