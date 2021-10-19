import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)) {
      console.log("this is valid");
      setError(
        "Password Must have at least one Upper, Lower case and number and 6 characters long"
      );
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/.test(password)) {
      console.log("this is valid");
      setError(
        "Password Must have at least one Upper, Lower case and number and 6 characters long"
      );
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    error,
    isLoading,
    setIsLoading,
    handleName,
    setUserName,
    handleEmail,
    handlePassword,
    handleRegister,
    handleLogin,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
