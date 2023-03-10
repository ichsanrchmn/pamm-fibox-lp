import React from 'react';

const Button = ({ styles, text }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-main-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] hover:text-white duration-300`}>
      {text}
    </button>
  );
};

export default Button;
