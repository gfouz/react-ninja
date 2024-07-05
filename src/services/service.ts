import { Post } from '../schemas/post.schema.ts';

export const getPostService = async (url: string) => {
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

export const getPostListService = async () => {
  const url = 'http://127.0.0.1:8000/api/posts/postlist/';
  try {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error(`Error al hacer la solicitud: ${response.status}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
};

export const updatePostService = async (
  data: { title: string; content: string },
  url: string,
) => {
  // const url = `http://127.0.0.1:8000/api/posts/update/post/${postId}`;
  const token = undefined;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

export const createPostService = async (data: Post, token: string) => {
  const url = 'http://127.0.0.1:8000/api/posts/create/newpost';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};

// const url = 'http://127.0.0.1:8000/api/posts/delete/post/';

export const deletePost = async (url: string, token: string) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  }
};
