import Layout from '../../components/layout/Layout.tsx';
import MaterialDesignSignUp from '../../components/register/MaterialDesignSignUp.tsx';

const RegisterPage = () => {
  return (
    <Layout
      color='text-cyan-200 placeholder-cyan-200 '
      background='bg-cyan-900 border-yellow-100'
    >
      <MaterialDesignSignUp />
    </Layout>
  );
};

export default RegisterPage;
