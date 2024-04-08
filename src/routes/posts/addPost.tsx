//import React from "react";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { addPostSchema, addPostType } from '../../schemas/post.schema';
import { postRequest } from '../../services/postRequest';
import { useAcyncMutation } from '../../hooks/useAcyncMutation';
import CreatePost from '../../components/post/CreatePost';
import CrudLayout from '../../components/post/CrudLayout';
import Table from '../../components/table/Table.tsx';
import { usePostListQuery } from '../../hooks/usePostListQuery';

export default function PostCreator() {
  const { posts } = usePostListQuery();
  return (
    <div className='w-full p-4'>
      <CreatePost />
      <Table posts={posts} />
    </div>
  );
}
