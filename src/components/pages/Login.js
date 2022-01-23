import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, PageLayout, PasswordInput, Spinner } from "../common";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;

let timeout;

export const Login = () => {
  const [formField, setFormField] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    e.persist();

    setFormField((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleFormSubmit}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Input
              name="username"
              placeholder="Username"
              value={formField.username}
              type="text"
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              value={formField.password}
              onChange={handleInputChange}
            />
            <Button large type="submit" disabled={isLoading}>
              {isLoading ? "Loading" : "Login"}
            </Button>
            {!isLoading && (
              <>
                <div className="alt-text">or</div>
                <Button secondary type="button">
                  Register
                </Button>
              </>
            )}
          </>
        )}
      </Form>
    </PageLayout>
  );
};
