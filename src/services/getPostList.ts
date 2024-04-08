export const get_posts = async () => {
  const url = 'http://127.0.0.1:8000/api/posts/postlist/';
  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};
