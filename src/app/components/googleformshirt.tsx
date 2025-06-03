import React from 'react';

const GoogleFormShirt = () => {
  return (
    <div className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdKtWTxopIMuWVN1D_56muHmokOlZ_OmAKzvE9_HZYdkZCbpA/viewform?embedded=true"
          width="100%"
          height="100%"
          className="w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px]"
          style={{ border: 'none' }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleFormShirt;


