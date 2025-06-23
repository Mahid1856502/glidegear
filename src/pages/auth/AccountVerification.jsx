import { FaArrowRightLong } from 'react-icons/fa6';
import { MdOutlineMailOutline } from 'react-icons/md';

const AccountVerification = () => {
  return (
    <div className="dark:border-strokedark dark:bg-boxdark  w-full flex justify-center">
      <div className="w-full sm:w-1/2 lg:w-1/3 p-4 pb-10 text-center h-screen">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
          Login
        </h2>
        <p className="text-left font-semibold text-black">
          Welcome to <b className="text-black">RockerZ</b>, Victor!
          <br /> Before we get started, please check your mailbox and confirm
          your email address.
        </p>
        <div className="flex justify-between text-black my-3">
          <div className="flex items-center font-bold">
            Confirm Email <FaArrowRightLong className="ml-3" />
          </div>
          <div>
            <MdOutlineMailOutline size={24} className="text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountVerification;
