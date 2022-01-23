import React, { useState } from "react";
import styled from "styled-components";
import { Input, PageLayout } from "../common";

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
`;

export const Login = () => {
  const [formField, setFormField] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    e.persist();

    setFormField((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          name="username"
          placeholder="Username"
          value={formField.username}
          type="text"
          onChange={handleInputChange}
        />
        <Input
          name="password"
          placeholder="Password"
          value={formField.password}
          type="password"
          onChange={handleInputChange}
        />
      </Form>
    </PageLayout>
  );
};
