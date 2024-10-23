import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.contactBox}>
                    <Text style={styles.contactText}><Text style={styles.label}>Teléfono:</Text> +56 9 1234 5678</Text>
                    <Text style={styles.contactText}><Text style={styles.label}>Whatsapp:</Text> +56 9 1234 5678</Text>
                    <Text style={styles.contactText}><Text style={styles.label}>Instagram:</Text> @nombre_empresa</Text>
                    <Text style={styles.contactText}><Text style={styles.label}>Correo:</Text> correo@example.com</Text>
                </View>

                <View style={styles.mapContainer}>
                    <MapView 
                        style={styles.map}
                        initialRegion={{
                            latitude: -38.7665376,
                            longitude: -72.7534177,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <Marker
                            coordinate={{ latitude: -38.765711, longitude: -72.764501 }}
                            title="Nuestra Ubicación"
                            description="Los Bongoes 185"
                        />
                    </MapView>
                </View>
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
    scrollContainer: {
        padding: 15,
    },
    contactBox: {
        backgroundColor: '#e0f7e0',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
    },
    contactText: {
        fontSize: 16,
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
    },
    mapContainer: {
        height: 300,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
    },
    map: {
        flex: 1,
    },
    mapButton: {
        backgroundColor: '#4a90e2',
        padding: 10,
        alignItems: 'center',
    },
    mapButtonText: {
        color: '#fff',
    },
});
