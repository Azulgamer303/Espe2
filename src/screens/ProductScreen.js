
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductScreen({ route }) {
    const { productName, productDescription } = route.params; // Desestructurar los parámetros recibidos

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{productName}</Text>
            <Text style={styles.description}>{productDescription}</Text>
            {/* Aquí puedes agregar más detalles o componentes relacionados con el producto */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#666',
    },
});