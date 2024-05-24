import { useUserStore } from '../../store/userstore.ts';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostService } from '../../services/createPostService.tsx';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery.tsx';
import Table from '../../components/table/Table.tsx';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import GotoLoginButton from '../../components/buttons/GoToLoginButton.tsx';
import Select from '../../components/select/Select.tsx';
import DashboardButton from '../../components/buttons/DashboardButton.tsx';

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
  const { categories } = useCategoriesQuery();

  const onSubmit: SubmitHandler<CreatePostInterface> = async (data) => {
    await mutation.mutateAsync(data);
    console.log('this is data: ' + JSON.stringify(data));
  };

  console.log(categories);
  return (
    <div className='w-full bg-slate-800'>
      <div className='bg-gray-100 mx-auto max-w-[800px]  p-12 rounded'>
        <div className='rounded flex justify-around rounded bg-[#b7b7b7] py-1 text-center'>
          <h2 className='text-3xl text-gray-700 font-extrabold tracking-tight font-bold my-4'>
            Create New Post
          </h2>
          <div className='h-full p-4'>
            <DashboardButton />
          </div>
        </div>

        <form className='my-8' onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user?.user_id}
            type='hidden'
            {...register('author_id')}
          />
          <div className='mb-4'>
            <label
              htmlFor='title'
              className='block text-slate-800 font-extrabold text-xl tracking-tight mb-2'
            >
              Title for database record
            </label>
            <input
              type='text'
              id='title'
              {...register('title', { required: true })}
              className='w-full bg-[#d9d9d9] text-slate-900 border rounded py-2 px-3'
            />
            {errors.title && (
              <span className='text-red-500'>Title is required</span>
            )}
          </div>
          <div className='border py-4'>
            <Select
              register={register}
              errors={errors}
              categories={categories}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='body'
              className='block text-slate-800 font-extrabold tracking-tight mb-2'
            >
              Markdown content
            </label>
            <textarea
              id='content'
              {...register('content', { required: true })}
              className='w-full  bg-[#d9d9d9]  text-slate-800 border rounded py-2 px-3'
            ></textarea>
            {errors.content && (
              <span className='text-red-500'>Content is required</span>
            )}
          </div>
          <section className='sm:flex items-center md:py-12 my-12'>
            {user?.user_id === undefined ? (
              <GotoLoginButton />
            ) : (
              <SubmitButton />
            )}
          </section>
        </form>
        <button
          className='text-slate-800 px-4 py-2'
          onClick={() => {
            dispatch({
              type: 'LOG_OUT',
              payload: { user_id: undefined, token: undefined },
            });
          }}
        >
          log out
        </button>
        <Table />
      </div>
    </div>
  );
}
