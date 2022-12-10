import { useAuth0 } from "@auth0/auth0-react";

const useSession = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently: token,
  } = useAuth0();

  return {
    isAuthenticated,
    user,
    token,
    isLoading,
  };
};

export default useSession;
