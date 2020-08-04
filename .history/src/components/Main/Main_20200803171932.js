import React, { useContext, us } from 'react';
import { todoContext } from '../../context/todoContext/todoContext';

export const Main = () => {
  const { setLoading, getTodos } = useContext(todoContext);
  console.log(setLoading, getTodos);

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>
  }
  return (
    <>
      <h1>Main</h1>
    </>
  )
};
