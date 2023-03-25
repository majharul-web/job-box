import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import auth from "./firebase/firebase.config";
import routes from "./routes/routes";
import { useDispatch } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
