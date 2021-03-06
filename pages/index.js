import styles from "../styles/Home.module.css";

import Head from "next/head";

import { useWindowScroll } from "react-use";

import Avatar from "../components/Avatar/Avatar";
import MainButton from "../components/MainButton/MainButton";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import EssentialReads from "../components/EssentialReads/EssentialReads";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";

import { title } from "../config";

import {
  showMainButton,
  showAboutme,
  showProjects,
  showBooks,
  showAvatar,
} from "../config";
import { Fragment } from "react/cjs/react.production.min";

export default function Home() {
  const { x, y } = useWindowScroll();
  return (
    // TODO: Fix responsive behaviour
    // TODO: SEO best practices
    // TODO: Optimize images
    // TODO: Fix highlight color
    // ::selection {
    //   color: white !important;
    //   background: #143191 !important;
    // }
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles["main-container"]}>
        <Navbar />
        <div className={styles["theme-switch__container"]}>
          <ThemeSwitch />
        </div>
        {true && <BurgerMenu />}
        {showAvatar && <Avatar />}
        <Hero />
        {showMainButton && <MainButton />}
        {showAboutme && <AboutMe />}
        {showProjects && <Projects />}
        {showBooks && <EssentialReads />}
        <ContactMe />
        <Footer />
      </div>
    </Fragment>
  );
}
