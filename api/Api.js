export const BASE_URL = 'http://localhost:5066'

export const getRequest = async () => {
    try {

        const response = await fetch(`${BASE_URL}/api/ControladorLivros/Livros`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`)
        }
        
        const textData = await response.text();
        const data = JSON.parse(textData);

        return data;

    } catch (error) {
        console.error(error)
        throw error;
    }
};

export const getLivroID = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/api/ControladorLivros/Livro/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`)
        }

        const textData = await response.text();
        const data = JSON.parse(textData)

        return data;

    } catch (error) {
        console.error(error)
        throw error;
    }
};

export const alugar = async () => {
    try {
        let myBody = {
            idLivro: 0,
            nome: nome,
            anoNasc: anoNasc,
        };
        const response = await fetch(`${BASE_URL}/api/ControladorLivros/alugar`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myBody)
        });

        if (!response.ok) {
            throw new Error(`POST request failed with status ${response.status}`)
        }

        const textData = await response.text();
        return JSON.parse(textData);

    } catch (error) {
        console.error(error)
        throw error;
    }
};

