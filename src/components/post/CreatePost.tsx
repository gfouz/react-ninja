import React from 'react';
import { useUserStore } from '../../store/userstore.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostService } from '../../services/createPostService.tsx';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import Table from '../../components/table/Table.tsx';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import GotoLoginButton from '../../components/buttons/GoToLoginButton.tsx';

import {
  CreatePostSchema,
  CreatePostInterface,
} from '../../schemas/post.schema';

export default function CreatePost() {
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostInterface>({
    resolver: zodResolver(CreatePostSchema),
  });

  const dispatch = useUserStore((state) => state.dispatch);
  const { mutation } = useCreatePostMutation(createPostService, user?.token);

  const onSubmit: SubmitHandler<CreatePostInterface> = async (data) => {
    mutation.mutateAsync(data);
  };

  //console.log(user);
  return (
    <div className='container relative bg-slate-800 mx-auto my-12 max-w-[1000px] p-12 rounded'>
      <div className='border '>
        <CancelButton content='go back' />
      </div>
      <h2 className='text-2xl text-slate-100 font-bold my-4'>
        Create New Post
      </h2>
      <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user?.user_id}
          type='hidden'
          {...register('author_id')}
        />
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-slate-100 font-semibold mb-2'
          >
            Title for database record
          </label>
          <input
            type='text'
            id='title'
            {...register('title', { required: true })}
            className='w-full bg-slate-800 text-slate-100 border rounded py-2 px-3'
          />
          {errors.title && (
            <span className='text-red-500'>Title is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='body'
            className='block text-slate-100 font-semibold mb-2'
          >
            Markdown content
          </label>
          <textarea
            id='content'
            {...register('content', { required: true })}
            className='w-full bg-slate-800 text-slate-100 border rounded py-2 px-3'
          ></textarea>
          {errors.content && (
            <span className='text-red-500'>Content is required</span>
          )}
        </div>
        <section className='sm:flex items-center md:py-12 my-12'>
          {user?.user_id === undefined ? <GotoLoginButton /> : <SubmitButton />}
        </section>
      </form>
      <button
        className='text-white px-4 py-2'
        onClick={() => {
          dispatch({ type: 'LOG_OUT' });
        }}
      >
        log out
      </button>
      <Table />
    </div>
  );
}
