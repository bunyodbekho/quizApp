import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Exam from "../components/pages/exam/Exam";
import Groups from "../components/pages/groups/Groups";
import Tests from "../components/pages/tests/Tests";
import Users from "../components/pages/users/Users";
import CreateUser from "../components/pages/createUser/CreateUser";
import { useSelector } from "react-redux";

export default function Router({ isOpen, onClose }) {
  const token = useSelector((state) => state.user.token);

  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout isOpen={isOpen} onClose={onClose} />}
      >
        <Route index element={<Navigate to="/" />} />
        <Route path="exam" element={<Exam />} />
        <Route path="groups" element={<Groups />} />
        <Route path="tests" element={<Tests />} />
        <Route path="users" element={<Users />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
