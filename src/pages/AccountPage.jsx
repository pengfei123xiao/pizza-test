import React from 'react';
import MainNav from '../components/MainNav';
import SignIn from '../components/signin/SignIn';

const AccountPage = (props) => {
  // console.log(props.location.pathname);
  const pathname = props.location.pathname;
  return (
    <div>
      <MainNav pathname={pathname} />
      <h1>ACCOUNT PAGE</h1>
      <SignIn />
    </div>
  );
}

export default AccountPage;
