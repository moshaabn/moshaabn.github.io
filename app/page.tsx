import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from 'antd';

export default function Home() {
  const { Title, Paragraph } = Typography;
  return (
    <main className={styles.main}>
      {/* Welcome to [Your Name]'s Tech Hub! 👋
Hello there! I'm Mohamed Shaaban, a passionate software engineer with a knack for both backend and front-end development, and occasional dives into the world of DevOps. 🚀

About Me:
I thrive in the dynamic realm of software development, blending creativity with technical expertise to craft seamless digital experiences. My journey in the tech world has equipped me with a versatile skill set, enabling me to bring ideas to life across various layers of a project.

What I Do:
Backend Maestro: From architecting robust server-side solutions to optimizing database performance, I'm your go-to person for all things backend.

Frontend Alchemist: I specialize in creating sleek and intuitive user interfaces. Transforming design concepts into responsive, user-friendly interfaces is where I excel.

DevOps Explorer: In the ever-evolving landscape of DevOps, I navigate the deployment and automation terrain, ensuring a smooth and efficient development pipeline.

Why Choose Me:
Passion for Excellence: I am committed to delivering high-quality solutions that exceed expectations.

Tech Enthusiast: I stay abreast of the latest technologies, always eager to implement cutting-edge tools in my projects.

Collaborative Approach: I believe in effective communication and collaboration to ensure project success.

Let's Connect:
I'm always open to exciting new projects and collaborations. If you're looking for a dedicated and skilled software engineer to bring your ideas to life, let's connect!

Contact Me | View My Portfolio */}
      <Title>Welcome to [Your Name]'s Tech Hub! 👋</Title>
      <Paragraph>
        Hello there! I'm Mohamed Shaaban, a passionate software engineer with a
        a knack for both backend and front-end development, and occasional dives
        into the world of DevOps. 🚀
      </Paragraph>
    </main>
  );
}
