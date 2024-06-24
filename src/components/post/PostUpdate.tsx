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
import Textarea from '../textarea/TextArea.tsx';

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

  const onSubmit: SubmitHandler<Post> = async (data: Post) => {
    await mutation.mutateAsync(data);
  };

  return (
    <div className='dark container relative mx-auto my-12 max-w-[1000px] p-12 rounded-2xl bg-purple-900'>
      <h2 className='text-3xl text-white font-extrabold tracking-tight my-12'>
        Update Post
      </h2>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <Input
            color='secondary'
            label='title'
            errors={errors}
            register={register}
            defaultValue={post?.title}
            placeholder='Choose a title'
          />
          {errors.title && (
            <span className='text-red-500'>Title is required</span>
          )}
        </div>
        <div className='mb-4 !text-white'>
          <Textarea
            color='secondary'
            errors={errors}
            register={register}
            defaultValue={post?.content}
          />
        </div>
        <section className='w-[300px] flex  justify-evenly items-center'>
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
