import { useForm } from "../hooks/useForm";
import { createUser } from "../services/user.service";

export const RegisterForm = () => {

    const [values, handleInputChange, reset] = useForm({
        nickName: '_Maarin',
        email: 'epache17@gmail.com',
        password: '12345678sebbA'
    })

const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(values)
    const token = await createUser(values)
    if (!token) {
        reset()
        return
    }

    localStorage.setItem('token', token)
    reset()
}

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="nickName-input-login">NickName:</label>
      <input
        type="text"
        name="nickName"
        id="nickName-input-login"
        placeholder="_JoeDoe12_"
        onChange={handleInputChange}
        value={values.nickName}
      />
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
