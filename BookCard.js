import { StyleSheet, Text, View } from "react-native"

export const BookCard = ({ autor, title, ano }) => {
    return (
        
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
                <Text>{autor} - {ano}</Text>
            </View>
        
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#333",
    }
})