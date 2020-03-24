import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./store/actions/usersActions";
import CardLoader from "./components/CardLoader";
const UserCard = lazy(() => import("./components/UserCard"));

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(({ users }) => users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="row">
        <div className="col-12">
          <h1 className="h2 mb-4">All users</h1>
        </div>
        {state.users &&
          state.users.data.map(user => (
            <Suspense key={user.id} fallback={<CardLoader />}>
              <UserCard user={user} />
            </Suspense>
          ))}
      </div>
    </div>
  );
};

export default App;
