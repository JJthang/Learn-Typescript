'use client'
import React from 'react'
import Input from '@/components/Input'
import useMutation from './mutation'
import useLoginMutation from './mutation'

const LoginPage = () => {
  const {handSubmitForm, handleSubmit, register, errors} = useLoginMutation();
  return (
    <div className=''>
      <form action="" method="post" className='flex flex-col' onSubmit={handleSubmit(handSubmitForm)}>
        <Input placeholder='User name' type='text' {...register("fistName")} errorMessage={errors.fistName?.message} />
        <Input placeholder='Phone' type='text' {...register("phone")} errorMessage={errors.phone?.message} />
        <Input placeholder='Email' type='text' {...register("email")} errorMessage={errors.email?.message} />
        <button className='px-2 py-3 border'>Submit Form</button>
      </form>
    </div>
  )
}

export default LoginPage