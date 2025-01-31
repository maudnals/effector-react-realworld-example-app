import { useStore } from 'effector-react';
import { model } from 'shared/user';

type Props = Readonly<{
  check: 'anon' | 'auth';
}>;

export const AuthBranch: React.FC<Props> = ({ check, children }) => {
  const isAuth = useStore(model.$isAuthorized);

  if (isAuth === true && check === 'auth') {
    return <>{children}</>;
  }
  if (isAuth === false && check === 'anon') {
    return <>{children}</>;
  }

  return null;
};
