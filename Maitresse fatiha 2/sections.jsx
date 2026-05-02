// Sections components for Les Ateliers de Maîtresse Fatiha

const { useState, useEffect, useRef } = React;

/* ============================== NAV ============================== */
function Nav({ onCTA }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav " + (scrolled ? "scrolled" : "")}>
      <div className="wrap nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">F</span>
          <span className="brand-text">
            Les Ateliers
            <small>de Maîtresse Fatiha</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#fatiha">Maîtresse Fatiha</a>
          <a href="#methode">La méthode</a>
          <a href="#format">Le format</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn btn-primary" onClick={onCTA}>Demander un entretien</button>
      </div>
    </nav>
  );
}

/* ============================== HERO ============================== */
function Hero({ onCTA, variation }) {
  const isAlt = variation === "garcon";
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1 className="hero-title">
            Des enfants qui <span className="felt"><span>brillent</span></span>.<br/>
            Des parents fiers.
          </h1>
          <p className="hero-sub lede">
            Un cycle de 8 semaines en plein air pour aider votre enfant à se concentrer,
            persévérer et avancer seul. Encadré par Maîtresse Fatiha, 30 ans auprès des enfants. À Dar Bouazza.
          </p>
          <div className="hero-cta-row">
            <button className="btn btn-primary" onClick={onCTA}>
              Demander un entretien parent
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
            </button>
            <div>
              <div className="hero-cta-meta">8 enfants par groupe.</div>
              <div className="hero-cta-meta">Places limitées. Sur entretien.</div>
            </div>
          </div>
          <div className="hero-social">
            <div className="avatar-stack">
              <div className="ph-img" data-label="A1" style={{background:"#FFD83D"}}></div>
              <div className="ph-img" data-label="A2" style={{background:"#4A6FA5"}}></div>
              <div className="ph-img" data-label="A3" style={{background:"#FF6B4A"}}></div>
            </div>
            <div className="hero-social-text">
              <strong>30 ans d'expérience</strong>
              <span>auprès des enfants à Dar Bouazza</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="shape shape-blue"></div>
          <div className="shape shape-yellow"></div>
          <div className="shape shape-coral"></div>
          <div className="shape shape-cream"></div>
          <div className="hero-photo">
            <img
              src={isAlt ? "uploads/hero garcon v2.png" : "uploads/HERO fille V2.png"}
              alt={isAlt ? "Garçon avec mangeoire en bois" : "Fille avec pot de basilic"}
              className="hero-photo-img"
            />
          </div>
          <div className="hero-badge">
            <div className="hero-badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <div className="hero-badge-text">
              <strong>Cycle d'automne</strong>
              <small>Inscription ouverte sur entretien</small>
            </div>
          </div>
          <Doodle.Sun className="doodle doodle-sun" size={64} color="var(--aubergine)" />
          <Doodle.Spark className="doodle doodle-spark" size={32} color="var(--coral)" />
          <Doodle.Arrow className="doodle doodle-arrow" size={92} color="var(--coral)" />
        </div>
      </div>
    </section>
  );
}

/* ============================== PAIN ============================== */
function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <span className="section-eyebrow">Section 02 / Le constat</span>
        <h2 className="pain-title">
          Vous savez qu'il a le <span className="felt"><span>potentiel</span></span>.<br/>
          Mais à la maison, c'est une autre histoire.
        </h2>
        <div className="pain-cols">
          <div>
            <p>Il comprend vite, il pose de bonnes questions, il peut être brillant quand quelque chose l'intéresse. Vous le voyez. Vous savez ce dont il est capable.</p>
            <p>Mais au quotidien, c'est différent. Il faut le pousser pour qu'il commence. Il se disperse vite. Il abandonne dès que c'est difficile. Il négocie, il reporte, il s'énerve. Et les devoirs deviennent un rapport de force tous les soirs.</p>
          </div>
          <div>
            <p>Vous répétez les mêmes phrases. Concentre-toi. Termine ce que tu as commencé. Fais un effort.</p>
            <p>Et plus vous poussez, plus il résiste.</p>
          </div>
        </div>
        <p className="pain-final">
          Le problème n'est pas son intelligence. Le problème, c'est qu'il n'a pas encore appris à tenir tout seul.
        </p>
      </div>
    </section>
  );
}

/* ============================== PROMISE ============================== */
function PromiseSection() {
  return (
    <section className="promise">
      <div className="wrap">
        <div className="promise-grid">
          <div>
            <span className="section-eyebrow" style={{color:"rgba(250,246,238,0.6)"}}>Section 03 / La promesse</span>
            <h2>
              Quand votre enfant apprend à tenir seul, tout change.<br/>
              Il <span className="felt"><span>brille</span></span> à l'école. Vous respirez à la maison.
            </h2>
          </div>
          <div>
            <p style={{marginTop: 0}}>Les Ateliers de Maîtresse Fatiha, c'est un cycle éducatif construit pour installer chez l'enfant les habitudes qui font la différence en classe : se mettre au travail sans qu'on le pousse, rester concentré quand c'est difficile, terminer ce qu'il commence avec sérieux.</p>
            <ul className="promise-not">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                Ce n'est pas du soutien scolaire
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                Ce n'est pas une garderie premium
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
                Ce n'est pas une activité du mercredi
              </li>
            </ul>
            <p>Ces habitudes ne servent pas seulement aux ateliers. Elles servent quand il fait ses devoirs. Quand il écoute en classe. Quand il prépare une évaluation. Quand il décide de ne pas abandonner.</p>
          </div>
        </div>
        <div className="promise-callout">
          C'est ce qui sépare l'enfant qu'on remarque<br/>
          de l'enfant qu'on oublie.
        </div>
      </div>
    </section>
  );
}

/* ============================== 4 SKILLS ============================== */
function Skills() {
  const cards = [
    { cls: "skill-1", num: "01", icon: <Doodle.Flag size={56} color="var(--aubergine)" />, title: "Démarrer sans qu'on le pousse",
      body: "Beaucoup d'enfants savent faire. Mais ils n'arrivent pas à commencer. Ici, votre enfant apprend à se mettre en mouvement seul.",
      observe: "Moins de résistance, plus d'initiative." },
    { cls: "skill-2", num: "02", icon: <Doodle.Mountain size={56} color="#fff" />, title: "Tenir quand c'est difficile",
      body: "La réussite ne dépend pas seulement de l'intelligence. Elle dépend de la capacité à rester engagé quand ça coince.",
      observe: "Moins d'abandon, plus de patience." },
    { cls: "skill-3", num: "03", icon: <Doodle.Wave size={56} color="#fff" />, title: "Encaisser sans craquer",
      body: "L'enfant qui ne supporte pas l'erreur finit par fuir l'effort. Aux ateliers, l'erreur devient normale, on ajuste, on recommence.",
      observe: "Moins de crises, plus de calme." },
    { cls: "skill-4", num: "04", icon: <Doodle.Plant size={56} color="var(--aubergine)" />, title: "Aller jusqu'au bout",
      body: "Beaucoup d'enfants commencent. Peu terminent. Votre enfant apprend la satisfaction de finir, de voir le résultat, d'en être fier.",
      observe: "Plus de sérieux, plus de fierté personnelle." },
  ];
  return (
    <section className="skills" id="methode">
      <div className="wrap">
        <div className="skills-head">
          <div>
            <span className="section-eyebrow">Section 04 / La méthode</span>
            <h2>4 compétences qui changent tout. <br/>À l'école comme à la maison.</h2>
          </div>
          <p className="lede">
            Pas de théorie, pas d'écran, pas de discours. Votre enfant apprend en faisant : jardiner,
            construire, cuisiner, observer, réparer. À travers ces projets concrets, Maîtresse Fatiha
            installe quatre comportements observables.
          </p>
        </div>
        <div className="skills-grid">
          {cards.map((c, i) => (
            <div key={i} className={"skill-card " + c.cls}>
              <div className="doodle-corner">{c.icon}</div>
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="observe"><strong>Ce que vous remarquerez : </strong>{c.observe}</div>
            </div>
          ))}
        </div>
        <div className="skills-photo-row">
          <figure className="skills-photo skills-photo-wide">
            <img src="uploads/04_17_53.png" alt="Garçon concentré qui peint au chevalet" />
            <figcaption>Concentré. Sans qu'on le pousse.</figcaption>
          </figure>
          <figure className="skills-photo">
            <img src="uploads/04_22_44.png" alt="Maîtresse Fatiha transmet à 3 enfants autour des plantes aromatiques" />
            <figcaption>Apprendre en faisant, ensemble.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============================== FATIHA ============================== */
function Fatiha() {
  return (
    <section className="fatiha" id="fatiha">
      <div className="wrap">
        <span className="section-eyebrow">Section 05 / Maîtresse Fatiha</span>
        <div className="fatiha-grid">
          <div>
            <div className="fatiha-photo-wrap">
              <img
                src="uploads/04_16_06.png"
                alt="Portrait de Maîtresse Fatiha sous la pergola en bambou"
                className="fatiha-photo-img"
              />
              <div className="fatiha-photo-tag">
                <strong>Fatiha Ben Chaffi</strong>
                <span>Dar Bouazza · 30+ ans d'expérience</span>
              </div>
            </div>
          </div>
          <div className="fatiha-text">
            <h2>30 ans à voir ce qui bloque vraiment chez un enfant.</h2>
            <p>Fatiha Ben Chaffi accompagne les enfants depuis plus de 30 ans.</p>
            <p>À Dar Bouazza, beaucoup la connaissent simplement comme Maîtresse Fatiha. Des anciens élèves, devenus adultes, l'arrêtent encore dans la rue. Des parents se souviennent de son exigence, de sa présence, de sa capacité à cadrer un enfant sans le casser.</p>
            <p>Son expérience lui a appris une chose simple : un enfant ne progresse pas seulement parce qu'on lui explique plus. Il progresse quand il apprend à tenir dans l'effort, à faire seul, à terminer.</p>
            <blockquote className="fatiha-quote">
              Quand un enfant me dit je n'y arrive pas, je ne réponds jamais mais si tu peux. Je commence par accueillir. Puis je découpe la tâche en plus petit. Et je fais avec lui, jusqu'à ce qu'il puisse faire seul.
              <cite>— Maîtresse Fatiha</cite>
            </blockquote>
          </div>
        </div>
        <div className="polaroid-row">
          <figure className="polaroid">
            <img src="uploads/04_17_01.png" alt="Mains d'enfant qui plantent du basilic" />
            <figcaption>Le jardin nourrit le corps et l'esprit</figcaption>
          </figure>
          <figure className="polaroid">
            <img src="uploads/atelier peintue v1.png" alt="Enfant qui peint des tournesols à l'aquarelle" />
            <figcaption>Concentré, sans qu'on le pousse</figcaption>
          </figure>
          <figure className="polaroid">
            <img src="uploads/04_19_10.png" alt="Trois enfants qui pétrissent ensemble" />
            <figcaption>On fait ensemble, on partage</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============================== YASSINE ============================== */
function Yassine() {
  return (
    <section className="yassine" id="temoignages">
      <div className="wrap">
        <div className="yassine-inner">
          <span className="section-eyebrow">Section 06 / Histoire vraie</span>
          <h2>
            Yassine est arrivé en disant "je suis nul".<br/>
            Voici comment il est <span className="felt"><span>reparti</span></span>.
          </h2>
          <div className="yassine-photo">
            <img
              src="uploads/04_21_37.png"
              alt="Yassine de profil, qui assemble une construction en bois dans la lumière dorée"
              className="yassine-photo-img"
            />
          </div>
          <p>Yassine avait 7 ans quand il est arrivé aux ateliers. Il était fermé. Il ne parlait presque pas, évitait le regard. Et surtout, il répétait une phrase comme un disque rayé.</p>
          <p className="solo">"Je suis nul."</p>
          <p>Dès qu'une activité demandait un effort, il refusait. Il abandonnait avant d'essayer. Pour lui, échouer était devenu plus douloureux qu'attendre dans son coin.</p>
          <p>Maîtresse Fatiha n'a pas cherché à lui apprendre quoi que ce soit pendant les premières semaines. Elle a juste joué avec lui. Construire, démonter, recommencer. Sans enjeu. Sans note. Sans regard qui juge.</p>
          <p>Petit à petit, elle a glissé des mini-défis. Si petits qu'il les remarquait à peine. Et à chaque réussite, elle le faisait verbaliser : "C'est toi qui l'as fait."</p>
          <p>Au bout de quelques semaines, il a commencé à essayer. Puis à demander.</p>
          <p>Un jour, il a dit une phrase que Maîtresse Fatiha n'oubliera jamais.</p>
          <div className="yassine-quote">
            <q>Attends, je veux essayer tout seul.</q>
          </div>
          <p className="yassine-close">Ce n'était plus un enfant qui fuyait. C'était un enfant qui osait. Et ça, ça change tout pour la suite de sa vie.</p>
        </div>
      </div>
    </section>
  );
}

/* ============================== FORMAT ============================== */
function Format() {
  const cols = [
    { eyebrow: "Le rythme", title: "8 semaines, 2 fois par semaine",
      items: ["8 semaines de cycle", "2 séances par semaine", "Mercredi 14h–17h + samedi 9h–12h", "En plein air, sans écran"] },
    { eyebrow: "Le groupe", title: "8 enfants maximum, jamais plus",
      items: ["8 enfants par groupe", "Tranches d'âge séparées (5–7 / 8–10)", "Maîtresse Fatiha + 1 assistante", "Suivi individuel par enfant"] },
    { eyebrow: "Le suivi", title: "Du premier entretien au carnet final",
      items: ["Entretien parent avant inscription", "Point parent à mi-cycle", "Carnet de progression remis en fin de cycle", "Retour individuel sur les 4 compétences"] },
  ];
  return (
    <section className="format" id="format">
      <div className="wrap">
        <span className="section-eyebrow" style={{color:"rgba(250,246,238,0.6)"}}>Section 07 / Le format</span>
        <h2 className="format-head">Un cycle de 8 semaines.<br/>8 enfants maximum. Sur entretien.</h2>
        <div className="format-banner">
          <img src="uploads/04_25_08.png" alt="Le lieu : pergola en bambou, jardin luxuriant à Dar Bouazza" />
        </div>
        <div className="format-grid">
          {cols.map((c, i) => (
            <div key={i} className="format-col">
              <div className="format-col-eyebrow">{c.eyebrow}</div>
              <h3>{c.title}</h3>
              <ul>{c.items.map((x, j) => <li key={j}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="scarcity">
          <div>
            <h3>Pourquoi seulement 8 enfants par groupe ?</h3>
            <p>Parce qu'avec plus, on ne peut plus voir. Maîtresse Fatiha veut pouvoir observer comment chaque enfant démarre, réagit à l'erreur, coopère, termine. Au-delà de 8, ce regard n'est plus possible. C'est ce regard qui fait toute la différence.</p>
          </div>
          <div className="scarcity-badge">
            <div className="big">16</div>
            <div>places au total pour le prochain cycle</div>
            <small>Une fois prises, le cycle suivant démarre dans 3 mois.</small>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== FILTER ============================== */
function Filter() {
  const yes = [
    "Il est intelligent mais ses résultats sont irréguliers",
    "Il a besoin qu'on le pousse pour démarrer ses devoirs",
    "Il abandonne dès que ça devient difficile",
    "Il passe trop de temps devant les écrans",
    "Il manque de confiance malgré ses capacités",
    "Il commence beaucoup de choses, en termine peu",
  ];
  const no = [
    "Vous cherchez une garderie ponctuelle",
    "Vous voulez seulement l'occuper pendant que vous travaillez",
    "Vous attendez une garantie de notes immédiate",
    "Il a besoin d'un accompagnement thérapeutique spécialisé",
    "Vous n'êtes pas prêt à inscrire pour un cycle complet",
  ];
  return (
    <section className="filter" id="faq">
      <div className="wrap">
        <span className="section-eyebrow">Section 08 / Pour qui</span>
        <div className="filter-head">
          <h2>Ce n'est pas pour tous les enfants. Et c'est volontaire.</h2>
          <p className="lede" style={{maxWidth: "62ch", marginTop: 22}}>
            On filtre les inscriptions parce que les groupes sont petits et que l'expérience doit être réelle pour chaque enfant. L'entretien parent sert à vérifier que le format est adapté.
          </p>
        </div>
        <div className="filter-grid">
          <div className="filter-col filter-col-yes">
            <h3><span className="pill">Oui</span><br/>C'est pour votre enfant si :</h3>
            <ul>
              {yes.map((x, i) => (
                <li key={i}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-col filter-col-no">
            <h3><span className="pill">Non</span><br/>Ce n'est pas pour vous si :</h3>
            <ul>
              {no.map((x, i) => (
                <li key={i}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14"/></svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================== LAST ARG ============================== */
function LastArg() {
  return (
    <section className="lastarg">
      <div className="wrap">
        <span className="section-eyebrow">Section 09 / Le moment</span>
        <h2>Le moment où votre enfant prend ses habitudes, c'est maintenant.</h2>
        <p>Entre 5 et 10 ans, l'enfant installe les habitudes qui le porteront pendant toute sa scolarité. Pas seulement les habitudes scolaires. Les habitudes face à l'effort, face à l'erreur, face au doute.</p>
        <p>Plus tard, il sera plus difficile de revenir en arrière.</p>
        <p>Ce que Maîtresse Fatiha installe en 8 semaines, votre enfant le portera pendant 15 ans d'école.</p>
        <p className="stinger">C'est l'avantage qui se voit en classe. Et qui se ressent à la maison.</p>
      </div>
    </section>
  );
}

/* ============================== FINAL CTA ============================== */
function FinalCTA({ onCTA }) {
  return (
    <section className="cta-final">
      <div className="wrap">
        <span className="section-eyebrow" style={{display:"flex",justifyContent:"center"}}>Section 10 / Demandez un entretien</span>
        <h2>
          Donnez-lui les conditions pour qu'il <span className="felt"><span>brille</span></span>.
        </h2>
        <p className="lede">
          Demandez un entretien parent. C'est gratuit, sans engagement, et ça nous permet
          de vérifier ensemble si le cycle est adapté à votre enfant.
        </p>
        <button className="btn btn-primary" onClick={onCTA} style={{padding:"22px 38px",fontSize:18}}>
          Demander un entretien parent
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
        </button>
        <div className="sub-cta">
          <button className="btn-link" onClick={() => window.open("https://wa.me/", "_blank")}>
            Vous préférez en parler d'abord ? Écrivez-nous sur WhatsApp.
          </button>
        </div>
        <div className="cta-final-meta">
          Cycle de 8 semaines · 8 enfants par groupe · Dar Bouazza · Maîtresse Fatiha, 30 ans auprès des enfants
        </div>
      </div>
    </section>
  );
}

/* ============================== FOOTER ============================== */
function Foot() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{color: "var(--cream)"}}>
              <span className="brand-mark">F</span>
              <span className="brand-text">
                Les Ateliers
                <small style={{color:"rgba(250,246,238,0.5)"}}>de Maîtresse Fatiha</small>
              </span>
            </div>
            <p style={{color:"rgba(250,246,238,0.55)", fontSize:14, marginTop: 18, maxWidth: 36 + "ch"}}>
              Un cycle éducatif en plein air à Dar Bouazza pour aider votre enfant à se concentrer, persévérer et avancer seul.
            </p>
          </div>
          <div>
            <h4>Naviguer</h4>
            <a href="#methode">La méthode</a>
            <a href="#fatiha">Maîtresse Fatiha</a>
            <a href="#format">Le format</a>
            <a href="#temoignages">Témoignages</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="#">Dar Bouazza, Casablanca</a>
            <a href="#">WhatsApp</a>
            <a href="#">contact@ateliers-fatiha.ma</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Les Ateliers de Maîtresse Fatiha</span>
          <span>Cycle d'automne · Inscription sur entretien</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Pain, PromiseSection, Skills, Fatiha, Yassine, Format, Filter, LastArg, FinalCTA, Foot });
