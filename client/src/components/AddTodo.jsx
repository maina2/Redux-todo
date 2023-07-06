import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { addTodo } from "../redux/todoSlice"; // Import the Redux action
import "./addtodo.css";

export default function AddTodo() {
  const user = useSelector((state) => state.user.user); // Access the user state from Redux
  const dispatch = useDispatch(); // Access the dispatch function

  const schema = yup.object().shape({
    description: yup.string().required("description is required"),
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(addTodo({ description: data.description, token: user.token })); // Dispatch the addTodo action
    reset();
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <textarea
          {...register("description")}
          name="description"
          id="description"
        ></textarea>
        <p>{errors.description?.message}</p>
        <input className="submitBtn" type="submit" value="save" />
      </form>
    </div>
  );
}
