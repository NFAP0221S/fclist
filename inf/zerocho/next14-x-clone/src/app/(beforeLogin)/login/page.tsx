'use client';

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

// import { redirect } from "next/navigation";

export default function Login() {
  // 서버에서 리다이렉트를 하면 인터셉팅이 제대로 이루어지지 않음
  // redirect("/i/flow/login");

  const router = useRouter();

  router.replace('/i/flow/login');

  return (
    <Main />
  )
}
