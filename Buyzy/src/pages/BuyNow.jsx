import { useNavigate } from 'react-router-dom';

const BuyNow = () => {
  const navigate = useNavigate();

  const handleBilling = () => {
    navigate('/billing');
  };

  return (
    <div className="flex flex-col items-center mt-10 px-5">
      {/* Other content */}
      <button
        onClick={handleBilling}
        className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-md hover:shadow-lg"
      >
        Proceed to Billing
      </button>
    </div>
  );
};

export default BuyNow;
