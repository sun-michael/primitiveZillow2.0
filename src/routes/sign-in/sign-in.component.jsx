import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
    <div>
        <h1>sign in intact</h1>
        <button type="button" class="btn btn-primary" onClick={logGoogleUser}>Sign In</button>

    </div>)
}
export default SignIn