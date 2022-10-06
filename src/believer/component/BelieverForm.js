import { useForm } from "react-hook-form";

const Error = ({ errorMsg }) => (
  <p className="text-sm text-red-500 my-2"> {errorMsg} </p>
);

const Label = (props) => (
  <label {...props} className="block text-md text-gray-500 my-2">
    {props.text}
  </label>
);

export const BelieverForm = () => {
  const inputStyle =
    "block w-full py-2 px-2 border-solid border-2 hover:border-blue-400 outline-4 outline-blue-400";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:8080/believer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        id: data.id,
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        birth: data.birth,
        phoneNumber: data.phone,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4 mt-5">
        <Label htmlFor="id" text="Indentifier" />
        <input
          type="number"
          className={inputStyle}
          placeholder="19238"
          {...register("id", { required: true })}
          aria-invalid={errors.id ? "true" : "false"}
          id="id"
        />
        {errors.firstName?.type === "required" && (
          <Error errorMsg="First name is required" />
        )}
      </div>

      <div className="my-4 mt-5">
        <Label htmlFor="firstName" text="Firstname" />
        <input
          className={inputStyle}
          placeholder="A Creative name here"
          {...register("firstName", { required: true })}
          aria-invalid={errors.firstName ? "true" : "false"}
          id="firstName"
        />
        {errors.firstName?.type === "required" && (
          <Error errorMsg="First name is required" />
        )}
      </div>

      <div className="my-4">
        <Label htmlFor="lastName" text="Lastname" />
        <input
          className={inputStyle}
          placeholder="A beautiful lastname"
          {...register("lastName", { required: "Lastname is required" })}
          aria-invalid={errors.lastName ? "true" : "false"}
          id="lastName"
        />
        {errors.lastName && <Error errorMsg={errors.lastName?.message} />}
      </div>

      <div className="my-4">
        <Label htmlFor="email" text="Email" />
        <input
          className={inputStyle}
          placeholder="example@gmail.com"
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
          id="email"
        />
        {errors.email && <Error errorMsg={errors.email?.message} />}
      </div>

      <div className="my-4">
        <Label htmlFor="phone" text="Phone" />
        <input
          placeholder="0123456789"
          className={inputStyle}
          {...register("phone")}
          aria-invalid={errors.phone ? "true" : "false"}
          id="phone"
        />
        {errors.phone && <Error errorMsg={errors.phone?.message} />}
      </div>

      <div className="my-4">
        <Label htmlFor="birth" text="Birth" />
        <input
          placeholder="2003-09-22"
          className={inputStyle}
          {...register("birth")}
          aria-invalid={errors.brith ? "true" : "false"}
          id="birth"
        />
        {errors.birth && <Error errorMsg={errors.birth?.message} />}
      </div>
      <input
        className="bg-blue-500 text-white px-5 py-4 hover:bg-blue-400 w-full"
        type="submit"
      />
    </form>
  );
};
