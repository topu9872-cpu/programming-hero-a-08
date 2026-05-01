"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import Image from "next/image";
import gicon from "@/assets/icons8-google.png";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SingUpPage = () => {
  const handleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors.name);
  const [isVisible, setIsVisible] = useState(false);
  const handleSingUp = async (formData) => {
    const { name, email, photo, password } = formData;
    console.log(formData);
    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });

    console.log(data, error);
    if (error) {
      return toast.error(error.message);
    } else if (data) {
      toast.success("Singup is Successful");
      router.push("/signin");
    }
  };

  return (
    <div className="mt-4">
      <Form
        className="flex w-96 flex-col gap-4 mx-auto pb-10 pt-4 border-6 border-[#fa3d3b] px-6 rounded-2xl"
        onSubmit={handleSubmit(handleSingUp)}
      >
        <h1 className="text-3xl text-[#fa3d3b] font-bold text-center">
          Signup
        </h1>
        <TextField type="text">
          <Label>Name</Label>
          <Input
            placeholder="Enter Your Name"
            {...register("name", {
              required: "Name is required",
            })}
          />
        </TextField>
        {errors?.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <TextField
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input
            placeholder="Enter Your Email"
            {...register("email", { required: true })}
          />
          <FieldError />
        </TextField>
        <TextField type="text">
          <Label>Image Url</Label>
          <Input
            placeholder="Enter Your Image Url"
            {...register("photo", {
              required: "Photo is required",
            })}
          />
          <FieldError />
        </TextField>
        {errors.photo && (
          <span className="text-sm text-red-500">Photo is required</span>
        )}
        <TextField
          className="w-full max-w-70"
          validate={(value) => {
            if (value.length < 6) {
              return "Password must be at least 6 characters";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full max-w-70"
              type={isVisible ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
              })}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </TextField>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <p className="opacity-40">write at least 6 leatters</p>

        <div className="flex gap-2">
          <Button
            type="submit "
            className="bg-[#fa3d3b] hover:text-[#fa3d3b] hover:bg-white border"
          >
            <Check />
            Signup
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div className="text-2xl font-bold mx-auto  ">
          <p className="text-sm text-center pb-2 opacity-80">or</p>
          <button
            onClick={handleSignUp}
            className="border bg-blue-500 items-center flex px-20  justify-center  hover:bg-white hover:text-blue-500 border-blue-500 text-white rounded-full"
          >
            <Image src={gicon} width={30} height={30} alt="Google " />
            oogle
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SingUpPage;
