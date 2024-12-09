import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { getLivroID } from "../../api/Api";


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
    }, [id]);

    return (
        <View style={style.container}>
            {livro ? (
                <>
                    <View style={style.card}>
                        <View style={style.capa}>
                            {/* <Text key="titulo">{livro.capa}</Text> */}
                        </View>
                        <View style={style.titulo}>
                            {/*<Text key="titulo">{livro.titulo}</Text>*/}
                        </View>
                        <View style={style.autorAno}>
                            {/*<Text key="autor">{livro.autor}</Text>*/}
                            {/*<Text key="ano">{livro.ano}</Text>*/}
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


        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00008B",
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
    capaImagem: {
    },
    capa: {

    },
    titulo: {

    },
    autorAno: {

    },
    card2: {
        flex: 1,
        backgroundColor: '#20B2AA',
        padding: 8,
        margin: 16,
        borderRadius: 8
    },
    input: {
        borderWidth: 2,
        borderRadius: 8,
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 30,
        borderColor: '#DAA520',
        color: 'gray',
    },

})

