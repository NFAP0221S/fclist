import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/home";
import PostsList from "@/pages/posts";
import Detail from "@/pages/posts/detail";
import Edit from "@/pages/posts/edit";
import New from "@/pages/posts/new";
import Profile from "@/pages/profile";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/posts/new" element={<New />} />
        <Route path="/posts/edit/:id" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
}
