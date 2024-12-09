import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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
                    <View style={style.capa}>
                    <Image key="capa" source={livro.capa} style={style.capaImagem}/>
                    </View>
                    <View style={style.titulo}>
                    <Text key="titulo">{livro.titulo}</Text>
                    </View>
                    <View style={style.autorAno}>
                    <Text key="autor">{livro.autor}</Text>
                    <Text key="ano">{livro.ano}</Text>
                    </View>
                    
                </>
            ) : (
                <Text> Livro não encontrado </Text>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    capaImagem: {
        width: 150,
        height: 225,
        resizeMode: "cover",
        marginTop: 28,
    },
    capa: {
        
    },
    titulo: {

    },
    autorAno:{

    }
})