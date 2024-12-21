"use client";

import React from 'react'
import { SignIn } from '@clerk/nextjs';

const signIn = () => {
  return (
    <SignIn path="/sign-in" />
  )
}

export default signIn;