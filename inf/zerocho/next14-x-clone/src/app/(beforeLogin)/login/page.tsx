'use client';

import { useRouter } from "next/navigation";
import styles from "@/app/(beforeLogin)/_component/main.module.css";
import Image from "next/image";
import zLogo from "../../../../public/zlogo.png";
import Link from "next/link";

// import { redirect } from "next/navigation";

export default function Login() {
  // 서버에서 리다이렉트를 하면 인터셉팅이 제대로 이루어지지 않음
  // redirect("/i/flow/login");

  const router = useRouter();

  router.replace('/i/flow/login');

  return (
    <>
      <div className={styles.left}>
        <Image src={zLogo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        {/* <Link href="/i/flow/login" className={styles.login}>로그인</Link> */}
        <Link href="/login" className={styles.login}>로그인</Link>
      </div>
    </>
  )
}
