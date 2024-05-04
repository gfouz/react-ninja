import Register from '../../components/register/Register';
import Navbar from '../../components/navbar/Navbar';

const links = ['/', '/register', '/login', '/blog'];

const RegisterPage = () => {
  return (
    <div>
      <Navbar links={links} />
      <Register />
    </div>
  );
};

export default RegisterPage;
