const profileBase64 = "__PROFILE_BASE64__";
const cvBase64 = "__CV_BASE64__";
const logoBase64 = "__FJMT_LOGO_BASE64__";

const page = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="The electrical engineering, automation, embedded systems, and programming portfolio of Femiel Jubil M. Tambunan.">
    <meta name="theme-color" content="#090a08">
    <title>Femiel Jubil M. Tambunan - Portfolio</title>
    <style>
      :root {
        color-scheme: dark;
        --ink: #090a08;
        --surface: #11120f;
        --surface-2: #171813;
        --yellow: #f0d326;
        --paper: #f4f1e5;
        --muted: #a3a293;
        --line: rgba(244, 241, 229, 0.12);
        --yellow-line: rgba(240, 211, 38, 0.28);
        --max: 1160px;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        overflow-x: hidden;
        background:
          radial-gradient(circle at 76% 9%, rgba(240, 211, 38, 0.055), transparent 27rem),
          var(--ink);
        color: var(--paper);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        line-height: 1.6;
      }

      a { color: inherit; }
      img { display: block; max-width: 100%; }
      button, a { -webkit-tap-highlight-color: transparent; }
      :focus-visible { outline: 3px solid var(--yellow); outline-offset: 4px; }
      section { scroll-margin-top: 76px; }
      .shell { width: min(calc(100% - 40px), var(--max)); margin-inline: auto; }
      .skip-link { position: fixed; top: 10px; left: 10px; z-index: 110; transform: translateY(-160%); background: var(--yellow); color: var(--ink); padding: 9px 13px; font-weight: 900; }
      .skip-link:focus { transform: translateY(0); }

      body.intro-active { overflow: hidden; }
      .intro {
        position: fixed;
        inset: 0;
        z-index: 1000;
        display: grid;
        place-items: center;
        overflow: hidden;
        min-height: 100svh;
        background: #000;
        color: var(--paper);
        isolation: isolate;
      }
      .intro[hidden] { display: none; }
      .intro::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        background:
          radial-gradient(circle at 84% 48%, rgba(240, 211, 38, 0.1), transparent 25rem),
          linear-gradient(90deg, rgba(240, 211, 38, 0.018), transparent 38%);
      }
      .intro-field { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; opacity: 0.76; }
      .intro-grid { position: absolute; inset: 0; z-index: 1; opacity: 0.12; background-image: linear-gradient(rgba(240, 211, 38, 0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 211, 38, 0.16) 1px, transparent 1px); background-size: 72px 72px; mask-image: linear-gradient(90deg, #000, transparent 70%); }
      .intro-meta { position: absolute; top: 30px; left: 34px; z-index: 5; color: rgba(244, 241, 229, 0.48); font: 800 9px/1.65 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.17em; text-transform: uppercase; }
      .intro-meta strong { display: block; color: var(--yellow); font-size: 11px; }
      .intro-skip { position: absolute; top: 30px; right: 34px; z-index: 7; border: 0; border-bottom: 1px solid rgba(240, 211, 38, 0.35); padding: 7px 0; background: transparent; color: var(--muted); cursor: pointer; font: 850 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.14em; text-transform: uppercase; transition: color 180ms ease, border-color 180ms ease; }
      .intro-skip:hover { color: var(--yellow); border-color: var(--yellow); }
      .intro-side { position: absolute; inset: 0 0 0 auto; z-index: 2; width: clamp(190px, 16.666vw, 320px); border-left: 1px solid rgba(240, 211, 38, 0.2); background: linear-gradient(90deg, transparent, rgba(240, 211, 38, 0.045)); }
      .intro-side::before { content: ""; position: absolute; inset: 0; opacity: 0.52; background: repeating-linear-gradient(-45deg, transparent 0 26px, rgba(240, 211, 38, 0.055) 27px 28px); }
      .intro-side::after { content: "01 / FJMT"; position: absolute; right: 18px; bottom: 28px; color: rgba(240, 211, 38, 0.46); font: 850 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.17em; writing-mode: vertical-rl; }
      .intro-bird { position: absolute; top: 50%; right: clamp(7px, 1.5vw, 28px); width: clamp(155px, 15vw, 270px); transform: translate3d(7%, -50%, 0); animation: birdHover 4.6s ease-in-out infinite; will-change: transform, filter; }
      .intro-bird::after { content: ""; position: absolute; top: 54%; right: 72%; z-index: -1; width: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--yellow)); box-shadow: 0 -12px rgba(240, 211, 38, 0.24), 0 12px rgba(240, 211, 38, 0.13); opacity: 0; }
      .intro-bird img { width: 100%; filter: drop-shadow(0 0 24px rgba(240, 211, 38, 0.18)); }
      .intro.exiting .intro-bird { animation: birdFlyLeft 1.28s cubic-bezier(0.55, 0, 0.16, 1) forwards; }
      .intro.exiting .intro-bird::after { animation: flightTrail 850ms 80ms ease-out forwards; }
      .intro.exiting { animation: introCurtain 1.18s 340ms cubic-bezier(0.78, 0, 0.18, 1) forwards; pointer-events: none; }
      .intro-center { position: relative; z-index: 4; width: min(calc(100% - 52px), 570px); margin-right: clamp(92px, 12vw, 205px); text-align: center; }
      .intro-mark { width: 76px; height: 76px; margin: 0 auto 22px; opacity: 0; transform: translateY(8px) scale(0.9); transition: opacity 500ms ease, transform 720ms cubic-bezier(0.2, 0.8, 0.2, 1); }
      .intro-mark img { width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 0 18px rgba(240, 211, 38, 0.14)); }
      .intro.ready .intro-mark { opacity: 1; transform: translateY(0) scale(1); }
      .intro-kicker { margin: 0 0 16px; color: var(--yellow); font: 850 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.24em; text-transform: uppercase; }
      .intro-title { margin: 0; font-size: clamp(58px, 9vw, 108px); line-height: 0.78; letter-spacing: -0.078em; text-transform: uppercase; }
      .intro-title span { display: block; margin: 23px 0 0 0.34em; color: var(--yellow); font: 850 0.17em/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.34em; }
      .intro-copy { max-width: 430px; margin: 25px auto 0; color: var(--muted); font: 700 10px/1.75 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.11em; text-transform: uppercase; }
      .intro-status { display: inline-flex; align-items: center; gap: 9px; margin-top: 24px; color: rgba(244, 241, 229, 0.48); font: 800 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.15em; text-transform: uppercase; }
      .intro-status::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: #68685e; }
      .intro.ready .intro-status { color: var(--yellow); }
      .intro.ready .intro-status::before { background: var(--yellow); box-shadow: 0 0 0 6px rgba(240, 211, 38, 0.09); animation: pulse 1.8s ease-in-out infinite; }
      .enter-control { --drag-x: 0px; position: relative; width: min(100%, 354px); height: 62px; margin: 25px auto 0; overflow: hidden; border: 1px solid rgba(240, 211, 38, 0.38); border-radius: 999px; background: rgba(240, 211, 38, 0.035); color: var(--paper); cursor: grab; touch-action: none; opacity: 0.38; transition: opacity 250ms ease, border-color 220ms ease, box-shadow 220ms ease; }
      .enter-control:disabled { cursor: wait; }
      .intro.ready .enter-control { opacity: 1; }
      .enter-control:not(:disabled):hover { border-color: var(--yellow); box-shadow: 0 0 30px rgba(240, 211, 38, 0.1); }
      .enter-control.dragging { cursor: grabbing; }
      .enter-label { position: absolute; inset: 0; display: grid; place-items: center; padding-left: 38px; font: 900 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.16em; text-transform: uppercase; }
      .enter-knob { position: absolute; top: 6px; left: 6px; z-index: 2; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: var(--yellow); color: var(--ink); font-size: 20px; font-weight: 950; transform: translate3d(var(--drag-x), 0, 0); transition: transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1); }
      .enter-control.dragging .enter-knob { transition: none; }
      .intro.ready .enter-control:not(.dragging) .enter-knob { animation: knobNudge 2.8s ease-in-out infinite; }

      @keyframes birdHover { 0%, 100% { transform: translate3d(7%, -50%, 0) rotate(-1.5deg); } 50% { transform: translate3d(-2%, calc(-50% - 13px), 0) rotate(1.7deg); } }
      @keyframes birdFlyLeft { 0% { transform: translate3d(7%, -50%, 0) rotate(-1deg) scale(1); } 17% { transform: translate3d(22%, calc(-50% - 17px), 0) rotate(5deg) scale(0.97); } 100% { transform: translate3d(-158vw, calc(-50% - 46px), 0) rotate(-9deg) scale(0.76); } }
      @keyframes flightTrail { 0% { width: 0; opacity: 0; } 25% { opacity: 0.78; } 100% { width: 58vw; opacity: 0; } }
      @keyframes introCurtain { to { transform: translate3d(-100%, 0, 0); } }
      @keyframes knobNudge { 0%, 68%, 100% { transform: translate3d(var(--drag-x), 0, 0); } 82% { transform: translate3d(calc(var(--drag-x) + 10px), 0, 0); } }

      .progress { position: fixed; inset: 0 auto auto 0; z-index: 100; width: 0; height: 2px; background: var(--yellow); box-shadow: 0 0 16px rgba(240, 211, 38, 0.55); }

      header {
        position: sticky;
        top: 0;
        z-index: 80;
        border-bottom: 1px solid var(--line);
        background: rgba(9, 10, 8, 0.88);
        backdrop-filter: blur(18px);
      }

      .nav { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 28px; }
      .brand { flex: 0 0 auto; display: inline-flex; align-items: center; gap: 11px; text-decoration: none; }
      .brand-image { width: 38px; height: 38px; overflow: hidden; border: 1px solid var(--yellow-line); border-radius: 50%; background: #000; }
      .brand-image img { width: 100%; height: 100%; object-fit: contain; padding: 4px; transform: scale(1); filter: drop-shadow(0 0 8px rgba(240, 211, 38, 0.15)); transition: transform 320ms ease; }
      .brand:hover .brand-image img { transform: scale(1.08) rotate(-5deg); }
      .brand strong { display: block; font-size: 14px; line-height: 1; letter-spacing: 0.08em; }
      .brand small { display: block; margin-top: 5px; color: var(--muted); font: 700 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.15em; text-transform: uppercase; }
      nav { min-width: 0; }
      nav ul { display: flex; align-items: center; gap: 22px; margin: 0; padding: 0; list-style: none; }
      nav a { position: relative; padding: 27px 0 25px; color: var(--muted); text-decoration: none; font: 800 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.11em; text-transform: uppercase; transition: color 180ms ease; }
      nav a::after { content: ""; position: absolute; inset: auto 0 -1px; height: 2px; background: var(--yellow); transform: scaleX(0); transform-origin: left; transition: transform 220ms ease; }
      nav a:hover, nav a[aria-current="true"] { color: var(--paper); }
      nav a[aria-current="true"]::after { transform: scaleX(1); }

      .hero { position: relative; min-height: calc(100svh - 70px); display: grid; align-items: center; overflow: hidden; border-bottom: 1px solid var(--line); }
      #hero-field { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0.68; mask-image: linear-gradient(90deg, #000, transparent 76%); }
      .hero-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(360px, 0.72fr); align-items: center; gap: clamp(50px, 8vw, 118px); padding: 76px 0; }
      .eyebrow, .kicker, .project-code { color: var(--yellow); font: 850 10px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.17em; text-transform: uppercase; }
      .availability { display: inline-flex; align-items: center; gap: 9px; margin-bottom: 26px; color: var(--muted); font: 800 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.1em; text-transform: uppercase; }
      .availability::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--yellow); box-shadow: 0 0 0 5px rgba(240, 211, 38, 0.08); animation: pulse 2.4s ease-in-out infinite; }
      h1 { max-width: 740px; margin: 14px 0 0; font-size: clamp(56px, 8.2vw, 108px); line-height: 0.86; letter-spacing: -0.072em; text-transform: uppercase; }
      h1 span { display: block; color: var(--yellow); }
      .hero-role { max-width: 680px; margin: 28px 0 0; font-size: clamp(17px, 2vw, 22px); font-weight: 650; line-height: 1.45; }
      .hero-summary { max-width: 620px; margin: 17px 0 0; color: var(--muted); font-size: 14px; }
      .actions { display: flex; flex-wrap: wrap; gap: 11px; margin-top: 30px; }
      .button { display: inline-flex; min-height: 47px; align-items: center; justify-content: center; gap: 10px; padding: 0 18px; border: 1px solid var(--yellow); background: var(--yellow); color: var(--ink); text-decoration: none; font: 900 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.1em; text-transform: uppercase; transition: transform 180ms ease, background 180ms ease; }
      .button:hover { transform: translateY(-2px); background: #ffe33c; }
      .button.secondary { border-color: rgba(244, 241, 229, 0.26); background: transparent; color: var(--paper); }
      .button.secondary:hover { border-color: var(--yellow); color: var(--yellow); }
      .facts { display: flex; flex-wrap: wrap; gap: 25px; margin: 34px 0 0; padding: 24px 0 0; border-top: 1px solid var(--line); }
      .fact strong { display: block; font-size: 15px; }
      .fact span { color: var(--muted); font: 700 9px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.1em; text-transform: uppercase; }

      .portrait { position: relative; justify-self: end; width: min(100%, 455px); margin: 0; will-change: transform; transition: transform 220ms ease-out; }
      .portrait::before { content: ""; position: absolute; inset: 16px -16px -16px 16px; z-index: -1; border: 1px solid var(--yellow-line); }
      .portrait-media { position: relative; overflow: hidden; aspect-ratio: 4 / 5; border: 1px solid rgba(244, 241, 229, 0.16); background: var(--surface); }
      .portrait-media img { width: 100%; height: 100%; object-fit: cover; object-position: center; filter: saturate(0.88) contrast(1.03); }
      .portrait-label { position: absolute; right: -1px; bottom: -1px; background: var(--yellow); color: var(--ink); padding: 9px 12px; font: 900 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.12em; text-transform: uppercase; }

      .section { padding: 105px 0; border-bottom: 1px solid var(--line); }
      .section-head { display: grid; grid-template-columns: minmax(190px, 0.52fr) minmax(0, 1.48fr); gap: 50px; margin-bottom: 48px; }
      .section-title { margin: 11px 0 0; font-size: clamp(38px, 5vw, 62px); line-height: 0.96; letter-spacing: -0.052em; text-transform: uppercase; }
      .section-lead { max-width: 740px; margin: 0; color: var(--muted); font-size: clamp(18px, 2vw, 22px); line-height: 1.52; }
      .section-lead strong { color: var(--paper); }

      .about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 20px; }
      .about-copy, .principle { padding: clamp(26px, 4vw, 42px); border: 1px solid var(--line); background: var(--surface); }
      .about-copy p { max-width: 720px; margin: 0; color: var(--muted); font-size: 16px; }
      .about-copy p + p { margin-top: 18px; }
      .principle { display: flex; min-height: 260px; flex-direction: column; justify-content: space-between; border-top: 3px solid var(--yellow); }
      .principle blockquote { margin: 0; font-size: clamp(25px, 3vw, 37px); font-weight: 800; line-height: 1.13; letter-spacing: -0.035em; }
      .principle cite { color: var(--muted); font: 750 9px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.12em; text-transform: uppercase; }

      .projects { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
      .project { --glow-x: 50%; --glow-y: 50%; position: relative; overflow: hidden; min-height: 390px; display: flex; flex-direction: column; padding: clamp(26px, 4vw, 38px); border: 1px solid var(--line); background: var(--surface); transition: transform 180ms ease, border-color 180ms ease; }
      .project::before { content: ""; position: absolute; inset: 0; opacity: 0; pointer-events: none; background: radial-gradient(300px circle at var(--glow-x) var(--glow-y), rgba(240, 211, 38, 0.09), transparent 68%); transition: opacity 220ms ease; }
      .project:hover { transform: translateY(-4px); border-color: rgba(240, 211, 38, 0.48); }
      .project:hover::before { opacity: 1; }
      .project > * { position: relative; z-index: 1; }
      .project-top { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
      .project-year { color: var(--muted); font: 750 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; }
      .project h3 { max-width: 520px; margin: 58px 0 16px; font-size: clamp(25px, 3vw, 34px); line-height: 1.07; letter-spacing: -0.038em; }
      .project p { margin: 0; color: var(--muted); font-size: 14px; }
      .tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: auto; padding-top: 28px; }
      .tag { border: 1px solid var(--yellow-line); padding: 7px 9px; color: var(--yellow); font: 750 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.06em; text-transform: uppercase; }
      .other-projects { margin-top: 18px; border: 1px solid var(--line); }
      .other-project { display: grid; grid-template-columns: 90px minmax(0, 1fr) auto; align-items: center; gap: 22px; min-height: 74px; padding: 0 24px; background: rgba(17, 18, 15, 0.6); }
      .other-project + .other-project { border-top: 1px solid var(--line); }
      .other-project span { color: var(--yellow); font: 800 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.1em; }
      .other-project strong { font-size: 15px; }
      .other-project small { color: var(--muted); font: 700 9px/1 ui-monospace, SFMono-Regular, Menlo, monospace; text-transform: uppercase; }

      .capabilities { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border: 1px solid var(--line); }
      .capability { min-height: 250px; padding: 32px; background: var(--surface); }
      .capability:nth-child(even) { border-left: 1px solid var(--line); }
      .capability:nth-child(n + 3) { border-top: 1px solid var(--line); }
      .capability-number { color: var(--yellow); font: 850 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace; }
      .capability h3 { margin: 34px 0 18px; font-size: 20px; text-transform: uppercase; }
      .skill-list { display: flex; flex-wrap: wrap; gap: 8px; }
      .skill-list span { padding: 6px 8px; background: rgba(240, 211, 38, 0.07); color: #cfcebf; font-size: 12px; }

      .timeline { border-top: 1px solid var(--line); }
      .timeline-item { display: grid; grid-template-columns: 210px minmax(0, 1fr); gap: 42px; padding: 34px 0; border-bottom: 1px solid var(--line); }
      .timeline-date { color: var(--yellow); font: 800 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.08em; text-transform: uppercase; }
      .timeline-copy h3 { margin: 0; font-size: 22px; line-height: 1.2; }
      .timeline-copy h4 { margin: 6px 0 12px; color: var(--muted); font-size: 13px; }
      .timeline-copy p { max-width: 760px; margin: 0; color: var(--muted); font-size: 14px; }

      .contact-intro { max-width: 820px; margin-bottom: 42px; }
      .contact-intro h2 { margin: 12px 0 0; font-size: clamp(45px, 7vw, 82px); line-height: 0.9; letter-spacing: -0.065em; text-transform: uppercase; }
      .contact-intro p { max-width: 650px; margin: 20px 0 0; color: var(--muted); }
      .contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
      .contact-link { display: grid; grid-template-columns: 52px minmax(0, 1fr) auto; align-items: center; gap: 17px; min-height: 88px; padding: 17px; border: 1px solid var(--yellow-line); background: var(--surface); text-decoration: none; transition: color 180ms ease, background 180ms ease, transform 180ms ease; }
      .contact-link:hover { transform: translateY(-3px); background: var(--yellow); color: var(--ink); }
      .contact-icon { display: grid; place-items: center; width: 52px; height: 52px; background: var(--yellow); color: var(--ink); transition: color 180ms ease, background 180ms ease; }
      .contact-link:hover .contact-icon { background: var(--ink); color: var(--yellow); }
      .contact-icon svg { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
      .contact-name { display: block; font-size: 14px; font-weight: 850; }
      .contact-value { display: block; margin-top: 4px; color: var(--muted); font: 700 10px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; }
      .contact-link:hover .contact-value { color: rgba(9, 10, 8, 0.68); }
      .contact-arrow { font-size: 19px; }

      footer { padding: 28px 0 42px; color: var(--muted); font: 700 9px/1.6 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: 0.1em; text-transform: uppercase; }
      .footer-row { display: flex; justify-content: space-between; gap: 24px; }

      .reveal { opacity: 1; transform: none; }
      .motion .reveal { opacity: 0; transform: translate3d(0, 24px, 0); transition: opacity 650ms ease, transform 720ms cubic-bezier(0.2, 0.72, 0.2, 1); }
      .motion .reveal.visible { opacity: 1; transform: translate3d(0, 0, 0); }
      @keyframes pulse { 50% { opacity: 0.45; transform: scale(0.76); } }

      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
        .intro-bird, .intro.ready .enter-control:not(.dragging) .enter-knob, .intro.ready .intro-status::before { animation: none !important; }
        .motion .reveal { opacity: 1; transform: none; }
      }

      @media (max-width: 920px) {
        .hero { min-height: auto; }
        .hero-grid { grid-template-columns: 1fr; padding: 72px 0 88px; }
        .portrait { justify-self: start; width: min(78vw, 470px); }
        .section-head, .about-grid { grid-template-columns: 1fr; }
        .section-head { gap: 25px; }
      }

      @media (max-width: 720px) {
        .shell { width: min(calc(100% - 28px), var(--max)); }
        .intro-meta { top: 20px; left: 20px; max-width: 200px; }
        .intro-skip { top: 20px; right: 20px; }
        .intro-side { width: 29vw; min-width: 108px; opacity: 0.75; }
        .intro-bird { right: -12px; width: clamp(128px, 35vw, 195px); }
        .intro-center { width: min(calc(100% - 36px), 450px); margin-right: 8vw; }
        .intro-mark { width: 64px; height: 64px; margin-bottom: 18px; }
        .intro-title { font-size: clamp(58px, 18vw, 82px); }
        .intro-copy { max-width: 300px; font-size: 8px; }
        .enter-control { width: min(88%, 330px); }
        .nav { gap: 16px; }
        .brand small { display: none; }
        nav { overflow-x: auto; scrollbar-width: none; }
        nav::-webkit-scrollbar { display: none; }
        nav ul { width: max-content; gap: 18px; padding-right: 4px; }
        nav a { padding-block: 29px 27px; font-size: 9px; }
        .hero-grid { padding-top: 58px; }
        h1 { font-size: clamp(52px, 17vw, 78px); }
        .actions { display: grid; }
        .button { width: 100%; }
        .portrait { width: min(88vw, 455px); margin-left: 6px; }
        .section { padding: 78px 0; }
        .projects, .capabilities, .contact-grid { grid-template-columns: 1fr; }
        .capability:nth-child(even) { border-left: 0; }
        .capability + .capability { border-top: 1px solid var(--line); }
        .other-project { grid-template-columns: 66px 1fr; padding: 15px 18px; }
        .other-project small { display: none; }
        .timeline-item { grid-template-columns: 1fr; gap: 12px; }
        .footer-row { display: grid; }
      }

      @media (max-width: 430px) {
        .brand strong { font-size: 12px; }
        .brand-image { width: 34px; height: 34px; }
        nav ul { gap: 14px; }
        nav li:nth-child(2), nav li:nth-child(4), nav li:nth-child(5) { display: none; }
        .facts { gap: 18px; }
        .contact-link { grid-template-columns: 48px 1fr auto; padding: 13px; }
        .contact-icon { width: 48px; height: 48px; }
      }
    </style>
  </head>
  <body class="intro-active">
    <div class="intro" id="intro" role="dialog" aria-modal="true" aria-label="FJMT portfolio introduction">
      <canvas class="intro-field" id="intro-field" aria-hidden="true"></canvas>
      <div class="intro-grid" aria-hidden="true"></div>
      <div class="intro-meta"><strong>FJMT / PORTFOLIO</strong>Signal 01 / North Tapanuli</div>
      <button class="intro-skip" id="skip-intro" type="button">Skip intro</button>
      <div class="intro-side" aria-hidden="true">
        <div class="intro-bird"><img src="/fjmt-bird-logo.png" alt=""></div>
      </div>
      <div class="intro-center">
        <div class="intro-mark" aria-hidden="true"><img src="/fjmt-bird-logo.png" alt=""></div>
        <p class="intro-kicker">Engineering the signal</p>
        <h1 class="intro-title">FJMT<span>Portfolio / 2026</span></h1>
        <p class="intro-copy">Electrical engineering / control systems / technology / programming</p>
        <div class="intro-status" id="intro-status" aria-live="polite">Synchronizing signal</div>
        <button class="enter-control" id="enter-control" type="button" aria-label="Swipe or click to enter the portfolio" disabled>
          <span class="enter-knob" aria-hidden="true">&#8594;</span>
          <span class="enter-label">Swipe / click to enter</span>
        </button>
      </div>
    </div>
    <noscript><style>.intro{display:none!important}body{overflow:auto!important}</style></noscript>
    <div class="progress" id="progress" aria-hidden="true"></div>
    <a class="skip-link" href="#main">Skip to content</a>
    <header>
      <div class="shell nav">
        <a class="brand" href="#top" aria-label="Femiel Jubil M. Tambunan, home">
          <span class="brand-image" aria-hidden="true"><img src="/fjmt-bird-logo.png" alt=""></span>
          <span><strong>FJMT</strong><small>Engineering portfolio</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <ul>
            <li><a href="#top" data-nav="top">Top</a></li>
            <li><a href="#about" data-nav="about">About</a></li>
            <li><a href="#projects" data-nav="projects">Projects</a></li>
            <li><a href="#skills" data-nav="skills">Skills</a></li>
            <li><a href="#experience" data-nav="experience">Experience</a></li>
            <li><a href="#contact" data-nav="contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main id="main">
      <section class="hero" id="top" data-section>
        <canvas id="hero-field" aria-hidden="true"></canvas>
        <div class="shell hero-grid">
          <div class="reveal">
            <div class="availability">Open to engineering opportunities</div>
            <div class="eyebrow">Electrical engineering / technology / programming</div>
            <h1>Femiel <span>Jubil.</span></h1>
            <p class="hero-role">Control systems, automation, embedded technology, and electrical design - connecting engineering fundamentals with practical problem solving.</p>
            <p class="hero-summary">A resilient engineer from North Tapanuli, Indonesia, with experience across industrial electrical work, autonomous systems, electronics, and technical mentoring.</p>
            <div class="actions">
              <a class="button" href="#projects">View projects <span aria-hidden="true">&#8595;</span></a>
              <a class="button secondary" href="/cv.pdf" download="Femiel-Jubil-M-Tambunan-CV.pdf">Download CV</a>
            </div>
            <div class="facts" aria-label="Professional summary">
              <div class="fact"><strong>B.Eng.</strong><span>Electrical Engineering</span></div>
              <div class="fact"><strong>3.34 / 4.00</strong><span>Academic GPA</span></div>
              <div class="fact"><strong>7+</strong><span>Engineering projects</span></div>
            </div>
          </div>
          <figure class="portrait reveal">
            <div class="portrait-media"><img src="/profile.jpg" alt="Portrait of Femiel Jubil M. Tambunan" width="1122" height="1402"><span class="portrait-label">North Tapanuli / ID</span></div>
          </figure>
        </div>
      </section>

      <section class="section" id="about" data-section>
        <div class="shell">
          <div class="section-head reveal">
            <div><div class="kicker">01 / About</div><h2 class="section-title">A clear direction.</h2></div>
            <p class="section-lead"><strong>Progress is not always a straight line.</strong> I learn through detours, adapt to new systems, and keep tracing the signal until a practical direction becomes clear.</p>
          </div>
          <div class="about-grid">
            <article class="about-copy reveal">
              <p>I am a fresh Electrical Engineering graduate from Institut Teknologi Del, focused on control systems, automation, electrical systems, and critical infrastructure.</p>
              <p>My work connects hardware and software: from industrial motor systems and telemetry to embedded control, image processing, FPGA design, and autonomous platforms. I bring strong interpersonal skills, technical curiosity, and the ability to adapt to new knowledge, technology, and situations.</p>
            </article>
            <aside class="principle reveal"><blockquote>Built by detours. Wired for what comes next.</blockquote><cite>Working principle / North Tapanuli</cite></aside>
          </div>
        </div>
      </section>

      <section class="section" id="projects" data-section>
        <div class="shell">
          <div class="section-head reveal">
            <div><div class="kicker">02 / Projects</div><h2 class="section-title">Selected systems.</h2></div>
            <p class="section-lead">A selection of work across <strong>autonomous systems, computer vision, embedded control, and digital hardware.</strong></p>
          </div>
          <div class="projects">
            <article class="project reveal"><div class="project-top"><span class="project-code">01 / USV</span><span class="project-year">2026</span></div><h3>Supervisory System for an Unmanned Surface Vehicle</h3><p>Designed mission-continuity and data-availability mechanisms for telemetry loss, including position monitoring, local storage, and retransmission after connectivity returned. Contributed to a modular, solar-powered catamaran USV.</p><div class="tags"><span class="tag">Pixhawk 6C</span><span class="tag">Raspberry Pi</span><span class="tag">Telemetry</span><span class="tag">Mission Planner</span></div></article>
            <article class="project reveal"><div class="project-top"><span class="project-code">02 / Vision</span><span class="project-year">2026</span></div><h3>Digital Image Processing Attendance System</h3><p>Developed an automated attendance concept that applies image-processing techniques to identification and record keeping, translating computer-vision fundamentals into a practical academic project.</p><div class="tags"><span class="tag">Image Processing</span><span class="tag">Computer Vision</span><span class="tag">Automation</span></div></article>
            <article class="project reveal"><div class="project-top"><span class="project-code">03 / Control</span><span class="project-year">2025</span></div><h3>Rice Field Irrigation Automation</h3><p>Designed a monitoring and control system using an ATmega8535 microcontroller, applying embedded-systems and automation principles to support reliable irrigation operation.</p><div class="tags"><span class="tag">ATmega8535</span><span class="tag">Embedded Systems</span><span class="tag">Sensors</span><span class="tag">Control</span></div></article>
            <article class="project reveal"><div class="project-top"><span class="project-code">04 / Digital</span><span class="project-year">2024</span></div><h3>16-bit Single-Cycle MIPS Processor</h3><p>Implemented a 16-bit processor in VHDL, integrating the datapath, control unit, register file, ALU, memory, and branch/jump logic, then verified it through an automated testbench.</p><div class="tags"><span class="tag">VHDL</span><span class="tag">FPGA</span><span class="tag">Digital Logic</span><span class="tag">Testbench</span></div></article>
          </div>
          <div class="other-projects reveal" aria-label="Additional projects">
            <div class="other-project"><span>2024 / 05</span><strong>IoT-Based In-Vehicle Temperature Monitoring</strong><small>IoT / Sensors</small></div>
            <div class="other-project"><span>2023 / 06</span><strong>Oscillator-Based Bell System</strong><small>Analog electronics</small></div>
            <div class="other-project"><span>2022 / 07</span><strong>Arduino Sensor and Servo Control</strong><small>Microcontroller</small></div>
          </div>
        </div>
      </section>

      <section class="section" id="skills" data-section>
        <div class="shell">
          <div class="section-head reveal">
            <div><div class="kicker">03 / Skills</div><h2 class="section-title">Engineering toolkit.</h2></div>
            <p class="section-lead">A focused stack across <strong>electrical systems, embedded computing, engineering software, and collaborative work.</strong></p>
          </div>
          <div class="capabilities">
            <article class="capability reveal"><span class="capability-number">01</span><h3>Electrical &amp; Control</h3><div class="skill-list"><span>Control Systems</span><span>Electrical Systems</span><span>Electric Motors</span><span>MCC Fundamentals</span><span>PLC Fundamentals</span><span>Sensor Integration</span><span>Telemetry</span></div></article>
            <article class="capability reveal"><span class="capability-number">02</span><h3>Embedded &amp; Computing</h3><div class="skill-list"><span>Arduino Uno</span><span>ATmega8535</span><span>Raspberry Pi</span><span>Pixhawk 6C</span><span>IoT</span><span>VHDL</span><span>FPGA</span><span>Ubuntu Linux</span></div></article>
            <article class="capability reveal"><span class="capability-number">03</span><h3>Software &amp; Design</h3><div class="skill-list"><span>MATLAB</span><span>Proteus</span><span>NI Multisim</span><span>Mission Planner</span><span>Maxsurf</span><span>Intel/Altera Tools</span><span>GitHub</span><span>AutoCAD Electrical</span><span>ETAP</span><span>Revit MEP</span></div></article>
            <article class="capability reveal"><span class="capability-number">04</span><h3>Professional Strengths</h3><div class="skill-list"><span>Adaptability</span><span>Teamwork</span><span>Technical Communication</span><span>Problem Solving</span><span>Collaboration</span><span>Continuous Learning</span><span>Safety Awareness</span></div></article>
          </div>
        </div>
      </section>

      <section class="section" id="experience" data-section>
        <div class="shell">
          <div class="section-head reveal">
            <div><div class="kicker">04 / Experience</div><h2 class="section-title">Field to laboratory.</h2></div>
            <p class="section-lead">Practical experience in <strong>industrial electrical work, applied research, and technical mentoring.</strong></p>
          </div>
          <div class="timeline">
            <article class="timeline-item reveal"><div class="timeline-date">Jun - Aug 2025<br>Dumai, Riau</div><div class="timeline-copy"><h3>Electrical Engineering Intern</h3><h4>PT Wilmar Nabati Indonesia - Project Management, Electrical Division</h4><p>Studied motor control and operational testing for a 1.5 MW Thermal Oil Heater system; supported MCC panel quality checks, EHT continuity testing, field activities, and industrial safety workflows.</p></div></article>
            <article class="timeline-item reveal"><div class="timeline-date">Sep 2025 - Jul 2026<br>Laguboti, Toba</div><div class="timeline-copy"><h3>Student Researcher</h3><h4>Institut Teknologi Del - Internal Research Grant</h4><p>Supported the integration and evaluation of navigation, telemetry, electrical power, and operational monitoring subsystems for a modular long-range Unmanned Surface Vehicle.</p></div></article>
            <article class="timeline-item reveal"><div class="timeline-date">Sep - Dec 2025<br>Laguboti, Toba</div><div class="timeline-copy"><h3>Electronics II Laboratory Teaching Assistant</h3><h4>Institut Teknologi Del</h4><p>Guided electronics experiments, circuit measurement, equipment use, troubleshooting, and safe laboratory practice while supporting instructors with session preparation.</p></div></article>
            <article class="timeline-item reveal"><div class="timeline-date">Jul 2022 - Aug 2026</div><div class="timeline-copy"><h3>Bachelor of Electrical Engineering</h3><h4>Institut Teknologi Del - Control Systems, GPA 3.34 / 4.00</h4><p>Built foundations across electrical systems, control, electronics, embedded systems, automation, and engineering computation.</p></div></article>
          </div>
        </div>
      </section>

      <section class="section" id="contact" data-section>
        <div class="shell">
          <div class="contact-intro reveal"><div class="kicker">05 / Contact</div><h2>Let's build what comes next.</h2><p>For engineering opportunities, project discussions, or professional collaboration, reach me through any channel below.</p></div>
          <div class="contact-grid">
            <a class="contact-link reveal" href="mailto:femieljmt@gmail.com" aria-label="Email Femiel"><span class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg></span><span><span class="contact-name">Email</span><span class="contact-value">femieljmt@gmail.com</span></span><span class="contact-arrow" aria-hidden="true">&#8599;</span></a>
            <a class="contact-link reveal" href="https://github.com/femieljmt" target="_blank" rel="noreferrer" aria-label="Open Femiel's GitHub"><span class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15.7 1.8a13.4 13.4 0 0 0-7.4 0C5.8.1 4.7.5 4.7.5A5 5 0 0 0 4.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.5 6.8 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.5 2-5-2-7-2"></path></svg></span><span><span class="contact-name">GitHub</span><span class="contact-value">github.com/femieljmt</span></span><span class="contact-arrow" aria-hidden="true">&#8599;</span></a>
            <a class="contact-link reveal" href="https://www.linkedin.com/in/femiel-jubil-m-tambunan/" target="_blank" rel="noreferrer" aria-label="Open Femiel's LinkedIn"><span class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 11v5"></path><path d="M8 8h.01"></path><path d="M12 16v-5"></path><path d="M12 13.2c.7-1.5 4-1.7 4 1.5V16"></path></svg></span><span><span class="contact-name">LinkedIn</span><span class="contact-value">Femiel Jubil M. Tambunan</span></span><span class="contact-arrow" aria-hidden="true">&#8599;</span></a>
            <a class="contact-link reveal" href="https://wa.me/6285281497470" target="_blank" rel="noreferrer" aria-label="Message Femiel on WhatsApp"><span class="contact-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7a8.5 8.5 0 1 1 16.1-4.1Z"></path><path d="M8.2 8.1c.2 3 2.6 5.5 5.7 5.8"></path><path d="m8.2 8.1 1.4-.5 1.1 2-1 1"></path><path d="m13.9 13.9.5-1 2 1.1-.5 1.4"></path></svg></span><span><span class="contact-name">WhatsApp</span><span class="contact-value">+62 852 8149 7470</span></span><span class="contact-arrow" aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      </section>
    </main>

    <footer><div class="shell footer-row"><span>Femiel Jubil M. Tambunan / 2026</span><span>Electrical engineering / North Sumatra</span></div></footer>

    <script>
      (function () {
        "use strict";
        var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        var body = document.body;
        body.classList.add("motion");

        var intro = document.getElementById("intro");
        var introCanvas = document.getElementById("intro-field");
        var introContext = introCanvas && introCanvas.getContext("2d");
        var enterControl = document.getElementById("enter-control");
        var skipIntro = document.getElementById("skip-intro");
        var introStatus = document.getElementById("intro-status");
        var stopIntroField = null;

        function createIntroField() {
          if (!introCanvas || !introContext) return function () {};
          var fieldWidth = 0;
          var fieldHeight = 0;
          var fieldDpr = 1;
          var pointerX = -1000;
          var pointerY = -1000;
          var frame = 0;

          function resize() {
            fieldWidth = Math.max(1, window.innerWidth);
            fieldHeight = Math.max(1, window.innerHeight);
            fieldDpr = Math.min(window.devicePixelRatio || 1, 1.5);
            introCanvas.width = Math.round(fieldWidth * fieldDpr);
            introCanvas.height = Math.round(fieldHeight * fieldDpr);
            introContext.setTransform(fieldDpr, 0, 0, fieldDpr, 0, 0);
          }

          function updatePointer(event) {
            pointerX = event.clientX;
            pointerY = event.clientY;
          }

          function draw(time) {
            introContext.clearRect(0, 0, fieldWidth, fieldHeight);
            var spacing = fieldWidth < 680 ? 36 : 42;
            var phase = time * 0.00042;

            for (var baseY = -spacing; baseY < fieldHeight + spacing; baseY += spacing) {
              for (var baseX = -spacing; baseX < fieldWidth + spacing; baseX += spacing) {
                var wave = Math.sin(baseX * 0.011 + phase * 2.1) + Math.cos(baseY * 0.015 - phase * 1.45);
                var x = baseX + Math.sin(baseY * 0.012 + phase) * 14;
                var y = baseY + wave * 6.2;
                var dx = x - pointerX;
                var dy = y - pointerY;
                var distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 130 && distance > 0) {
                  var push = (130 - distance) / 130;
                  x += dx / distance * push * 23;
                  y += dy / distance * push * 23;
                }
                var depth = (Math.sin(baseX * 0.008 - baseY * 0.009 + phase) + 1) * 0.5;
                introContext.beginPath();
                introContext.arc(x, y, 0.7 + depth * 1.45, 0, Math.PI * 2);
                introContext.fillStyle = "rgba(240,211,38," + (0.075 + depth * 0.28).toFixed(3) + ")";
                introContext.fill();
              }
            }
            if (!reduced) frame = window.requestAnimationFrame(draw);
          }

          resize();
          draw(0);
          window.addEventListener("resize", resize, { passive: true });
          window.addEventListener("pointermove", updatePointer, { passive: true });

          return function () {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", updatePointer);
          };
        }

        stopIntroField = createIntroField();

        var introExiting = false;
        var dragging = false;
        var dragStartX = 0;
        var dragX = 0;
        var dragMax = 0;
        var dragMoved = false;
        var suppressEnterClick = false;

        function setIntroDrag(value) {
          dragX = Math.max(0, Math.min(dragMax, value));
          enterControl.style.setProperty("--drag-x", dragX + "px");
        }

        function enterPortfolio() {
          if (introExiting || enterControl.disabled) return;
          introExiting = true;
          enterControl.disabled = true;
          introStatus.textContent = "Transmission open";
          intro.classList.add("exiting");
          body.classList.remove("intro-active");

          window.setTimeout(function () {
            if (stopIntroField) stopIntroField();
            intro.hidden = true;
            window.history.replaceState(null, "", window.location.pathname + window.location.search + "#top");
            window.scrollTo(0, 0);
            var main = document.getElementById("main");
            main.setAttribute("tabindex", "-1");
            main.focus({ preventScroll: true });
          }, reduced ? 100 : 1550);
        }

        function markIntroReady() {
          window.setTimeout(function () {
            intro.classList.add("ready");
            introStatus.textContent = "Signal ready";
            enterControl.disabled = false;
            dragMax = Math.max(0, enterControl.clientWidth - 66);
          }, reduced ? 40 : 520);
        }

        if (document.readyState === "complete") markIntroReady();
        else window.addEventListener("load", markIntroReady, { once: true });

        enterControl.addEventListener("pointerdown", function (event) {
          if (enterControl.disabled) return;
          dragging = true;
          dragMoved = false;
          dragStartX = event.clientX - dragX;
          dragMax = Math.max(0, enterControl.clientWidth - 66);
          enterControl.classList.add("dragging");
          enterControl.setPointerCapture(event.pointerId);
        });

        enterControl.addEventListener("pointermove", function (event) {
          if (!dragging) return;
          var next = event.clientX - dragStartX;
          if (Math.abs(next - dragX) > 4) dragMoved = true;
          setIntroDrag(next);
        });

        function finishIntroDrag(event) {
          if (!dragging) return;
          dragging = false;
          enterControl.classList.remove("dragging");
          if (enterControl.hasPointerCapture(event.pointerId)) enterControl.releasePointerCapture(event.pointerId);
          if (dragMax > 0 && dragX / dragMax > 0.58) {
            enterPortfolio();
            return;
          }
          if (dragMoved) {
            suppressEnterClick = true;
            window.setTimeout(function () { suppressEnterClick = false; }, 80);
          }
          setIntroDrag(0);
        }

        enterControl.addEventListener("pointerup", finishIntroDrag);
        enterControl.addEventListener("pointercancel", finishIntroDrag);
        enterControl.addEventListener("click", function (event) {
          if (suppressEnterClick) {
            event.preventDefault();
            return;
          }
          enterPortfolio();
        });
        skipIntro.addEventListener("click", function () {
          if (enterControl.disabled) enterControl.disabled = false;
          enterPortfolio();
        });
        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape" && !intro.hidden) {
            if (enterControl.disabled) enterControl.disabled = false;
            enterPortfolio();
          }
        });

        var revealItems = document.querySelectorAll(".reveal");
        if (reduced || !("IntersectionObserver" in window)) {
          revealItems.forEach(function (item) { item.classList.add("visible"); });
        } else {
          var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            });
          }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
          revealItems.forEach(function (item, index) {
            item.style.transitionDelay = Math.min(index % 3, 2) * 60 + "ms";
            revealObserver.observe(item);
          });
        }

        var navLinks = document.querySelectorAll("[data-nav]");
        var sections = document.querySelectorAll("[data-section]");
        function selectNav(id) {
          navLinks.forEach(function (link) {
            if (link.getAttribute("data-nav") === id) link.setAttribute("aria-current", "true");
            else link.removeAttribute("aria-current");
          });
        }
        selectNav("top");
        if ("IntersectionObserver" in window) {
          var sectionObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
              if (entry.isIntersecting) selectNav(entry.target.id);
            });
          }, { rootMargin: "-32% 0px -58% 0px", threshold: 0 });
          sections.forEach(function (section) { sectionObserver.observe(section); });
        }

        var progress = document.getElementById("progress");
        var progressQueued = false;
        function updateProgress() {
          var available = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
          progress.style.width = Math.min(100, window.scrollY / available * 100) + "%";
          progressQueued = false;
        }
        window.addEventListener("scroll", function () {
          if (progressQueued) return;
          progressQueued = true;
          window.requestAnimationFrame(updateProgress);
        }, { passive: true });
        updateProgress();

        document.querySelectorAll(".project").forEach(function (card) {
          card.addEventListener("pointermove", function (event) {
            var bounds = card.getBoundingClientRect();
            card.style.setProperty("--glow-x", ((event.clientX - bounds.left) / bounds.width * 100).toFixed(1) + "%");
            card.style.setProperty("--glow-y", ((event.clientY - bounds.top) / bounds.height * 100).toFixed(1) + "%");
          }, { passive: true });
        });

        var hero = document.querySelector(".hero");
        var portrait = document.querySelector(".portrait");
        if (!reduced) {
          hero.addEventListener("pointermove", function (event) {
            var x = (event.clientX / window.innerWidth - 0.5) * 8;
            var y = (event.clientY / window.innerHeight - 0.5) * 6;
            portrait.style.transform = "translate3d(" + x.toFixed(2) + "px," + y.toFixed(2) + "px,0)";
          }, { passive: true });
          hero.addEventListener("pointerleave", function () { portrait.style.transform = "translate3d(0,0,0)"; });
        }

        var canvas = document.getElementById("hero-field");
        var context = canvas.getContext("2d");
        var width = 0;
        var height = 0;
        var dpr = 1;
        var pointerX = -1000;
        var pointerY = -1000;

        function resizeField() {
          var bounds = hero.getBoundingClientRect();
          width = Math.max(1, bounds.width);
          height = Math.max(1, bounds.height);
          dpr = Math.min(window.devicePixelRatio || 1, 1.5);
          canvas.width = Math.round(width * dpr);
          canvas.height = Math.round(height * dpr);
          context.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function drawField(time) {
          context.clearRect(0, 0, width, height);
          var spacing = width < 680 ? 39 : 46;
          var phase = time * 0.00035;
          for (var y = -spacing; y < height + spacing; y += spacing) {
            for (var x = -spacing; x < width * 0.78; x += spacing) {
              var px = x + Math.sin(y * 0.012 + phase) * 8;
              var py = y + Math.sin(x * 0.013 + phase * 1.7) * 7;
              var dx = px - pointerX;
              var dy = py - pointerY;
              var distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 105 && distance > 0) {
                var force = (105 - distance) / 105;
                px += dx / distance * force * 16;
                py += dy / distance * force * 16;
              }
              var depth = (Math.sin(x * 0.01 - y * 0.008 + phase) + 1) * 0.5;
              context.beginPath();
              context.arc(px, py, 0.7 + depth * 1.1, 0, Math.PI * 2);
              context.fillStyle = "rgba(240,211,38," + (0.08 + depth * 0.19).toFixed(3) + ")";
              context.fill();
            }
          }
          if (!reduced) window.requestAnimationFrame(drawField);
        }

        hero.addEventListener("pointermove", function (event) {
          var bounds = hero.getBoundingClientRect();
          pointerX = event.clientX - bounds.left;
          pointerY = event.clientY - bounds.top;
        }, { passive: true });
        hero.addEventListener("pointerleave", function () { pointerX = -1000; pointerY = -1000; });
        window.addEventListener("resize", resizeField, { passive: true });
        resizeField();
        drawField(0);
      })();
    </script>
  </body>
</html>`;

function decodeBase64(value) {
  return Uint8Array.from(atob(value), function (character) { return character.charCodeAt(0); });
}

let profileBytes;
let cvBytes;
let logoBytes;

export default {
  async fetch(request, env, ctx) {
    void env;
    void ctx;
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response(page, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "public, max-age=300",
          "x-content-type-options": "nosniff",
          "referrer-policy": "strict-origin-when-cross-origin",
        },
      });
    }

    if (url.pathname === "/profile.jpg") {
      profileBytes ??= decodeBase64(profileBase64);
      return new Response(profileBytes, { headers: { "content-type": "image/jpeg", "cache-control": "public, max-age=604800, immutable", "x-content-type-options": "nosniff" } });
    }

    if (url.pathname === "/fjmt-bird-logo.png") {
      logoBytes ??= decodeBase64(logoBase64);
      return new Response(logoBytes, { headers: { "content-type": "image/png", "cache-control": "public, max-age=604800, immutable", "x-content-type-options": "nosniff" } });
    }

    if (url.pathname === "/cv.pdf") {
      cvBytes ??= decodeBase64(cvBase64);
      return new Response(cvBytes, { headers: { "content-type": "application/pdf", "content-disposition": "inline; filename=Femiel-Jubil-M-Tambunan-CV.pdf", "cache-control": "public, max-age=3600", "x-content-type-options": "nosniff" } });
    }

    return new Response("Not found", { status: 404, headers: { "content-type": "text/plain; charset=utf-8" } });
  },
};
