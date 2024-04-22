import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { SubmitHandler, useForm, UseFormGetValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authRequest } from "@/request/auth.request";

type FormValues = {
  fistName: string,
  phone: number,
  email: string
}

const schema = yup.object({
  fistName: yup.string().required(),
  phone: yup.number().required("phone must be requied"),
  email: yup.string().required().email()
})

const useLoginMutation = () => {

    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
      });
    const loginMutation = useMutation({
        mutationKey: ['auth-login'],
        mutationFn: authRequest.login
    });
      const handSubmitForm: SubmitHandler<FormValues> = (event) => {
        console.log(event);
        reset()
      }
    return {
        register,
        handleSubmit,
        handSubmitForm,
        errors
    }
}
export default useLoginMutation