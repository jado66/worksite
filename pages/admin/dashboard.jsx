import { signOut } from "next-auth/react";
import Container from "../../components/utils/Container";
import ProtectedPage from "../../components/utils/ProtectedPage";

export default function About() {
  return (
    <ProtectedPage>
      <Container noFooter>
        <h1 className="h3 text-center mt-4">Admin Dashboard</h1>
        <hr className="bg-brand opacity-100"/>
      </Container>
    </ProtectedPage>
  );
}
