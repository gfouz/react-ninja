/*export const getOnePost = async (url: string) => {
  const response = await fetch(url);
  const post = await response.json();
  return post;
};*/

export const getOnePost = async (url: string) => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Hacer la solicitud utilizando Fetch API con await
    const response = await fetch(url, requestOptions);

    // Verificar si la respuesta es exitosa (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error al hacer la solicitud: ${response.status}`);
    }
    const post = await response.json();
    return post;
  } catch (error) {
    // Capturar y manejar errores de la solicitud
    console.error('Error al obtener los datos:', error);
  }
};
