// const url = 'http://127.0.0.1:8000/api/posts/delete/post/';

export const deletePost = async (url: string, token: string | undefined) => {
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
