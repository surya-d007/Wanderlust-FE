import React from 'react';

function Button(props) {
  return (
    <>
      <style jsx>{`
        .login{
            border: 1.2px solid black;
        }
        .login:hover {
          background: white !important;
          color: black !important;
          border: 1px solid black;
        }
      `}
      </style>
      <div className='drop-shadow-2xl'>
      <a
        className="rounded-full text-white px-4 py-3 font-medium transition-all duration-100 login "
        style={{
          background: 'black',
        }}
        href="#"
      >
        {props.text}
      </a>
      </div>
      
    </>
  );
}

export default Button;

/* Property 1=Variant5 */

/* Auto layout */
``
