"use client";

import React from 'react'
import { SignUp } from '@clerk/nextjs';

const signUp = () => {
  return (
    <SignUp path="/sign-up" />
  )
}

export default signUp;