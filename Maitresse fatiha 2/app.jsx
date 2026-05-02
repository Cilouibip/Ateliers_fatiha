const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "fille",
  "underlineColor": "coral",
  "showDoodles": true
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [modalOpen, setModalOpen] = useStateApp(false);

  // Apply underline color
  useEffectApp(() => {
    document.documentElement.style.setProperty(
      "--felt-color",
      tweaks.underlineColor === "yellow" ? "var(--felt)" : "var(--coral)"
    );
    // Update felt::after via class on body
    document.body.classList.toggle("felt-yellow-mode", tweaks.underlineColor === "yellow");
  }, [tweaks.underlineColor]);

  // Toggle doodles
  useEffectApp(() => {
    document.body.classList.toggle("no-doodles", !tweaks.showDoodles);
  }, [tweaks.showDoodles]);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);

  return (
    <>
      <Nav onCTA={open} />
      <Hero onCTA={open} variation={tweaks.heroVariant} />
      <Pain />
      <PromiseSection />
      <Skills />
      <Fatiha />
      <Yassine />
      <Format />
      <Filter />
      <LastArg />
      <FinalCTA onCTA={open} />
      <Foot />
      <ContactModal open={modalOpen} onClose={close} />

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero">
          <TweakRadio
            label="Photo principale"
            value={tweaks.heroVariant}
            onChange={(v) => setTweak("heroVariant", v)}
            options={[
              { value: "fille", label: "Fille / plante" },
              { value: "garcon", label: "Garçon / objet bois" },
            ]}
          />
        </TweakSection>
        <TweakSection title="Style">
          <TweakRadio
            label="Soulignage feutre"
            value={tweaks.underlineColor}
            onChange={(v) => setTweak("underlineColor", v)}
            options={[
              { value: "coral", label: "Corail" },
              { value: "yellow", label: "Jaune" },
            ]}
          />
          <TweakToggle
            label="Doodles aubergine"
            checked={tweaks.showDoodles}
            onChange={(v) => setTweak("showDoodles", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
