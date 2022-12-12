import AppBase from '../components/utils/AppBase';
import Container from '../components/utils/Container';
import ThemeSwitcher from '../components/utils/ThemeSwitcher';
import UnderConstructionPage from '../components/utils/UnderConstructionPage';

export default function Index() {
  return (
    <UnderConstructionPage>
      <Container>
        <ThemeSwitcher/>
      </Container>
    </UnderConstructionPage>
  );
}
