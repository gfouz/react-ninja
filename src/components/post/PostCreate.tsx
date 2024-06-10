import { useUserStore } from '../../store/userstore.ts';
import { SubmitHandler, useForm  } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostService } from '../../services/createPostService.tsx';
import { useCreatePostMutation } from '../../hooks/useCreatePostMutation';
import { useCategoriesQuery } from '../../hooks/useCategoriesQuery.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import SignInButton from '../../components/buttons/SignInButton.tsx';
import ResponsiveTable from '../../components/table/ResponsiveTable.tsx';
import Select from '../../components/select/NextSelect.tsx';
import Textarea from '../../components/textarea/TextArea.tsx';

import {
  CreatePostSchema,
  CreatePostInferface,
} from '../../schemas/post.schema';
import Input  from './Input.tsx';

export default function CreatePost() {
  const user = useUserStore((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePostInferface>({
    resolver: zodResolver(CreatePostSchema),
  });

  const { mutation } = useCreatePostMutation(createPostService, user?.token);
  const { categories } = useCategoriesQuery();
  const default_categories = [{name:"science"}, {name:"technology"},{ name: "python"}]

  const onSubmit: SubmitHandler<CreatePostInferface> = async (data) => {
    //@ts-ignore
    data.categories = data.categories.split(',');
    await mutation.mutateAsync(data);
  };
  return (
    <section className='py-12 flex flex-col items-center md:flex-row justify-evenly md:items-start'>
      <div className='mb-4 bg-slate-100 p-8 rounded-lg shadow-lg w-full max-w-md'>
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
            <label
              htmlFor='categories'
              className='block mb-2 text-sm font-semibold text-slate-500 '
            >
              Choose a title
            </label>
            <Input
              color='primary'
              label='title'
              errors={errors}
              register={register}
              placeholder='Choose a title'
            />
          </div>

          <div className='py-4'>
            <label
              htmlFor='categories'
              className='block mb-2 text-sm font-semibold text-slate-500 '
            >
              Select Category
            </label>

            <Select
              register={register}
              errors={errors}
              categories={categories ? categories : default_categories}
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm text-slate-500 font-semibold mb-2'>
              Markdown content
            </label>
            <Textarea register={register} errors={errors} />
          </div>
          <section className='sm:flex items-center md:py-12 my-12'>
            {user?.user_id === undefined ? <SignInButton /> : <SubmitButton />}
          </section>
        </form>
      </div>
      <div>
        <ResponsiveTable />
      </div>
    </section>
  );
}