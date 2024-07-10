import './authentication.styles.scss'

import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

    return (
        <div className='authentication-container'>
            {/* <h1>sign in intact</h1> */}
            {/* <button type="button" class="btn btn-primary" onClick={logGoogleUser}>Sign In Google popup</button> */}
            {/* <button type="button" class="btn btn-primary" onClick={logGoogleRedirectUser}>Sign In Google redirect</button> */}
            <SignInForm/>
            <SignUpForm />
        </div>
    )
}
export default Authentication