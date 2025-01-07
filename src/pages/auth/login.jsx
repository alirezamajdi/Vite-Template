import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

import Card from "src/components/Card";
import FormField from "src/components/FormField";
import Button from "src/components/Button";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "src/redux/UsersSlice";

const Login = () => {
  const { loading } = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await dispatch(loginUser(values));
        if (res.payload?.success) {
          toast.success(res.payload.message);
          navigate("/dashboard");
        } else {
          toast.warn(res.payload.message);
        }
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-2xl font-bold">Login to your account</h1>
      <Card className="flex flex-col gap-5">
        <FormField
          formik={formik}
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email address"
        />
        <FormField
          formik={formik}
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
        />
        <Button onClick={formik.handleSubmit} disabled={loading}>
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default Login;
