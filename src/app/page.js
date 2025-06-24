import FrontPage from "@/pages/FrontPage/frontpage";
import Service from "@/pages/Service/service";
import Contact from "@/pages/Contact/contact";
import Team from "@/pages/Team/team";

import styles from "./page.module.css";
import Footer from "@/component/Footer/footer";

export default function Home() {
  return (
    <>
      <section id="frontpage" className={styles.section}>
        <FrontPage />
      </section>

      <section id="scroll_service" className={styles.section}>
        <Service />
      </section>
      <section id="scroll_team" className={styles.section}>
        <Team />
      </section>
      <section id="scroll_contact" className={styles.section}>
        <Contact />
      </section>
      <Footer />
    </>
  );
}
