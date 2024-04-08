export default function RatingBar({ name, percent, color }) {
  return (
    <>
      <div class='flex items-center mt-4'>
        <div className='w-[70px] text-left text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline'>
          {name}
        </div>
        <div className='w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700'>
          <div
            className='h-5  rounded'
            style={{ backgroundColor: color, width: `${percent}%` }}
          ></div>
        </div>
        <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
          {percent}%
        </span>
      </div>
    </>
  );
}
