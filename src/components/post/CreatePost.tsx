import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { addPostSchema, addPostType } from '../../schemas/post.schema';
import { postRequest } from '../../services/postRequest';
import { useAcyncMutation } from '../../hooks/useAcyncMutation';

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addPostType>({
    resolver: zodResolver(addPostSchema),
  });

  /* const mutation = useMutation({
    mutationFn: (data) => {
      return postRequest(data);
    },
  });*/

  const { mutation } = useAcyncMutation(postRequest);

  const onSubmit: SubmitHandler<addPostType> = async (data) => {
    const _data = { ...data };
    _data.author_id = 2;
    const res = mutation.mutateAsync(_data);
    console.log(res);
  };

  return (
    <div className='container mx-auto mt-8'>
      <h2 className='text-2xl font-bold mb-4'>Create New Post</h2>
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
            id='title'
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
            id='content'
            {...register('content', { required: true })}
            className='w-full border rounded py-2 px-3'
          ></textarea>
          {errors.content && (
            <span className='text-red-500'>Content is required</span>
          )}
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Create Post
        </button>
      </form>
    </div>
  );
}
