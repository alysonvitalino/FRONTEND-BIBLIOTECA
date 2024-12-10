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
}

