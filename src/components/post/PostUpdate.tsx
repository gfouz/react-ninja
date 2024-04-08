import { z } from 'zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { addPostSchema, addPostType } from '../../schemas/post.schema';
import { updatePost } from '../../services/updatePost.ts';
import { getSinglePost } from '../../services/service.ts';
import { useUpdatePost } from '../../hooks/useUpdatePost.tsx';
import { useOnePostQuery } from '../../hooks/useOnePostQuery.tsx';

export default function PostUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addPostType>({
    resolver: zodResolver(addPostSchema),
  });
  const [id, setId] = React.useState('');
  const location = useLocation();
  const { postId } = location.state;
  const url = `http://127.0.0.1:8000/api/posts/update/post/${id}`;
  const url2 = `http://127.0.0.1:8000/api/posts/get/post/${id}`;
  const { mutation } = useUpdatePost(updatePost, url);

  const { data: post } = useOnePostQuery(getSinglePost, url2);

  const onSubmit: SubmitHandler<addPostType> = async (data) => {
    const res = await mutation.mutateAsync(data);
  };
  React.useEffect(() => {
    setId(postId);
  });
  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Update Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-gray-700 font-semibold mb-2'
          >
            Title
          </label>
          <input
            type='text'
            defaultValue={post?.title}
            {...register('title', { required: true })}
            className='w-full border rounded py-2 px-3'
          />
          {errors.title && (
            <span className='text-red-500'>Title is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='body'
            className='block text-gray-700 font-semibold mb-2'
          >
            Body
          </label>
          <textarea
            defaultValue={post?.content}
            {...register('content', { required: true })}
            className='w-full border rounded py-2 px-3'
          ></textarea>
          {errors.content && (
            <span className='text-red-500'>Content is required</span>
          )}
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Update Post
        </button>
      </form>
    </div>
  );
}
