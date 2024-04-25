const PostCard = ({ title }:{title:string}) => {
  return (
    <div className='max-w-xl w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-6'>
      <div className='p-6'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>{title}</h2>
        {/*<p className="text-sm text-gray-600 mb-4">By {author}</p>*/}
      </div>
    </div>
  );
};
export default PostCard;
