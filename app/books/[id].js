import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getLivroID, BASE_URL, alugar } from "../../api/Api";




export default function BooksPage() {
    const { id } = useLocalSearchParams();
    const [livro, setLivro] = useState(null);
    const [emprestimo, setEmprestimo] = useState('');
    const [nome, setNome] = useState('');
    const [anoNasc, setAnoNasc] = useState('');
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);


    const onMessage = async () => {

        setAlert1(false);
        setAlert2(false);


        if (anoNasc.trim() !== " " && nome.trim() !== "") {
            let novoEmprestimo = await alugar(id, nome, anoNasc);
            setEmprestimo(novoEmprestimo);

            setNome("");
            setAnoNasc("");

        } else {

            if (!anoNasc.trim()) {
                setAlert1(true);
                setTimeout(() => {
                    setAlert1(false);
                }, 4000);
            }


            if (!nome.trim()) {
                setAlert2(true);
                setTimeout(() => {
                    setAlert2(false);
                }, 4000);
            }

        }
    };


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
                                <Text key="autor" style={style.autor}>{livro.autor} - <Text key="anoNasc">{livro.anoNasc}</Text></Text>
                            </View>
                        </View>
                    </View>

                </>
            ) : (
                <Text> Livro não encontrado </Text>
            )}

            <View style={style.card2}>
                <TextInput style={style.input} placeholder="Nome" value={nome}
                    onChangeText={setNome}>
                </TextInput>
                <TextInput style={style.input} placeholder="Ano de Nascimento" value={anoNasc}
                    onChangeText={setAnoNasc}>
                </TextInput>

            </View>

            <View style={style.container3}>
                <Pressable style={style.botao1} onPress={() => {
                    router.push({
                        pathname: "books/confirm/[id]",
                        params: { id: item.id }
                    })
                }}>
                    <Text>Voltar</Text>
                </Pressable>

                <TouchableOpacity style={style.botao2} onPress={() => onMessage()} > <Text>Confirmar</Text> </TouchableOpacity>
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
        borderWidth: 1,
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
        padding: 16,
        fontFamily: "sans-serif"
    },
    botao2: {
        width: "70%",
        height: 50,
        backgroundColor: "#32CD32",
        borderRadius: 8,
        justifyContent: "center",
        textAlign: "center",
        padding: 16,
        fontFamily: "sans-serif"
    }

})

