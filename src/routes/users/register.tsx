import MaterialDesignSignUp from '../../components/register/MaterialDesignSignUp.tsx';
import Navbar from '../../components/navbar/Navbar';

const links = ['/', '/register', '/login', '/blog-dashboard'];

const RegisterPage = () => {
  return (
    <div>
      <Navbar links={links} />
      <MaterialDesignSignUp />
    </div>
  );
};

export default RegisterPage;
