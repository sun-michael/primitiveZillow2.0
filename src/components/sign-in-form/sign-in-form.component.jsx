import "./sign-in-form.styles.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  // const { setCurrentUser } = useContext(UserContext);

  // console.log("formfields", formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    // try {
    //   await signInWithGooglePopup();
    //   // setCurrentUser(user);
    //   // await createUserDocumentFromAuth(user);
    // } catch {
    //   return;
    // }
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
      // setCurrentUser(user);
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/invalid-credential":
          alert("Invalid credentials");
          break;
        default:
          console.log(e);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        />

        {/* <button type="submit">Sign Up</button> */}
        <div className="buttons-container">
          <Button buttonType="secondary" type="submit">
            Sign In
          </Button>
          <Button buttonType="primary" onClick={signInWithGoogle} type="button">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
