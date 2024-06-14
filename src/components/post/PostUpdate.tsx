import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUserStore } from '../../store/userstore.ts';

import { PostUpdateSchema, Post } from '../../schemas/post.schema';
import { postUpdateService } from '../../services/postUpdateService.ts';
import { useMutationPostUpdate } from '../../hooks/useMutationPostUpdate.tsx';
import { usePostStore } from '../../store/store.ts';
import CancelButton from '../../components/buttons/CancelButton.tsx';
import SubmitButton from '../../components/buttons/SubmitButton.tsx';
import Input from './Input.tsx';

export default function PostUpdate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    resolver: zodResolver(PostUpdateSchema),
  });
  const user = useUserStore((state) => state.user);
  const post = usePostStore((state) => state.post);
  const url = `http://127.0.0.1:8000/api/posts/update/post/${post.id}`;
  const { mutation } = useMutationPostUpdate(
    postUpdateService,
    url,
    user?.token,
  );

  const onSubmit: SubmitHandler<Post> = async (
    data: Post,
  ) => {
    await mutation.mutateAsync(data);
  };

  return (
    <div className='container relative mx-auto my-12 max-w-[1000px] p-12 rounded bg-emerald-950'>
      <div className='absolute top-0 right-0'>
        <CancelButton />
      </div>
      <h2 className='text-2xl text-emerald-300 font-bold mb-4'>Update Post</h2>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label
            htmlFor='title'
            className='block text-emerald-200 font-semibold mb-2'
          >
            Title
          </label>
          <Input
            color='primary'
            label='title'
            errors={errors}
            register={register}
            placeholder='Choose a title'
          />
          {errors.title && (
            <span className='text-red-500'>Title is required</span>
          )}
        </div>
        <div className='mb-4'>
          <label
            htmlFor='body'
            className='block text-emerald-200 font-semibold mb-2'
          >
            Markdown content
          </label>
          <textarea
            defaultValue={post?.content}
            {...register('content', { required: true })}
            className='w-full bg-emerald-950 text-emerald-200 border rounded py-2 px-3 min-h-[300px]'
          ></textarea>
          {errors.content && (
            <span className='text-red-500'>Content is required</span>
          )}
        </div>
        <section className='sm:flex items-center md:py-12 my-12'>
          <SubmitButton />
          <CancelButton />
        </section>
      </form>
      {mutation?.failureReason ? (
        <p className='text-red-500'>{`${mutation?.failureReason}`}</p>
      ) : null}
    </div>
  );
}

/*const [id, setId] = React.useState('');
  const location = useLocation();
  const { postId } = location.state;
  const url = `http://127.0.0.1:8000/api/posts/update/post/${id}`;
  const url2 = `http://127.0.0.1:8000/api/posts/get/post/${id}`;
  const { mutation } = useUpdatePost(updatePost, url);

  const { data: post } = postId && useOnePostQuery(getSinglePost, url2);*/
