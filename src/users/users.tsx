import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Auth } from "aws-amplify";
import { User } from "../models";

export interface UsersCreateProps {}

const UsersCreate = () => {
  useEffect(() => {
    createUser();
    logOut()
  },[]);
  const signIn = async () =>{
    const signInRes = await Auth.signIn({password:"1321313213",username:"Vasya"})
    console.log(signInRes)
    return signInRes
  }
  const signUp = async () => {
    const signUpRes = await Auth.signUp({
      password: "1321313213",
      username: "Vasya",
      attributes:{
        email:"danil@mail.com"
      }
    });
    console.log(signUpRes)
    return signUpRes
  };
  const logOut = async () =>{
    const logOutRes = Auth.signOut()
    console.log(logOutRes)
  }
  const createUser = async () => {
    const result = await DataStore.save(
      new User({
        name: "Lorem ipsum dolor sit amet",
        email: "test12346789@testemailtestemail.com",
      })
    );
    console.log(result);
    return result;
  };
  return (
    <>
      <p>Hello</p>
    </>
  );
};

export default UsersCreate;
