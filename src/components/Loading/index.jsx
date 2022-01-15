import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = ({ type = 'Puff', color = '#00BFFF', width = 60 }) => {
  return (
    <>
      <Loader type={type} color={color} height={width} width={width} />
    </>
  );
};

export default Loading;
