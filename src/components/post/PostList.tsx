import { useQuery } from '@tanstack/react-query';
import { get_posts } from '../../services/getPostList';
import PostCard from './PostCard';

const PostList = () => {
  const query = useQuery({ queryKey: ['posts-list'], queryFn: get_posts });
  return (
    <div className='flex items-center justify-center w-[100%]'>
      <ul className='grid-auto-fit'>
        {query.data?.map((post: any) => (
          <li className='list-none' key={post.id}>
            <a
              className='no-underline'
              href={`http://127.0.0.1:8000/api/posts/${post.slug}`}
            >
              <PostCard title={post.title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
