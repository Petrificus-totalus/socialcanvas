import FrontPage from "@/pages/FrontPage/frontpage";
import Service from "@/pages/Service/service";
import Contact from "@/pages/Contact/contact";
import Team from "@/pages/Team/team";

import Footer from "@/component/Footer/footer";

export default function Home() {
  return (
    <>
      <section id="frontpage">
        <FrontPage />
      </section>

      <section id="scroll_service">
        <Service />
      </section>
      <section id="scroll_team">
        <Team />
      </section>
      <section id="scroll_contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}
