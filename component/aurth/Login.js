import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import back from "../assets/icon/Chevron.png";
import Vector from "../assets/icon/Vector.png";
import f from "../assets/icon/Button/Social/f.png";
import g from "../assets/icon/Button/Social/g.png";
export class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={back} />
                    <Text style={{ fontSize: 34, fontWeight: "bold", color: "#222222", marginTop: 30 }}>Login</Text>
                </View>
                <View style={{ marginTop: 60 }}>
                    <View>
                        <TextInput placeholder='Email' style={styles.textinput} />
                    </View>
                    <View>
                        <TextInput placeholder='password' style={styles.textinput} />
                    </View>
                    <View style={{ justifyContent: "flex-end", display: "flex", alignItems: "center", flexDirection: "row", gap: 2 }}>
                        <Text style={{ fontSize: 14, color: "#222222", fontWeight: "bold" }}>Forget your password? </Text>
                        <Image source={Vector} />
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <CustomButton title="LOGIN" onPress={() => console.log("Button pressed")} />
                    </View>
                    <View style={{ marginTop: 70, textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "row" }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#222222" }}>Or login with social account</Text>
                    </View>

                    <View style={{ marginTop: 15, textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 15 }}>
                        <View style={styles.social}>
                            <Image source={g} />
                        </View>
                        <View style={styles.social}>
                            <View style={{ backgroundColor: "#3B5998", height: 24, width: 24, justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                                <Image source={f} />
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}
const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textinput: {
        fontSize: 14,
        color: "#2d2d2d",
        backgroundColor: "#fff",
        padding: 20,
        marginBottom: 15,
        borderRadius: 5,
        borderColor: "#ccc",
    },
    button: {
        backgroundColor: '#DB3022',
        borderRadius: 25,
        padding: 15,
        shadowColor: '#D32626', // Shadow color
        shadowOpacity: 0.5, // Shadow opacity
        shadowRadius: 10, // Shadow blur radius
        elevation: 10, // Android shadow elevation
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    social: {
        padding: 25,
        backgroundColor: "#fff",
        borderRadius: 20,
        shadowColor: '#00000', // Shadow color
        
        shadowRadius: 10, // Shadow blur radius
        elevation: 5, // Android shadow elevation
    }

});

export default Login;
