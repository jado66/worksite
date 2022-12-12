import AppBase from "../components/utils/AppBase";
import { signOut } from "next-auth/react";
import ProtectedPage from "../components/utils/ProtectedPage";

export default function About() {
  return (
    <ProtectedPage>
        {/* <AppBase> */}
            <div className="text-center">
                <h1 className="h3">Admin</h1>
                <button className="btn btn-outline-brandbg" onClick={signOut}>Sign Out</button>
            </div>
        {/* </AppBase> */}
    </ProtectedPage>
  );
}
