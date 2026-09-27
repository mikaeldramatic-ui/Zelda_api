import styles from "./About.module.css";

function About() {
  return (
    <main className={styles.about}>
      <div className={styles.img}>
        <h1 className={styles.h1}>About Zelda</h1>
        <blockquote className={styles.block}>
          "When the Beast Ganon reawakens, the Princess will need her Knight...
          and the Knight will need the sword that seals the darkness."
        </blockquote>
        <h2 className={styles.h2}>The story of Breath of the Wild</h2>
        <h3 className={styles.h3}>
          The 10,000 Years of Peace and Sheikah Technology
        </h3>
        <p className={styles.text}>
          Long before the events of Breath of the Wild, the kingdom of Hyrule
          had developed advanced technology created by the Sheikah. Their
          technology was designed to protect Hyrule from the recurring threat of
          Calamity Ganon.
        </p>
        <h3 className={styles.h3}>The Prophecy and the Great Calamity</h3>
        <p className={styles.text}>
          The Sheikah created thousands of Guardians and four enormous Divine
          Beasts (Vah Ruta, Vah Rudania, Vah Medoh and Vah Naboris) to protect
          Hyrule from the evil that was lurking around the world. But when
          Calamity Ganon approached, he was defeated and peace was restored to
          the world. After many years of peace, the old technology was forgotten
          and buried underground. But when the prophecy warned them that
          Calamity Ganon would return once again, the kingdom dug up the old
          machines again. Four champions were chosen to control the Divine
          Beasts, and Link was appointed as Zelda's personal knight.
        </p>
        <h3 className={styles.h3}>The Fall of Hyrule</h3>
        <p className={styles.text}>
          When Calamity Ganon returned, he took control of Hyrule's defenses and
          corrupted the Guardians and Divine Beasts, turning them against their
          creators. The kingdom fell in one night, King Rhoam and all four
          Champions were killed. And Link was mortally wounded while protecting
          Zelda.
        </p>
        <h3 className={styles.h3}>Zelda's Sacrifice and Link's Sleep</h3>
        <p className={styles.text}>
          Link was taken to the Shrine of Resurrection by Zelda to heal in a
          deep sleep. With hope fading, Zelda returned to the kingdom and used
          her sacred power to seal Calamity Ganon and restrain him for 100
          years.
        </p>
        <h3 className={styles.h3}>100 Years Later...</h3>
        <p className={styles.text}>
          Link finally awoke without any memories of his past. He was guided by
          a mysterious voice, which also gave him a Sheikah Slate. He had to
          explore the wilderness to regain his lost memories, free the Divine
          Beasts, and finally fight Ganon himself to save Princess Zelda, for
          she had been waiting for him for over a century.
        </p>
      </div>
    </main>
  );
}

export default About;
