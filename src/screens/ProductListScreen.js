import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ProductListScreen({ navigation }) {
    const products = [
        { name: "Mesa", description: "Una mesa de madera sólida y elegante." },
        { name: "Silla", description: "Silla cómoda con soporte lumbar." },
        { name: "Escritorio", description: "Escritorio amplio para trabajar." },
        { name: "Lámpara", description: "Lámpara de mesa moderna." },
    ];

    return (
        <View style={styles.container}>
            <ScrollView>
                {products.map((product, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.productContainer}
                        onPress={() => navigation.navigate('Product', { productName: product.name, productDescription: product.description })}
                    >
                        <Image
                            style={styles.productImage}
                            source={{ uri: 'https://via.placeholder.com/150' }}
                        />
                        <View style={styles.productDetails}>
                            <Text style={styles.productTitle}>{product.name}</Text>
                            <Text style={styles.productDescription}>{product.description}</Text>
                        </View>
                    </TouchableOpacity>
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