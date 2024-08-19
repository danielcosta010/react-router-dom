import { Navigate, useParams } from 'react-router-dom';

export default function Admin() {
  const params = useParams();

  if(params.user !== 'login') {
    return <Navigate to='/' />;
  }

  return (
    <h1>Admin</h1>
  );
}