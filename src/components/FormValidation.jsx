import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
    const { register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(watch(data));
    }

  return (
    <>
    <div className='w-96 m-40 text-left'>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit(onSubmit)}>
            <label className='block text-gray-700  mt-3 mb-2'>First Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="firstName" placeholder='John'
            {...register("firstName", {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>First name is required</p>}
            {errors?.firstName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}

            <label className='block text-gray-700  mt-3 mb-2'>Last Name</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="lastName" placeholder='Doe'
            {...register("lastName", {
                pattern: /^[A-Za-z]+$/i
            })}
            
            />
            {errors?.lastName?.type === "pattern" && (<p className='text-red-500'>Alphabetical characters only</p>)}
            
            <label className='block text-gray-700  mt-3 mb-2'>Email</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="email" id="email" placeholder='example@gmail.com'
            {...register("email", {
                 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i 
            })}
            
            />
            {errors?.email?.type === "pattern" && (<p className='text-red-500'>Please write correct email address</p>)}

            <label className='block text-gray-700  mt-3 mb-2'>Password</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" id="password" placeholder='********'
            {...register("password", {
                 minLength: 8,
                 required: true 
            })}
            
            />
            {errors?.password?.type === "minLength" && (<p className='text-red-500'>Your password must be larger then 8 characters</p>)}
            {errors?.password?.type === "required" && (<p className='text-red-500'>Password is required</p>)}

            <label className='block text-gray-700  mt-3 mb-2'>Re type password</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" id="repassword" placeholder='********'
            {...register("repassword", {
                 minLength: 8,
                 required: true,
                 validate: (val) =>{
                    if(watch('password') !== val) {
                        return `${alert("Password does not match!")}`
                    }
                 }
            })}
            
            />
            {errors?.repassword?.type === "minLength" && (<p className='text-red-500'>Your password must be larger then 8 characters</p>)}
            {errors?.repassword?.type === "required" && (<p className='text-red-500'>Re type your password.</p>)}

            <label className='block text-gray-700  mt-3 mb-2'>Select Gender</label>
            <select id="gender" className='form-select shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register("gender")}
            >
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>


            <label className='block text-gray-700  mt-3 mb-2'>Date of birth</label>
            <input className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' type="date" id="dob"
            {...register("dob", {
                required: true,
            })}
            
            /> 
            {errors?.firstName?.type === "required" && <p className='text-red-500'>Date of birth is required</p>}


            <label className='block text-gray-700  mt-3 mb-2'>Any message</label>
            <textarea className='shadow appearance-none border rounded w-full py-2 px-3 textgray-700 leading-tight focus:outline-none focus:shadow-outline' rows="2" id="message"
            {...register("message", {
                required: true,
            })}
            
            >
                </textarea>
            {errors?.firstName?.type === "required" && <p className='text-red-500'>Date of birth is required</p>}



            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-3'>Submit</button>
        </form>
    </div>
    </>
  )
}

export default FormValidation