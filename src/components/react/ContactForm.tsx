/**
 * ContactForm — a contact button that opens a glass modal form.
 *
 * Submits to Web3Forms (no backend needed on a static host). Drop your free
 * access key into WEB3FORMS_KEY to enable real delivery; until then it falls
 * back to a mailto: link so the prototype is never a dead end.
 */

import { useEffect, useRef, useState } from "react";
import { Mail, X, Send, Loader2, Check } from "lucide-react";

// TODO: paste a real key from https://web3forms.com (free). Empty = mailto fallback.
const WEB3FORMS_KEY = "";
const CONTACT_EMAIL = "dsolgodfrey@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  // Drive the native <dialog> from React state for proper a11y + ESC handling.
  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    if (!open && dlg.open) dlg.close();
  }, [open]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!WEB3FORMS_KEY) {
      // No key configured → open the user's mail client as a fallback.
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
        "Portfolio enquiry",
      )}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      data.append("access_key", WEB3FORMS_KEY);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <button
        type="button"
        className="social glass"
        aria-label="Contact"
        onClick={() => setOpen(true)}
      >
        <Mail size={20} strokeWidth={2} />
      </button>

      <dialog
        ref={dialogRef}
        className="contact-dialog"
        onClose={() => {
          setOpen(false);
          setStatus("idle");
        }}
        onClick={(e) => {
          // Click on the backdrop (the dialog element itself) closes it.
          if (e.target === dialogRef.current) setOpen(false);
        }}
      >
        <div className="contact-panel glass glass-strong">
          <button
            type="button"
            className="contact-close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>

          <h2>Get in touch</h2>
          <p className="contact-sub">
            Have a project, a question, or just want to say hi?
          </p>

          {status === "sent" ? (
            <p className="contact-success">
              <Check size={18} /> Thanks — I'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                <span>Name</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows={4} required />
              </label>

              {status === "error" && (
                <p className="contact-error">
                  Something went wrong — try emailing {CONTACT_EMAIL}.
                </p>
              )}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <style>{`
          .contact-dialog {
            border: none;
            background: transparent;
            padding: 0;
            max-width: 460px;
            width: calc(100vw - 2rem);
          }
          .contact-dialog::backdrop {
            background: rgba(30, 34, 66, 0.36);
            backdrop-filter: blur(6px);
          }
          .contact-panel {
            position: relative;
            padding: 2rem;
            border-radius: var(--r-lg);
            color: var(--c-text);
          }
          .contact-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            display: grid;
            place-items: center;
            width: 34px;
            height: 34px;
            border-radius: var(--r-pill);
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            color: var(--c-text-muted);
            cursor: pointer;
          }
          .contact-close:hover { color: var(--c-text); }
          .contact-panel h2 {
            font-family: var(--font-display);
            font-size: var(--fs-h2);
            margin-bottom: 0.25rem;
          }
          .contact-sub { color: var(--c-text-muted); margin-bottom: 1.25rem; }
          .contact-form { display: grid; gap: 0.9rem; }
          .contact-form label { display: grid; gap: 0.35rem; }
          .contact-form span {
            font-size: var(--fs-small);
            color: var(--c-text-muted);
          }
          .contact-form input,
          .contact-form textarea {
            font-family: var(--font-body);
            font-size: var(--fs-body);
            color: var(--c-text);
            background: var(--c-surface-2);
            border: 1px solid var(--glass-border);
            border-radius: var(--r-md);
            padding: 0.7rem 0.9rem;
            resize: vertical;
          }
          .contact-form input:focus,
          .contact-form textarea:focus {
            outline: none;
            border-color: var(--c-cyan);
          }
          .contact-form .btn-primary {
            justify-content: center;
            margin-top: 0.25rem;
          }
          .contact-success {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: var(--c-cyan);
            padding: 1rem 0;
          }
          .contact-error { color: #ff8b8b; font-size: var(--fs-small); }
          .spin { animation: spin 0.8s linear infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </dialog>
    </>
  );
}
