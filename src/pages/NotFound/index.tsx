import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, 你访问的页面不存在'
      extra={
        <Button type='primary' onClick={goBack}>
          返回
        </Button>
      }
    />
  );
};

export default NotFound;
