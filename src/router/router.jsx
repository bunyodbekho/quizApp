import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Exam from "../components/pages/exam/Exam";
import Groups from "../components/pages/groups/Groups";
import Tests from "../components/pages/tests/Tests";
import Users from "../components/pages/users/Users";
import CreateUser from "../components/pages/createUser/CreateUser";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Router({ isOpen, onClose }) {
  const token = useSelector((state) => state.user.token);
  const [isOutlet, setIsOultlet] = useState(false);

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
        <Route
          path="users"
          element={<Users isOutlet={isOutlet} setIsOultlet={setIsOultlet} />}
        >
          <Route
            path="create-user"
            element={
              <CreateUser isOutlet={isOutlet} setIsOultlet={setIsOultlet} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
