import EnterpriseLogin from '../../components/login/EnterpriseLogin.tsx';

import Layout from '../../components/layout/Layout.tsx';


const LoginPage = () => {
  return (
    <Layout color='text-slate-100' background='bg-slate-800 border-yellow-100'>
      <EnterpriseLogin />
    </Layout>
  );
};

export default LoginPage;
