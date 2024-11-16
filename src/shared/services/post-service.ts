import apiClient from "./api-client";

const getPosts = () =>  {
   return apiClient.get('posts').then(it => it.data);
};

const getPostById = (id: number) =>  {
  return apiClient.get(`posts/${id}`).then(it => it.data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const savePost = (data: { title: string; body: string; userId: number; }) =>  {
  return apiClient.post('posts', JSON.stringify(data)).then(it => it.data);
};

const updatePost = (id: number, data: { title: string; body: string; userId: number; }) =>  {
  return apiClient.put(`posts/${id}`, JSON.stringify(data)).then(it => it.data);
};

const deletePost = (id: number) =>  {
  return apiClient.delete(`posts/${id}`).then(it => it.data);
};

export { getPosts, getPostById, savePost, updatePost, deletePost};
