import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-md w-full flex flex-col items-center p-8 rounded-md shadow-md"
      data-testid="login-page"
    >
      <h1 className="text-4xl font-semibold text-green-900 mb-4 font-cursive">
        Welcome back
      </h1>
      <p className="text-center text-base text-green-900 mb-6 py-4">
        Sign in to access an enhanced shopping experience.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>

        <ErrorMessage error={message} data-testid="login-error-message" />

        <SubmitButton
          data-testid="sign-in-button"
          className="w-full mt-6 bg-green-900 text-white hover:bg-green-800 transition-all duration-200 py-3 rounded-sm font-medium"
        >
          Sign in
        </SubmitButton>
      </form>

      <span className="text-center text-green-900 text-sm mt-6">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline hover:text-green-800 transition-colors"
          data-testid="register-button"
        >
          Join us
        </button>
        .
      </span>
    </div>
  )
}

export default Login
