/* eslint-disable react/prop-types */
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";

import Spinner from "./Spinner";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1) load authenticated user
  const { user, isLoading, isAuthenticated } = useUser();

  //  2)if no user, redirect to login
  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  //  3)while loading, show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuthenticated) return children;
}
