import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getLivroID } from "../../api/Api";

export default function BooksPage() {
    const { id } = useLocalSearchParams();
    const [livro, setLivro] = useState(null);
    const [usuario, setUsuario] = useState('');
    const [nasc, setNasc] = useState('');
    

    const getLivroID = async () => {
        let livro = await getLivroID(id)
        setLivro(livro)
    }
    useEffect(() => {
        getBooks()
      }, [])

    return (
        <View style={style.container}>
            <Text>{livro.titulo}</Text> 
            <Text>{livro.ano}</Text>
            <Text>{livro.autor}</Text>
            <Text>{livro.capa}</Text>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})