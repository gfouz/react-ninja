import { Link } from 'react-router-dom';
import { usePostListQuery } from '../../hooks/usePostListQuery.tsx';

export default function PostNavbar() {
  const { posts } = usePostListQuery();
  return (
    <ul className=''>
      {posts &&
        posts.map((post) => (
          <li key={post.id}>
            <Link
              to={`/published/${post.slug}`}
              className='text-yellow-600 underline'
            >
              {post.title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
