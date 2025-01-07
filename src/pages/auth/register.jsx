import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Card from "src/components/Card";
import FormField from "src/components/FormField";
import Button from "src/components/Button";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "src/redux/UsersSlice";
// import { useMutation } from '@tanstack/react-query'
// import { registerUser } from 'src/services/users.services'

export default function Page() {
  const { loading } = useSelector((store) => store.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // If you are using react-query, register function will be something like this

  // const { isPending, mutateAsync } = useMutation({
  // 	mutationKey: ['login'],
  // 	mutationFn: (values) => loginUser(values),
  // 	onSuccess: (data) => {
  // 		if (data?.success) {
  // 			toast.success(data.message)
  // 			router.push('/login')
  // 		} else {
  // 			toast.warn(data.message)
  // 		}
  // 	},
  // 	onError: () => toast.error('Something went wrong'),
  // })

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),
      confirm_password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: async (values) => {
      try {
        // mutate(values)

        const res = await dispatch(registerUser(values));
        if (res.payload?.success) {
          toast.success(res.payload.message);
          navigate("/login");
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
      <h1 className="text-2xl font-bold">Register</h1>
      <Card className="flex flex-col gap-5">
        <FormField
          formik={formik}
          type="text"
          label="Full Name"
          name="fullname"
          placeholder="Enter your Full Name"
        />
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
        <FormField
          formik={formik}
          type="password"
          label="Confirm Password"
          name="confirm_password"
          placeholder="Confirm your password"
        />
        <Button onClick={formik.handleSubmit} disabled={loading}>
          Submit
        </Button>
      </Card>
    </div>
  );
}
