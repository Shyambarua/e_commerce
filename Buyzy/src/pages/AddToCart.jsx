import { useNavigate } from 'react-router-dom';

const AddToCart = () => {
  const navigate = useNavigate();

  const handleBilling = () => {
    navigate('/billing');
  };

  return (
    <div className="px-5 mt-10">
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

export default AddToCart;
