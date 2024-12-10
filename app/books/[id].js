import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getLivroID, BASE_URL } from "../../api/Api";


export default function BooksPage() {
    const { id } = useLocalSearchParams();
    const [livro, setLivro] = useState(null);
    const [usuario, setUsuario] = useState('');
    const [nasc, setNasc] = useState('');


    const livroId = async () => {
        let books = await getLivroID(id)
        setLivro(books)
    }
    useEffect(() => {
        livroId()
    }, []);

    return (
        <View style={style.container}>
            {livro ? (
                <>
                    <View style={style.card}>
                        <View style={style.capa}>
                            <Image
                                source={`${BASE_URL}${livro.capa}`}
                                style={style.img}
                            />
                        </View>

                        <View style={style.Cardtitulo}>
                            <Text key="titulo" style={style.titulo}>{livro.titulo}</Text>
                            <View style={style.autorAno}>
                                <Text key="autor" style={style.autor}>{livro.autor} - <Text key="ano">{livro.ano}</Text></Text>
                            </View>
                        </View>
                    </View>

                </>
            ) : (
                <Text> Livro não encontrado </Text>
            )}

            <View style={style.card2}>
                <TextInput style={style.input} placeholder="Nome">
                </TextInput>
                <TextInput style={style.input} placeholder="Ano de Nascimento">
                </TextInput>

            </View>

            <View style={style.container3}>
                <TouchableOpacity style={style.botao1}> Voltar </TouchableOpacity>
                <TouchableOpacity style={style.botao2}> Confirmar </TouchableOpacity>
            </View>




        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00008B",
        paddingHorizontal: 35,
    },
    card: {
        flex: 1,
        alignContent: "space-between",
        margin: 16,
        backgroundColor: '#20B2AA',
        padding: 16,
        borderRadius: 8,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    capa: {
        flex: 1,
        marginHorizontal: 5,
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 8,

    },
    Cardtitulo: {
        flex: 1,
        backgroundColor: "lightblue",
        borderRadius: 8,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    autorAno: {
        flexDirection: "column",
        backgroundColor: "lightblue",
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 12,
    },
    autor: {
        fontSize: 14,
    },
    card2: {
        flex: 1,
        margin: 16,
        backgroundColor: '#20B2AA',
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        borderWidth: 2,
        borderRadius: 8,
        fontSize: 24,
        textAlign: 'center',
        borderColor: '#DAA520',
        color: 'gray',
        margin: 16,
    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 16,
    },
    botao1: {
        width: "25%",
        height: 50,
        backgroundColor: "red",
        borderRadius: 8,
        justifyContent: "center",
        textAlign: "center",
        padding: 16
    },
    botao2: {
        width: "70%",
        height: 50,
        backgroundColor: "#32CD32",
        borderRadius: 8,
        justifyContent: "center",
        textAlign: "center",
        padding: 16
    }

})

