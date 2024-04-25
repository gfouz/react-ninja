'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { dataSchema, InputData } from '../../schemas/form.input.schema';
import { useContactService } from '../../hooks/useContactService';
import Input from '../input/Input';

const defaultMessage = 'Hello Giovanoti. I want to hire you!';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputData>({
    resolver: zodResolver(dataSchema),
  });

  const { fetchData } = useContactService();

  const onSubmit: SubmitHandler<InputData> = async (data) => {
    const newdata = { ...data, message: defaultMessage };
    fetchData(newdata);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label='email' register={register} errors={errors} />
    </form>
  );
};
export default Form;
