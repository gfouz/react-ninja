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
import MaterialDesignInput from '../../components/input/MaterialDesignInput.tsx';

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
    <section className='md:flex justify-evenly'>
      <div className='mx-auto mb-4 bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-slate-500 text-3xl font-extrabold tracking-tight mb-10 text-center'>
          Create Post
        </h2>
        <form className='max-w-md mx-auto' onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={user?.user_id}
            type='hidden'
            {...register('author_id')}
          />
          <div className='mb-4'>
            <MaterialDesignInput
              label='title'
              errors={errors}
              register={register}
            >
              <span className='text-slate-500 font-extrabold'>Title</span>
            </MaterialDesignInput>
          </div>
          <div className='py-4'>
            <label
              htmlFor='countries'
              className='block mb-2 text-xl font-extrabold tracking-tight text-slate-500 '
            >
              Select Category
            </label>
            <Select
              register={register}
              errors={errors}
              categories={categories}
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='body'
              className='block text-slate-500 font-extrabold tracking-tight mb-2'
            >
              Markdown content
            </label>
            <textarea
              id='content'
              {...register('content', { required: true })}
              className='w-full  bg-gray-50  text-slate-800 border rounded py-2 px-3'
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
      </div>
      <Table />
    </section>
  );
}
