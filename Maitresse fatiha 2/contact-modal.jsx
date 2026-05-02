// Multi-step contact form modal

const { useState: useState_F, useEffect: useEffect_F } = React;

function ContactModal({ open, onClose }) {
  const [step, setStep] = useState_F(0);
  const [data, setData] = useState_F({
    parentName: "", phone: "", email: "",
    childName: "", childAge: "",
    concern: "", slots: [],
  });
  const [errors, setErrors] = useState_F({});
  const [submitted, setSubmitted] = useState_F(false);

  useEffect_F(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) {
      // reset after close anim
      setTimeout(() => { setStep(0); setSubmitted(false); setErrors({}); }, 300);
    }
  }, [open]);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const toggleSlot = (slot) => {
    setData((d) => ({ ...d, slots: d.slots.includes(slot) ? d.slots.filter(s => s !== slot) : [...d.slots, slot] }));
  };

  const validate = (s) => {
    const e = {};
    if (s === 0) {
      if (!data.parentName.trim()) e.parentName = "Votre prénom est requis";
      if (!data.phone.trim() || data.phone.replace(/\D/g,"").length < 8) e.phone = "Numéro WhatsApp valide requis";
      if (!data.email.includes("@")) e.email = "Email valide requis";
    }
    if (s === 1) {
      if (!data.childName.trim()) e.childName = "Prénom de l'enfant requis";
      if (!data.childAge || data.childAge < 4 || data.childAge > 12) e.childAge = "Âge entre 4 et 12 ans";
    }
    if (s === 2) {
      if (data.slots.length === 0) e.slots = "Choisissez au moins un créneau";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate(step)) setStep(step + 1); };
  const back = () => setStep(Math.max(0, step - 1));
  const submit = () => {
    if (!validate(2)) return;
    // Fake submit - in real life would POST somewhere
    setSubmitted(true);
  };

  const slots = [
    "Lundi matin", "Lundi soir",
    "Mardi matin", "Mardi soir",
    "Mercredi matin", "Mercredi soir",
    "Jeudi matin", "Jeudi soir",
    "Vendredi matin", "Vendredi soir",
    "Samedi matin", "Samedi après-midi",
  ];

  return (
    <div className={"modal-overlay " + (open ? "open" : "")} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>

        {!submitted ? (
          <>
            <div className="modal-progress">
              <span className={step >= 0 ? "done" : ""}></span>
              <span className={step >= 1 ? "done" : ""}></span>
              <span className={step >= 2 ? "done" : ""}></span>
            </div>

            {step === 0 && (
              <div>
                <h3>Vos coordonnées</h3>
                <p className="modal-step-sub">Étape 1 sur 3. On vous recontacte sous 48h pour fixer l'entretien.</p>
                <div className="modal-fields">
                  <div className="field">
                    <label>Votre prénom</label>
                    <input type="text" value={data.parentName} onChange={e => update("parentName", e.target.value)} placeholder="Nadia" />
                    {errors.parentName && <span className="field-error">{errors.parentName}</span>}
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Téléphone (WhatsApp)</label>
                      <input type="tel" value={data.phone} onChange={e => update("phone", e.target.value)} placeholder="06 12 34 56 78" />
                      {errors.phone && <span className="field-error">{errors.phone}</span>}
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" value={data.email} onChange={e => update("email", e.target.value)} placeholder="vous@exemple.com" />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <span></span>
                  <button className="btn btn-primary" onClick={next}>Continuer</button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3>Votre enfant</h3>
                <p className="modal-step-sub">Étape 2 sur 3. Quelques mots pour mieux préparer l'entretien.</p>
                <div className="modal-fields">
                  <div className="field-row">
                    <div className="field">
                      <label>Prénom de l'enfant</label>
                      <input type="text" value={data.childName} onChange={e => update("childName", e.target.value)} placeholder="Yassine" />
                      {errors.childName && <span className="field-error">{errors.childName}</span>}
                    </div>
                    <div className="field">
                      <label>Âge</label>
                      <input type="number" min="4" max="12" value={data.childAge} onChange={e => update("childAge", e.target.value)} placeholder="7" />
                      {errors.childAge && <span className="field-error">{errors.childAge}</span>}
                    </div>
                  </div>
                  <div className="field">
                    <label>Ce qui vous préoccupe (optionnel)</label>
                    <textarea value={data.concern} onChange={e => update("concern", e.target.value)} placeholder="Il a du mal à démarrer ses devoirs, il abandonne vite..." />
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="btn-back" onClick={back}>← Retour</button>
                  <button className="btn btn-primary" onClick={next}>Continuer</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3>Vos créneaux préférés</h3>
                <p className="modal-step-sub">Étape 3 sur 3. Cochez les moments où vous êtes disponible pour l'entretien (30 min, par téléphone ou en visio).</p>
                <div className="modal-fields">
                  <div className="slot-grid">
                    {slots.map(s => (
                      <label key={s}>
                        <input type="checkbox" checked={data.slots.includes(s)} onChange={() => toggleSlot(s)} />
                        {s}
                      </label>
                    ))}
                  </div>
                  {errors.slots && <span className="field-error">{errors.slots}</span>}
                </div>
                <div className="modal-actions">
                  <button className="btn-back" onClick={back}>← Retour</button>
                  <button className="btn btn-primary" onClick={submit}>Demander l'entretien</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <h3>Demande reçue, {data.parentName}.</h3>
            <p>Maîtresse Fatiha vous recontacte sous 48h sur WhatsApp ou par email pour fixer l'entretien et discuter ensemble du cycle.</p>
            <button className="btn btn-primary" onClick={onClose}>Fermer</button>
          </div>
        )}
      </div>
    </div>
  );
}

window.ContactModal = ContactModal;
