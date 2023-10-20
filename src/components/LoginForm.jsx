import { useForm } from "../hooks/useForm";
import { getUserByCredentials } from "../services/user.service";

export const LoginForm = () => {
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: ""
  });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = await getUserByCredentials(values)

        if (!token) {
            reset()
            return
        }

        localStorage.setItem('token', token)
        reset()
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email-input-login">Email:</label>
      <input
        type="email"
        name="email"
        id="email-input-login"
        placeholder="example@test.com"
        onChange={handleInputChange}
        value={values.email}
      />
      <label htmlFor="password-input-login">Password:</label>
      <input
        type="password"
        name="password"
        id="password-input-login"
        placeholder="*************"
        onChange={handleInputChange}
        value={values.password}
      />
      <button type="submit">Send</button>
    </form>
  );
};
