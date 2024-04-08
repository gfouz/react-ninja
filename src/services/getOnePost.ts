export const getOnePost = async (url) => {
  const response = await fetch(url);
  const post = await response.json();
  return post;
};
