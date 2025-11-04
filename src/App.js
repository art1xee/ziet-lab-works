import { useForm } from "react-hook-form";
import "./index.css";

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur", // Validation occurs when input loses focus
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    reset({
      login: "",
      firstName: "Пам'ятай",
      lastName: "Про курсову роботу",
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form для IPZ</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Login Field */}
        <label>
          Login:
          <input
            {...register("login", {
              required: "Поле обов'язкове для заповнення!",
              pattern: {
                value: /^[A-Za-z0-9_-]+$/,
                message:
                  "Логін повинен містити тільки латиницю, цифри, _ або -",
              },
            })}
            placeholder="Введіть логін"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
        </div>

        {/* FirstName Field */}
        <label>
          FirstName:
          <input
            {...register("firstName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів 5",
              },
            })}
            placeholder="Введіть ім'я"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>

        {/* LastName Field */}
        <label>
          LastName:
          <input
            {...register("lastName", {
              required: "Поле обов'язкове для заповнення!",
              minLength: {
                value: 5,
                message: "Мінімальна кількість символів 5",
              },
              maxLength: {
                value: 25,
                message: "Максимальна кількість символів 25",
              },
            })}
            placeholder="Введіть прізвище"
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
        </div>

        {/* Submit Button */}
        <input type="submit" value="ВІДПРАВИТИ" />
      </form>

      <hr />

      {/* Instructions */}
      <div style={{ color: "white", marginTop: 30 }}>
        <h3 style={{ color: "white", fontSize: 16, marginBottom: 10 }}>
          Інструкція:
        </h3>
        <ul style={{ color: "white", fontSize: 14, lineHeight: 1.8 }}>
          <li>Login: тільки латиниця (A-Z, a-z, 0-9, _, -)</li>
          <li>FirstName: мінімум 5 символів</li>
          <li>LastName: від 5 до 25 символів</li>
          <li>Перевірка: при втраті фокусу (onBlur)</li>
          <li>Після відправки поля скидаються з підказкою</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
