import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BookCard } from '../BookCard';
import { getRequest } from '../api/Api';
import { useEffect, useState } from 'react';

export default function Page() {

  const [livro, setLivro] = useState([])
  const getBooks = async () => {
    let books = await getRequest()
    setLivro(books)
  }

  useEffect(() => {
    getBooks()
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Biblioteca</Text>

      <TextInput style={styles.pesquisa} placeholder='Pesquisar'>

      </TextInput>
      <ScrollView style={styles.scroll}>
        <View style={styles.container2}>
          {
            livro.map((item) => (
              <BookCard key={item.id} title={item.titulo} ano={item.ano} autor={item.autor} />

            ))
          }
        </View>
      </ScrollView>





    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00008B',
    alignItems: 'strech',
    paddingHorizontal: 35,

  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#DAA520',
    marginTop: 10,
   
   
  },
  pesquisa: {
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
    borderColor: '#DAA520',
    color: 'gray',
  },
  container2: {
    backgroundColor: '#20B2AA',
    padding: 10,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    height: "auto"
  },
  scroll: {
    height: 'auto',
    flex: 1,
  },
});

/*
{example.map((item, index) =>(
  <Pressable onPress={() => {
    router.push({
      pathname: "books/[id]",
      params: {id: item.id}
    })
  }}>
    <Text> Go to page book {item.id} </Text>
  </Pressable>
))}
*/