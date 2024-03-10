import Image from "next/image";
import styles from "./page.module.css";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title>Welcome to Procode&apos;s Tech Hub! 👋</Title>
      <Paragraph>
        Hello there! I&apos;m Mohamed Shaaban, a passionate software engineer with a
        a knack for both backend and front-end development, and occasional dives
        into the world of DevOps. 🚀
      </Paragraph>
      <Title level={3}>About Me</Title>
      <Paragraph>
        I thrive in the dynamic realm of software development, blending
        creativity with technical expertise to craft seamless digital
        experiences. My journey in the tech world has equipped me with a
        versatile skill set, enabling me to bring ideas to life across various
        layers of a project.
      </Paragraph>
      <Title level={3}>What I Do</Title>
      <Paragraph>
        <ul>
          <li>
            <strong>Backend Maestro:</strong> From architecting robust server-side
            solutions to optimizing database performance, I&apos;m your go-to person
            for all things backend.
          </li>
          <li>
            <strong>Frontend Alchemist:</strong> I specialize in creating sleek and
            intuitive user interfaces. Transforming design concepts into
            responsive, user-friendly interfaces is where I excel.
          </li>
          <li>
            <strong>DevOps Explorer:</strong> In the ever-evolving landscape of
            DevOps, I navigate the deployment and automation terrain, ensuring a
            smooth and efficient development pipeline.
          </li>
        </ul>
      </Paragraph>
      <Title level={3}>Why Choose Me</Title>
      <Paragraph>
        <ul>
          <li>
            <strong>Passion for Excellence</strong> I am committed to delivering
            high-quality solutions that exceed expectations.
          </li>
          <li>
            <strong>Tech Enthusiast</strong> I stay abreast of the latest
            technologies, always eager to implement cutting-edge tools in my
            projects.
          </li>
          <li>
            <strong>Collaborative Approach</strong> I believe in effective
            communication and collaboration to ensure project success.
          </li>
        </ul>
      </Paragraph>
      <Title level={3}>Let&apos;s Connect</Title>
      <Paragraph>
        I&apos;m always open to exciting new projects and collaborations. If you&apos;re
        looking for a dedicated and skilled software engineer to bring your ideas
        to life, let&apos;s connect!
      </Paragraph>
      <Paragraph>
        <a href="mailto:mo.shaaban.dev@gmail.com">Contact Me</a> | <a target="_blank" href="https://www.linkedin.com/in/mohamed-shaaban-33b805ab/">View My Portfolio</a>
      </Paragraph>
      <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6900773962314342400?compact=1" height="399" width="710" frameBorder="0" allowFullScreen={true} title="Embedded post" ></iframe>

    </main>
  );
}
