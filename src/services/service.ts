export const getSinglePost = async (url) => {
  const response = await fetch(url);
  const post = await response.json();
  return post;
};

export const getPostList = async () => {
  const url = 'http://127.0.0.1:8000/api/posts/postlist/';
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};

export const updatePost = async (data, url) => {
  // const url = `http://127.0.0.1:8000/api/posts/update/post/${postId}`;
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
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

export const createPost = async (data) => {
  const url = 'http://127.0.0.1:8000/api/posts/create/newpost';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
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

export const deletePost = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
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
