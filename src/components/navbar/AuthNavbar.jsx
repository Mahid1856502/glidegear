import { GoArrowLeft } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import PATH from '../../routes/path';
import { LOGO } from '../../images/logo';

const AuthNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-darkblue text-white px-10 md:px-20 h-[80px] flex items-center justify-between fixed border-b border-gray z-10">
      <GoArrowLeft
        size={24}
        onClick={() => navigate(PATH.HOME)}
        className="cursor-pointer"
      />
      <div
        className="flex-none items-center"
        onClick={() => navigate(PATH.HOME)}
      >
        {/* <Lottie options={defaultOptions} height={70} width={180} /> */}
        <img
          src={LOGO.LIGHT_LOGO}
          alt="logo"
          height={60}
          width={180}
          className="mr-3"
        />
      </div>
      <div />
    </div>
  );
};

export default AuthNavbar;
