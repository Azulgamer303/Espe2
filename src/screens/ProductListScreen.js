import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ProductListScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <ScrollView>
                {["Mesa", "Silla", "Mesa", "Silla"].map((product, index) => (
                    <View key={index} style={styles.productContainer}>
                        <Image
                            style={styles.productImage}
                            source={{ uri: 'https://via.placeholder.com/150' }}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>{product}</Text>
                            <Text style={styles.productDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    productContainer: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    productDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productDescription: {
        fontSize: 14,
        color: '#666',
    },
});
