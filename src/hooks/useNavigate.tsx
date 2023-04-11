import { useNavigate as Navigate } from "react-router-dom";

const useNavigate = () => {
  const navigate = Navigate();
  return {navigate};
}

export default useNavigate;