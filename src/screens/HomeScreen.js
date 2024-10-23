import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.banner}>
                <Text>Banner Placeholder</Text>
            </View>

            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProductList')}>
                    <Text>🪑</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProductList')}>
                    <Text>📚</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProductList')}>
                    <Text>🪑</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ProductList')}>
                    <Text>🗄️</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.collectionContainer}>
                <View style={styles.collection}>
                    <Text>Colección a</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductList')}>
                        <Text style={styles.buttonText}>Ver Más</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.collection}>
                    <Text>Colección b</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProductList')}>
                        <Text style={styles.buttonText}>Ver Más</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#8fa6b2',
    },
    menuIcon: {
        fontSize: 30,
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    banner: {
        height: 200,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    icon: {
        width: 60,
        height: 60,
        backgroundColor: '#c0d6df',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    collectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    collection: {
        width: '45%',
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4a90e2',
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
    },
});
