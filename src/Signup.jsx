import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./api/main";
import Header from "./header";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    birthday: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();


    const { username, password, name, birthday, email } = formData;


    try {
      const result = await registerUser(username, password);

      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Header />
      <h2 id="signUpForm">Sign up</h2>
      <form onSubmit={handleSubmit}>
      <label className="name-input">
          name:{" "}
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </label>

        <label className="email-input">
          email:{" "}
          <input
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label className="birthday-input">
          birthday:{" "}
          <input
            type="text"
            value={formData.birthday}
            onChange={(e) =>
              setFormData({ ...formData, birthday: e.target.value })
            }
          />
        </label>
        <label className="username-input">
          Username:{" "}
          <input
            type="text"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
        </label>

        <label className="password-input">
          password:{" "}
          <input
            type="text"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>

       


        <br />
        <button id="buttons" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;

