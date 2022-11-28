import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppThunk, RootState } from '../../../reudx-toolkit/store';

// interface
interface IFormInput {
  name: String;
  email: String;
  password: String;
  phone: Number;
};

const Signup = () => {
  // useform hooks
  const { register, handleSubmit } = useForm<IFormInput>();
  // redux toolkit dispatch hooks
  const dispatch = useDispatch();
  const {data,error,status} = useSelector((state:AppThunk) => state);
  // router navigate hook
  const navigate = useNavigate();
  

  const handleSignup: SubmitHandler<IFormInput> = (data: IFormInput) => {
    console.log(data);
    dispatch(data);

    if (data) {
      navigate('/');
    }
  };

 
  
  return (
    <div className="container mx-auto">
      <div className="max-w-md p-5 mx-auto rounded-sm shadow-md my-14 bg-slate-100">
        <form className="flex flex-col w-full gap-y-5" onSubmit={handleSubmit(handleSignup)}>
          <input
            type="text"
            placeholder='name'
            className="border-none"
            {...register("name")}
          
          />
          <input
            type="email"
            placeholder='email'
            className="border-none"
            {...register("email")}
          
          />
          <input
            type="password"
            placeholder='password'
            className="border-none"
            {...register("password")}
          
          />
          <input
            type="number"
            placeholder='phone'
            className="border-none"
            {...register("phone")}
          
          />
          <input className="p-3 text-white bg-slate-500 hover:bg-slate-600" type="submit" />
        </form>
      </div>
      <div className='text-center'>
        <Link to="/login" className='text-center text-amber-400'>Already have account! please login</Link>
      </div>
    </div>
  );
};

export default Signup;