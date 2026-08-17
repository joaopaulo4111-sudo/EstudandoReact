import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from "firebase/auth";

import { useState, useEffect } from "react";
import { app } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth(app);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName.trim(),
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.code, error.message);

      let systemErrorMessage;

      if (error.code === "auth/invalid-email") {
        systemErrorMessage = "E-mail inválido.";
      } else if (
        error.code === "auth/weak-password" ||
        error.code === "auth/password-does-not-meet-requirements"
      ) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.code === "auth/email-already-in-use") {
        systemErrorMessage = "E-mail já cadastrado.";
      } else if (error.code === "auth/operation-not-allowed") {
        systemErrorMessage =
          "Cadastro por e-mail/senha não está habilitado no Firebase.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }

    
  };

  

  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email.trim(), data.password);
    } catch (error) {
      console.log(error.code, error.message);

      let systemErrorMessage;

      if (error.code === "auth/user-not-found") {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        systemErrorMessage = "E-mail ou senha incorretos.";
      } else if (error.code === "auth/invalid-email") {
        systemErrorMessage = "E-mail inválido.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
      }

      setError(systemErrorMessage);
    }

    setLoading(false);
  };

  // logout
  const logout = () =>{
    checkIfIsCancelled(true)

    signOut(auth)
  }  

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    logout,
    login,
    loading,
  };
};