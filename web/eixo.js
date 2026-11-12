/*! Axioma Eixo 0.4.0 · design system da Axioma · gerado por tools/build_dist.py — não edite à mão */
/* Axioma Eixo · runtime de referência (esboço v0.2). Sem dependências.
   Ícones SVG (desenhos do Lucide, licença ISC, com nomes do Eixo), sons sintetizados com Web Audio,
   háptica, toasts, seletor próprio, marcadores deslizantes de navegação e abas.
   Uso: <i class="ax-i" data-i="receipt_long"></i> · Eixo.sound.play('success') · Eixo.toast({...}) · Eixo.select(el)
   v0.3: Eixo.init(raiz) liga tudo o que estiver marcado (também em HTML carregado depois): seletores, navegação, abas,
   menus [data-ax-menu], diálogos [data-ax-open]/[data-ax-close], confirmação [data-ax-confirm], validação form[data-ax-validate],
   máscaras [data-ax-mask], calendário [data-ax-date], avisos do servidor [data-ax-toast], preferências [data-ax-pref] e html[data-ax-prefs]. */
(function () {
  'use strict';
  var w = window, d = document;
  var reduceMotion = function () { return (w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches) || d.documentElement.classList.contains('ax-reduce-motion'); };

  /* ── Ícones ── */
  var ICONS = {"accessibility":"<circle cx=\"16\" cy=\"4\" r=\"1\" /><path d=\"m18 19 1-7-6 1\" /><path d=\"m5 8 3-3 5.5 3-2.36 3.5\" /><path d=\"M4.24 14.5a5 5 0 0 0 6.88 6\" /><path d=\"M13.76 17.5a5 5 0 0 0-6.88-6\" />","account_balance":"<line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /><line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /><line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /><line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /><line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /><polygon points=\"12 2 20 7 4 7\" />","add":"<path d=\"M5 12h14\" /><path d=\"M12 5v14\" />","add_circle":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M8 12h8\" /><path d=\"M12 8v8\" />","agriculture":"<path d=\"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20\" /><path d=\"M16 18h-5\" /><path d=\"M18 5a1 1 0 0 0-1 1v5.573\" /><path d=\"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246\" /><path d=\"M4 11V4\" /><path d=\"M7 15h.01\" /><path d=\"M8 10.1V4\" /><circle cx=\"18\" cy=\"18\" r=\"2\" /><circle cx=\"7\" cy=\"15\" r=\"5\" />","arrow_back":"<path d=\"m12 19-7-7 7-7\" /><path d=\"M19 12H5\" />","arrow_downward":"<path d=\"M12 5v14\" /><path d=\"m19 12-7 7-7-7\" />","arrow_forward":"<path d=\"M5 12h14\" /><path d=\"m12 5 7 7-7 7\" />","arrow_upward":"<path d=\"m5 12 7-7 7 7\" /><path d=\"M12 19V5\" />","assignment":"<rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\" /><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\" /><path d=\"M12 11h4\" /><path d=\"M12 16h4\" /><path d=\"M8 11h.01\" /><path d=\"M8 16h.01\" />","attach_file":"<path d=\"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48\" />","auto_awesome":"<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /><path d=\"M20 3v4\" /><path d=\"M22 5h-4\" /><path d=\"M4 17v2\" /><path d=\"M5 18H3\" />","bar_chart":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"M18 17V9\" /><path d=\"M13 17V5\" /><path d=\"M8 17v-3\" />","bolt":"<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\" />","business":"<path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /><path d=\"M10 6h4\" /><path d=\"M10 10h4\" /><path d=\"M10 14h4\" /><path d=\"M10 18h4\" />","calendar_month":"<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" />","calendar_today":"<path d=\"M8 2v4\" /><path d=\"M16 2v4\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M3 10h18\" /><path d=\"M8 14h.01\" /><path d=\"M12 14h.01\" /><path d=\"M16 14h.01\" /><path d=\"M8 18h.01\" /><path d=\"M12 18h.01\" /><path d=\"M16 18h.01\" />","cancel":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m15 9-6 6\" /><path d=\"m9 9 6 6\" />","chat":"<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\" />","check":"<path d=\"M20 6 9 17l-5-5\" />","check_circle":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"m9 12 2 2 4-4\" />","chevron_left":"<path d=\"m15 18-6-6 6-6\" />","chevron_right":"<path d=\"m9 18 6-6-6-6\" />","close":"<path d=\"M18 6 6 18\" /><path d=\"m6 6 12 12\" />","cloud":"<path d=\"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z\" />","cloud_off":"<path d=\"m2 2 20 20\" /><path d=\"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193\" /><path d=\"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07\" />","content_copy":"<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\" /><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\" />","contrast":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 18a6 6 0 0 0 0-12v12z\" />","credit_card":"<rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\" /><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\" />","dark_mode":"<path d=\"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z\" />","delete":"<path d=\"M3 6h18\" /><path d=\"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6\" /><path d=\"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2\" /><line x1=\"10\" x2=\"10\" y1=\"11\" y2=\"17\" /><line x1=\"14\" x2=\"14\" y1=\"11\" y2=\"17\" />","description":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M10 9H8\" /><path d=\"M16 13H8\" /><path d=\"M16 17H8\" />","dns":"<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /><line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /><line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />","done_all":"<path d=\"M18 6 7 17l-5-5\" /><path d=\"m22 10-7.5 7.5L13 16\" />","download":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"7 10 12 15 17 10\" /><line x1=\"12\" x2=\"12\" y1=\"15\" y2=\"3\" />","drag":"<circle cx=\"9\" cy=\"12\" r=\"1\" /><circle cx=\"9\" cy=\"5\" r=\"1\" /><circle cx=\"9\" cy=\"19\" r=\"1\" /><circle cx=\"15\" cy=\"12\" r=\"1\" /><circle cx=\"15\" cy=\"5\" r=\"1\" /><circle cx=\"15\" cy=\"19\" r=\"1\" />","eco":"<path d=\"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z\" /><path d=\"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12\" />","edit":"<path d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z\" /><path d=\"m15 5 4 4\" />","error":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><line x1=\"12\" x2=\"12\" y1=\"8\" y2=\"12\" /><line x1=\"12\" x2=\"12.01\" y1=\"16\" y2=\"16\" />","event_note":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\" /><path d=\"M16 2v4\" /><path d=\"M3 10h18\" /><path d=\"M8 2v4\" /><path d=\"M17 14h-6\" /><path d=\"M13 18H7\" /><path d=\"M7 14h.01\" /><path d=\"M17 18h.01\" />","expand_less":"<path d=\"m18 15-6-6-6 6\" />","expand_more":"<path d=\"m6 9 6 6 6-6\" />","filter_list":"<path d=\"M3 6h18\" /><path d=\"M7 12h10\" /><path d=\"M10 18h4\" />","forum":"<path d=\"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z\" /><path d=\"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1\" />","grass":"<path d=\"M7 20h10\" /><path d=\"M10 20c5.5-2.5.8-6.4 3-10\" /><path d=\"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z\" /><path d=\"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z\" />","group":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" />","help":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\" /><path d=\"M12 17h.01\" />","history":"<path d=\"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /><path d=\"M12 7v5l4 2\" />","home":"<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\" /><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\" />","hourglass_empty":"<path d=\"M10.1 2.182a10 10 0 0 1 3.8 0\" /><path d=\"M13.9 21.818a10 10 0 0 1-3.8 0\" /><path d=\"M17.609 3.721a10 10 0 0 1 2.69 2.7\" /><path d=\"M2.182 13.9a10 10 0 0 1 0-3.8\" /><path d=\"M20.279 17.609a10 10 0 0 1-2.7 2.69\" /><path d=\"M21.818 10.1a10 10 0 0 1 0 3.8\" /><path d=\"M3.721 6.391a10 10 0 0 1 2.7-2.69\" /><path d=\"M6.391 20.279a10 10 0 0 1-2.69-2.7\" />","hourglass_top":"<path d=\"M5 22h14\" /><path d=\"M5 2h14\" /><path d=\"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22\" /><path d=\"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2\" />","image":"<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" ry=\"2\" /><circle cx=\"9\" cy=\"9\" r=\"2\" /><path d=\"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21\" />","info":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M12 16v-4\" /><path d=\"M12 8h.01\" />","inventory":"<path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\" /><path d=\"M12 22V12\" /><path d=\"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7\" /><path d=\"m7.5 4.27 9 5.15\" />","keyboard":"<path d=\"M10 8h.01\" /><path d=\"M12 12h.01\" /><path d=\"M14 8h.01\" /><path d=\"M16 12h.01\" /><path d=\"M18 8h.01\" /><path d=\"M6 8h.01\" /><path d=\"M7 16h10\" /><path d=\"M8 12h.01\" /><rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" />","layers":"<path d=\"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z\" /><path d=\"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65\" /><path d=\"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65\" />","light_mode":"<circle cx=\"12\" cy=\"12\" r=\"4\" /><path d=\"M12 2v2\" /><path d=\"M12 20v2\" /><path d=\"m4.93 4.93 1.41 1.41\" /><path d=\"m17.66 17.66 1.41 1.41\" /><path d=\"M2 12h2\" /><path d=\"M20 12h2\" /><path d=\"m6.34 17.66-1.41 1.41\" /><path d=\"m19.07 4.93-1.41 1.41\" />","link":"<path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\" /><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\" />","location_on":"<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\" /><circle cx=\"12\" cy=\"10\" r=\"3\" />","lock":"<rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /><path d=\"M7 11V7a5 5 0 0 1 10 0v4\" />","logout":"<path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\" /><polyline points=\"16 17 21 12 16 7\" /><line x1=\"21\" x2=\"9\" y1=\"12\" y2=\"12\" />","mail":"<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\" /><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\" />","medical_services":"<path d=\"M12 11v4\" /><path d=\"M14 13h-4\" /><path d=\"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2\" /><path d=\"M18 6v14\" /><path d=\"M6 6v14\" /><rect width=\"20\" height=\"14\" x=\"2\" y=\"6\" rx=\"2\" />","menu":"<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\" /><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\" /><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\" />","monitor_heart":"<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\" /><path d=\"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27\" />","more_horiz":"<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"19\" cy=\"12\" r=\"1\" /><circle cx=\"5\" cy=\"12\" r=\"1\" />","more_vert":"<circle cx=\"12\" cy=\"12\" r=\"1\" /><circle cx=\"12\" cy=\"5\" r=\"1\" /><circle cx=\"12\" cy=\"19\" r=\"1\" />","notifications":"<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\" /><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\" />","open_in_new":"<path d=\"M15 3h6v6\" /><path d=\"M10 14 21 3\" /><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\" />","palette":"<circle cx=\"13.5\" cy=\"6.5\" r=\".5\" fill=\"currentColor\" /><circle cx=\"17.5\" cy=\"10.5\" r=\".5\" fill=\"currentColor\" /><circle cx=\"8.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\" /><circle cx=\"6.5\" cy=\"12.5\" r=\".5\" fill=\"currentColor\" /><path d=\"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z\" />","payments":"<rect width=\"20\" height=\"12\" x=\"2\" y=\"6\" rx=\"2\" /><circle cx=\"12\" cy=\"12\" r=\"2\" /><path d=\"M6 12h.01M18 12h.01\" />","person":"<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\" /><circle cx=\"12\" cy=\"7\" r=\"4\" />","person_add":"<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\" /><circle cx=\"9\" cy=\"7\" r=\"4\" /><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\" /><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\" />","pets":"<circle cx=\"11\" cy=\"4\" r=\"2\" /><circle cx=\"18\" cy=\"8\" r=\"2\" /><circle cx=\"20\" cy=\"16\" r=\"2\" /><path d=\"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z\" />","phone":"<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\" />","pie_chart":"<path d=\"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z\" /><path d=\"M21.21 15.89A10 10 0 1 1 8 2.83\" />","play_arrow":"<polygon points=\"6 3 20 12 6 21 6 3\" />","pregnancy":"<path d=\"M9 12h.01\" /><path d=\"M15 12h.01\" /><path d=\"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5\" /><path d=\"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1\" />","print":"<path d=\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\" /><path d=\"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6\" /><rect x=\"6\" y=\"14\" width=\"12\" height=\"8\" rx=\"1\" />","push_pin":"<path d=\"M12 17v5\" /><path d=\"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z\" />","qr_code":"<rect width=\"5\" height=\"5\" x=\"3\" y=\"3\" rx=\"1\" /><rect width=\"5\" height=\"5\" x=\"16\" y=\"3\" rx=\"1\" /><rect width=\"5\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\" /><path d=\"M21 16h-3a2 2 0 0 0-2 2v3\" /><path d=\"M21 21v.01\" /><path d=\"M12 7v3a2 2 0 0 1-2 2H7\" /><path d=\"M3 12h.01\" /><path d=\"M12 3h.01\" /><path d=\"M12 16v.01\" /><path d=\"M16 12h1\" /><path d=\"M21 12v.01\" /><path d=\"M12 21v-1\" />","receipt_long":"<path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z\" /><path d=\"M14 8H8\" /><path d=\"M16 12H8\" /><path d=\"M13 16H8\" />","refresh":"<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\" /><path d=\"M21 3v5h-5\" /><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\" /><path d=\"M8 16H3v5\" />","remove":"<path d=\"M5 12h14\" />","remove_circle":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><path d=\"M8 12h8\" />","restaurant":"<path d=\"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8\" /><path d=\"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7\" /><path d=\"m2.1 21.8 6.4-6.3\" /><path d=\"m19 5-7 7\" />","save":"<path d=\"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z\" /><path d=\"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7\" /><path d=\"M7 3v4a1 1 0 0 0 1 1h7\" />","scale":"<circle cx=\"12\" cy=\"5\" r=\"3\" /><path d=\"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z\" />","schedule":"<circle cx=\"12\" cy=\"12\" r=\"10\" /><polyline points=\"12 6 12 12 16 14\" />","search":"<circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />","search_off":"<path d=\"m13.5 8.5-5 5\" /><path d=\"m8.5 8.5 5 5\" /><circle cx=\"11\" cy=\"11\" r=\"8\" /><path d=\"m21 21-4.3-4.3\" />","send":"<path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" /><path d=\"m21.854 2.147-10.94 10.939\" />","settings":"<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />","share":"<circle cx=\"18\" cy=\"5\" r=\"3\" /><circle cx=\"6\" cy=\"12\" r=\"3\" /><circle cx=\"18\" cy=\"19\" r=\"3\" /><line x1=\"8.59\" x2=\"15.42\" y1=\"13.51\" y2=\"17.49\" /><line x1=\"15.41\" x2=\"8.59\" y1=\"6.51\" y2=\"10.49\" />","shield":"<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /><path d=\"m9 12 2 2 4-4\" />","shopping_cart":"<circle cx=\"8\" cy=\"21\" r=\"1\" /><circle cx=\"19\" cy=\"21\" r=\"1\" /><path d=\"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12\" />","show_chart":"<path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /><path d=\"m19 9-5 5-4-4-3 3\" />","sort":"<path d=\"m21 16-4 4-4-4\" /><path d=\"M17 20V4\" /><path d=\"m3 8 4-4 4 4\" /><path d=\"M7 4v16\" />","space_dashboard":"<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\" /><rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\" /><rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\" />","star":"<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\" />","stethoscope":"<path d=\"M11 2v2\" /><path d=\"M5 2v2\" /><path d=\"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1\" /><path d=\"M8 15a6 6 0 0 0 12 0v-3\" /><circle cx=\"20\" cy=\"10\" r=\"2\" />","sync":"<path d=\"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8\" /><path d=\"M3 3v5h5\" /><path d=\"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16\" /><path d=\"M16 16h5v5\" />","table_rows":"<path d=\"M12 3v18\" /><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\" /><path d=\"M3 9h18\" /><path d=\"M3 15h18\" />","timer":"<line x1=\"10\" x2=\"14\" y1=\"2\" y2=\"2\" /><line x1=\"12\" x2=\"15\" y1=\"14\" y2=\"11\" /><circle cx=\"12\" cy=\"14\" r=\"8\" />","trending_down":"<polyline points=\"22 17 13.5 8.5 8.5 13.5 2 7\" /><polyline points=\"16 17 22 17 22 11\" />","trending_up":"<polyline points=\"22 7 13.5 15.5 8.5 10.5 2 17\" /><polyline points=\"16 7 22 7 22 13\" />","tune":"<line x1=\"21\" x2=\"14\" y1=\"4\" y2=\"4\" /><line x1=\"10\" x2=\"3\" y1=\"4\" y2=\"4\" /><line x1=\"21\" x2=\"12\" y1=\"12\" y2=\"12\" /><line x1=\"8\" x2=\"3\" y1=\"12\" y2=\"12\" /><line x1=\"21\" x2=\"16\" y1=\"20\" y2=\"20\" /><line x1=\"12\" x2=\"3\" y1=\"20\" y2=\"20\" /><line x1=\"14\" x2=\"14\" y1=\"2\" y2=\"6\" /><line x1=\"8\" x2=\"8\" y1=\"10\" y2=\"14\" /><line x1=\"16\" x2=\"16\" y1=\"18\" y2=\"22\" />","undo":"<path d=\"M9 14 4 9l5-5\" /><path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11\" />","unfold_more":"<path d=\"m7 15 5 5 5-5\" /><path d=\"m7 9 5-5 5 5\" />","upload":"<path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\" /><polyline points=\"17 8 12 3 7 8\" /><line x1=\"12\" x2=\"12\" y1=\"3\" y2=\"15\" />","upload_file":"<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\" /><path d=\"M14 2v4a2 2 0 0 0 2 2h4\" /><path d=\"M12 12v6\" /><path d=\"m15 15-3-3-3 3\" />","vaccines":"<path d=\"m18 2 4 4\" /><path d=\"m17 7 3-3\" /><path d=\"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5\" /><path d=\"m9 11 4 4\" /><path d=\"m5 19-3 3\" /><path d=\"m14 4 6 6\" />","verified":"<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\" /><path d=\"m9 12 2 2 4-4\" />","visibility":"<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" /><circle cx=\"12\" cy=\"12\" r=\"3\" />","visibility_off":"<path d=\"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49\" /><path d=\"M14.084 14.158a3 3 0 0 1-4.242-4.242\" /><path d=\"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143\" /><path d=\"m2 2 20 20\" />","volume_off":"<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><line x1=\"22\" x2=\"16\" y1=\"9\" y2=\"15\" /><line x1=\"16\" x2=\"22\" y1=\"9\" y2=\"15\" />","volume_up":"<path d=\"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z\" /><path d=\"M16 9a5 5 0 0 1 0 6\" /><path d=\"M19.364 18.364a9 9 0 0 0 0-12.728\" />","wallet":"<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\" /><path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\" />","warning":"<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\" /><path d=\"M12 9v4\" /><path d=\"M12 17h.01\" />","water_drop":"<path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\" />"};
  var NS = 'http://www.w3.org/2000/svg';
  function svgFor(name) {
    var body = ICONS[name] || ICONS.help;
    return '<svg xmlns="' + NS + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + body + '</svg>';
  }
  function paint(el) {
    var n = el.getAttribute('data-i');
    if (el.__axi === n) return;
    el.__axi = n; el.innerHTML = svgFor(n);
    if (!el.hasAttribute('aria-label') && !el.hasAttribute('role')) el.setAttribute('aria-hidden', 'true');
  }
  function hydrate(root) {
    if (!root || !root.querySelectorAll) return;
    if (root.matches && root.matches('i.ax-i[data-i]')) paint(root);
    root.querySelectorAll('i.ax-i[data-i]').forEach(paint);
  }
  var icon = function (name, cls) { return '<i class="ax-i' + (cls ? ' ' + cls : '') + '" data-i="' + name + '"></i>'; };
  var ready = false;
  function startObserver() {
    hydrate(d.body);
    new MutationObserver(function (list) {
      list.forEach(function (m) {
        if (m.type === 'attributes') { if (m.target.matches && m.target.matches('i.ax-i')) paint(m.target); }
        else m.addedNodes.forEach(function (n) { if (n.nodeType === 1) { hydrate(n); if (ready) init(n); } });
      });
    }).observe(d.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-i'] });
  }
  if (d.body) startObserver(); else d.addEventListener('DOMContentLoaded', startObserver);

  /* ── Som ──────────────────────────────────────────────────────────────
     Notas da pentatônica de Mi maior; volume máximo de -18 dBFS. Aqui começa ligado para as demonstrações;
     nos produtos, sound.enabled começa false e a pessoa liga em Preferências. Exceção: o alerta crítico do Status. */
  var N = { E4: 329.63, Gs4: 415.30, B4: 493.88, Cs5: 554.37, E5: 659.25, Fs5: 739.99, Gs5: 830.61, B5: 987.77, Cs6: 1108.73, E6: 1318.51 };
  var SOUNDS = {
    tap:      { notes: [['B5', 0, 0.03]], wave: 'sine', gain: 0.35, desc: 'Toque: confirmação mínima de um botão. Opcional.' },
    toggleOn: { notes: [['Gs5', 0, 0.05], ['B5', 0.045, 0.07]], wave: 'sine', gain: 0.45, desc: 'Ligar um interruptor.' },
    toggleOff:{ notes: [['B5', 0, 0.05], ['Gs5', 0.045, 0.07]], wave: 'sine', gain: 0.4, desc: 'Desligar um interruptor.' },
    success:  { notes: [['E5', 0, 0.12], ['B5', 0.09, 0.22]], wave: 'sine', gain: 0.7, bell: true, desc: 'Ação concluída: salvar, enviar, receber.' },
    notify:   { notes: [['Cs6', 0, 0.55]], wave: 'sine', gain: 0.6, bell: true, desc: 'Algo novo chegou: mensagem, solicitação respondida.' },
    warning:  { notes: [['B4', 0, 0.12], ['B4', 0.16, 0.16]], wave: 'triangle', gain: 0.6, desc: 'Atenção: prazo perto, sistema instável.' },
    error:    { notes: [['Gs4', 0, 0.14], ['E4', 0.12, 0.26]], wave: 'triangle', gain: 0.65, desc: 'Não deu certo. Grave e curto, nunca estridente.' },
    complete: { notes: [['E5', 0, 0.16], ['Gs5', 0.08, 0.16], ['B5', 0.16, 0.18], ['E6', 0.24, 0.42]], wave: 'sine', gain: 0.6, bell: true, desc: 'Marco atingido: Carnê-Leão do mês em dia, cadastro concluído.' },
    critical: { notes: [['E5', 0, 0.16], ['B4', 0.2, 0.16], ['E5', 0.4, 0.16], ['B4', 0.6, 0.24]], wave: 'square', gain: 0.32, desc: 'Sistema fora do ar (só no Axioma Status). Repete até alguém reconhecer.' }
  };
  var ctx = null, master = null;
  var sound = {
    enabled: false, volume: 0.8, list: SOUNDS,
    ensure: function () {
      if (!ctx) { var AC = w.AudioContext || w.webkitAudioContext; if (!AC) return null; ctx = new AC(); master = ctx.createGain(); master.gain.value = 0.125; master.connect(ctx.destination); }
      if (ctx.state === 'suspended') ctx.resume();
      return ctx;
    },
    play: function (name) {
      var s = SOUNDS[name]; if (!s || !this.enabled) return;
      var c = this.ensure(); if (!c) return;
      var t0 = c.currentTime + 0.01, vol = this.volume;
      s.notes.forEach(function (n) {
        var f = N[n[0]], start = t0 + n[1], dur = n[2];
        voice(c, f, start, dur, s.wave, s.gain * vol);
        if (s.bell) voice(c, f * 2.76, start, dur * 0.5, 'sine', s.gain * vol * 0.12);
      });
    }
  };
  function voice(c, freq, start, dur, wave, peak) {
    var o = c.createOscillator(), g = c.createGain(), lp = c.createBiquadFilter();
    o.type = wave; o.frequency.setValueAtTime(freq, start);
    lp.type = 'lowpass'; lp.frequency.value = wave === 'square' ? 2400 : 6000;
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), start + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    o.connect(lp); lp.connect(g); g.connect(master);
    o.start(start); o.stop(start + dur + 0.05);
  }

  /* ── Háptica ── */
  var HAPTICS = { tap: [8], success: [12, 40, 12], warning: [20, 60, 20], error: [40, 30, 40], critical: [80, 40, 80, 40, 80] };
  var haptic = { list: HAPTICS, play: function (name) { try { if (navigator.vibrate && HAPTICS[name]) navigator.vibrate(HAPTICS[name]); } catch (e) {} } };

  /* ── Toast ── */
  var TICON = { info: 'info', success: 'check', danger: 'close', warning: 'warning' };
  function region() {
    var r = d.querySelector('.ax-toast-region');
    if (!r) { r = d.createElement('div'); r.className = 'ax-toast-region'; d.body.appendChild(r); }
    return r;
  }
  function toast(o) {
    o = o || {}; var tone = o.tone || 'info';
    var persistent = tone === 'danger' || o.duration === 0;
    var ms = o.duration || (o.action ? 8000 : 5000);
    var el = d.createElement('div');
    el.className = 'ax-toast'; el.setAttribute('data-tone', tone);
    el.setAttribute('role', tone === 'danger' ? 'alert' : 'status');
    el.innerHTML = '<span class="ax-toast__icon">' + icon(TICON[tone]) + '</span>' +
      '<div class="ax-toast__body"><p class="ax-toast__title"></p>' + (o.text ? '<p class="ax-toast__text"></p>' : '') + '</div>' +
      (o.action ? '<button class="ax-toast__action" type="button"></button>' : '') +
      '<button class="ax-icon-btn" type="button" aria-label="Fechar aviso">' + icon('close') + '</button>' +
      (persistent ? '' : '<span class="ax-toast__timer" style="animation-duration:' + ms + 'ms"></span>');
    el.querySelector('.ax-toast__title').textContent = o.title || '';
    if (o.text) el.querySelector('.ax-toast__text').textContent = o.text;
    var close = function () { el.setAttribute('data-leaving', ''); setTimeout(function () { el.remove(); }, 220); };
    if (o.action) { var a = el.querySelector('.ax-toast__action'); a.textContent = o.action; a.onclick = function () { if (o.onAction) o.onAction(); close(); }; }
    el.querySelector('.ax-icon-btn').onclick = close;
    var r = region(); r.appendChild(el);
    while (r.children.length > 3) r.firstElementChild.remove();
    if (!persistent) {
      var left = ms, last = Date.now(), paused = false;
      var tick = setInterval(function () { var now = Date.now(); if (!paused) left -= now - last; last = now; if (left <= 0) { clearInterval(tick); close(); } }, 100);
      ['mouseenter', 'focusin'].forEach(function (ev) { el.addEventListener(ev, function () { paused = true; }); });
      ['mouseleave', 'focusout'].forEach(function (ev) { el.addEventListener(ev, function () { paused = false; }); });
    }
    if (o.sound !== false && sound.enabled) sound.play(tone === 'danger' ? 'error' : tone === 'warning' ? 'warning' : tone === 'success' ? 'success' : 'notify');
    return { close: close, el: el };
  }

  /* ── Seletor próprio ──
     Marcação: .ax-select > button.ax-input.ax-select__trigger (.ax-select__value + chevron)
               + .ax-select__pop[hidden] > [.ax-select__search] + ul.ax-select__list[role=listbox] > li.ax-option[role=option][data-value]
     Por categoria: ul.ax-select__list > li.ax-select__section[role=group] > span.ax-select__group + ul.ax-select__options[role=none] > li.ax-option
               (ou, mais simples, li.ax-select__group soltos entre as opções: o runtime monta as seções)
     Busca: ignora acentos e maiúsculas, procura no nome, na dica e no nome da categoria, destaca o trecho e esconde categoria vazia.
     Teclado: ↑ ↓ Home End movem, Enter/Espaço escolhem, Esc fecha, letras pulam para a opção. */
  function select(root) {
    if (root.__axsel) return root.__axsel;
    var trig = root.querySelector('.ax-select__trigger'), pop = root.querySelector('.ax-select__pop');
    var list = root.querySelector('.ax-select__list'), val = root.querySelector('.ax-select__value');
    var search = root.querySelector('.ax-select__search input');
    var uid = 'axs' + Math.random().toString(36).slice(2, 8);
    list.id = list.id || uid + '-list';
    /* Categorias escritas soltas (li.ax-select__group entre as opções) viram seções com role=group */
    Array.prototype.slice.call(list.children).forEach(function (g, gi) {
      if (!g.classList.contains('ax-select__group')) return;
      var sec = d.createElement('li'), lab = d.createElement('span'), ul = d.createElement('ul');
      sec.className = 'ax-select__section'; sec.setAttribute('role', 'group');
      lab.className = 'ax-select__group'; lab.id = g.id || uid + '-g' + gi; lab.innerHTML = g.innerHTML;
      ul.className = 'ax-select__options'; ul.setAttribute('role', 'none');
      sec.setAttribute('aria-labelledby', lab.id); sec.appendChild(lab); sec.appendChild(ul);
      var n = g.nextElementSibling;
      while (n && n.classList.contains('ax-option')) { var nx = n.nextElementSibling; ul.appendChild(n); n = nx; }
      list.replaceChild(sec, g);
    });
    list.querySelectorAll('.ax-select__section').forEach(function (sec, gi) {
      var lab = sec.querySelector('.ax-select__group'); if (!lab) return;
      lab.id = lab.id || uid + '-g' + gi; sec.setAttribute('role', 'group'); sec.setAttribute('aria-labelledby', lab.id); sec.__axGroup = lab.textContent.trim();
      if (!lab.querySelector('.ax-select__group-count')) lab.insertAdjacentHTML('beforeend', '<span class="ax-select__group-count" aria-hidden="true" hidden></span>');
    });
    /* O texto de cada opção num span próprio, para destacar o trecho buscado sem mexer em ícone e dica */
    list.querySelectorAll('.ax-option').forEach(function (o) {
      if (o.querySelector('.ax-option__label')) return;
      var sp = d.createElement('span'); sp.className = 'ax-option__label';
      Array.prototype.slice.call(o.childNodes).forEach(function (n) { if (n.nodeType === 3 && n.textContent.trim()) { if (!sp.parentNode) o.insertBefore(sp, n); sp.appendChild(n); } });
      if (sp.parentNode) o.__axText = sp.textContent.trim();
    });
    trig.setAttribute('aria-haspopup', 'listbox'); trig.setAttribute('aria-expanded', 'false'); trig.setAttribute('aria-controls', list.id);
    var opts = function () { return Array.prototype.slice.call(list.querySelectorAll('.ax-option:not([hidden]):not([aria-disabled="true"])')); };
    list.querySelectorAll('.ax-option').forEach(function (o, i) { o.id = o.id || uid + '-' + i; if (!o.querySelector('.ax-option__check')) o.insertAdjacentHTML('beforeend', icon('check', 'ax-option__check')); });
    var active = null, typed = '', typedT = 0;
    function setActive(o) {
      list.querySelectorAll('[data-active]').forEach(function (x) { x.removeAttribute('data-active'); });
      active = o; if (!o) return;
      o.setAttribute('data-active', ''); (search || list).setAttribute('aria-activedescendant', o.id);
      var r = o.getBoundingClientRect(), lr = list.getBoundingClientRect();
      if (r.bottom > lr.bottom) list.scrollTop += r.bottom - lr.bottom; else if (r.top < lr.top) list.scrollTop -= lr.top - r.top;
    }
    function open() {
      if (!pop.hidden) return;
      pop.removeAttribute('data-leaving'); pop.hidden = false; trig.setAttribute('aria-expanded', 'true');
      var tr = trig.getBoundingClientRect();
      pop.toggleAttribute('data-up', w.innerHeight - tr.bottom < 260 && tr.top > 260);
      setActive(list.querySelector('[aria-selected="true"]') || opts()[0]);
      (search || list).focus({ preventScroll: true });
      d.addEventListener('pointerdown', outside, true);
    }
    function close(focusBack) {
      if (pop.hidden) return;
      trig.setAttribute('aria-expanded', 'false'); pop.setAttribute('data-leaving', '');
      d.removeEventListener('pointerdown', outside, true);
      setTimeout(function () { pop.hidden = true; pop.removeAttribute('data-leaving'); if (search) { search.value = ''; filter(''); } }, reduceMotion() ? 0 : 120);
      if (focusBack !== false) trig.focus({ preventScroll: true });
    }
    function outside(e) { if (!root.contains(e.target)) close(false); }
    function choose(o) {
      if (!o) return;
      list.querySelectorAll('.ax-option').forEach(function (x) { x.setAttribute('aria-selected', x === o ? 'true' : 'false'); });
      var label = o.getAttribute('data-label') || o.__axText || o.textContent.trim();
      val.textContent = label; val.removeAttribute('data-placeholder');
      root.setAttribute('data-value', o.getAttribute('data-value') || label);
      syncHidden();
      var fld = root.closest('.ax-field'); if (fld && fld.hasAttribute('data-invalid')) validateField(root);
      root.dispatchEvent(new CustomEvent('ax-change', { bubbles: true, detail: { value: root.getAttribute('data-value'), label: label } }));
      sound.play('tap'); close();
    }
    function syncHidden() {
      var h = root.querySelector('input[type="hidden"]'); if (!h) return;
      h.value = root.getAttribute('data-value') || ''; h.dispatchEvent(new Event('change', { bubbles: true }));
    }
    function setValue(v) {
      var o = null; list.querySelectorAll('.ax-option').forEach(function (x) { if (x.getAttribute('data-value') === String(v)) o = x; });
      if (!o) return;
      list.querySelectorAll('.ax-option').forEach(function (x) { x.setAttribute('aria-selected', x === o ? 'true' : 'false'); });
      val.textContent = o.getAttribute('data-label') || o.__axText || o.textContent.trim(); val.removeAttribute('data-placeholder');
      root.setAttribute('data-value', v); syncHidden();
    }
    var pre = list.querySelector('.ax-option[aria-selected="true"]');
    if (pre && !root.hasAttribute('data-value')) { root.setAttribute('data-value', pre.getAttribute('data-value') || ''); var h0 = root.querySelector('input[type="hidden"]'); if (h0 && !h0.value) h0.value = root.getAttribute('data-value'); }
    function fold(t) { return t.normalize ? t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase() : t.toLowerCase(); }
    function esc(t) { return t.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function mark(o, ql) {
      var sp = o.querySelector('.ax-option__label'); if (!sp || o.__axText == null) return;
      var t = o.__axText, chars = Array.from(t), folded = chars.map(fold), i = ql ? folded.join('').indexOf(ql) : -1;
      if (i < 0) { sp.textContent = t; return; }
      var pos = 0, a = -1, b = -1;
      for (var k = 0; k < chars.length; k++) { if (a < 0 && pos >= i) a = k; pos += folded[k].length; if (a >= 0 && pos >= i + ql.length) { b = k + 1; break; } }
      if (a < 0 || b < 0) { sp.textContent = t; return; }
      sp.innerHTML = esc(chars.slice(0, a).join('')) + '<mark>' + esc(chars.slice(a, b).join('')) + '</mark>' + esc(chars.slice(b).join(''));
    }
    function filter(q) {
      var any = false, ql = fold(q.trim());
      list.querySelectorAll('.ax-option').forEach(function (o) {
        var sec = o.closest('.ax-select__section'), g = sec && sec.__axGroup ? fold(sec.__axGroup) : '';
        var t = fold(((o.getAttribute('data-label') || o.__axText || o.textContent) + ' ' + ((o.querySelector('.ax-option__hint') || {}).textContent || '')).trim());
        var hit = !ql || t.indexOf(ql) > -1 || (g && g.indexOf(ql) > -1);
        o.hidden = !hit; any = any || hit; mark(o, ql);
      });
      list.querySelectorAll('.ax-select__section').forEach(function (sec) {
        var n = sec.querySelectorAll('.ax-option:not([hidden])').length, c = sec.querySelector('.ax-select__group-count');
        sec.hidden = !n; if (c) { c.hidden = !ql; c.textContent = n; }
      });
      var empty = list.querySelector('.ax-select__empty');
      if (!any && !empty) { empty = d.createElement('li'); empty.className = 'ax-select__empty'; list.appendChild(empty); }
      if (empty) { empty.hidden = any; empty.textContent = 'Nada encontrado para "' + q + '".'; }
      setActive(opts()[0]);
    }
    function key(e) {
      var all = opts(), i = all.indexOf(active);
      if (e.key === 'ArrowDown') { e.preventDefault(); if (pop.hidden) open(); else setActive(all[Math.min(i + 1, all.length - 1)]); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); if (pop.hidden) open(); else setActive(all[Math.max(i - 1, 0)]); }
      else if (e.key === 'Home' && !pop.hidden) { e.preventDefault(); setActive(all[0]); }
      else if (e.key === 'End' && !pop.hidden) { e.preventDefault(); setActive(all[all.length - 1]); }
      else if (e.key === 'Enter' || (e.key === ' ' && e.target !== search)) { e.preventDefault(); if (pop.hidden) open(); else choose(active); }
      else if (e.key === 'Escape') { if (!pop.hidden) { e.preventDefault(); close(); } }
      else if (e.key === 'Tab') close(false);
      else if (!search && e.key.length === 1) {
        var now = Date.now(); typed = (now - typedT > 700 ? '' : typed) + e.key.toLowerCase(); typedT = now;
        var hit = all.find(function (o) { return fold(o.__axText || o.textContent.trim()).indexOf(fold(typed)) === 0; });
        if (hit) { if (pop.hidden) choose(hit); else setActive(hit); }
      }
    }
    trig.addEventListener('click', function () { pop.hidden ? open() : close(); });
    trig.addEventListener('keydown', key); list.addEventListener('keydown', key);
    if (search) { search.addEventListener('keydown', key); search.addEventListener('input', function () { filter(search.value); }); }
    list.addEventListener('pointermove', function (e) { var o = e.target.closest('.ax-option'); if (o && o !== active && !o.hidden) setActive(o); });
    list.addEventListener('click', function (e) { var o = e.target.closest('.ax-option'); if (o && o.getAttribute('aria-disabled') !== 'true') choose(o); });
    return (root.__axsel = { open: open, close: close, choose: choose, setValue: setValue });
  }

  /* ── Marcador que desliza: navegação lateral e inferior ── */
  function nav(root) {
    if (root.__axnav) return; root.__axnav = 1;
    var lateral = root.classList.contains('ax-side__nav');
    var items = Array.prototype.slice.call(root.querySelectorAll(lateral ? '.ax-nav-item' : '.ax-bottomnav__item'));
    var ink = d.createElement('span'); ink.className = lateral ? 'ax-nav-ink' : 'ax-bottomnav__ink'; ink.setAttribute('aria-hidden', 'true');
    root.insertBefore(ink, root.firstChild); root.setAttribute('data-ink', '');
    function place(anim) {
      var on = root.querySelector('[aria-current="page"]'); ink.style.opacity = on ? 1 : 0; if (!on) return;
      if (!anim) ink.style.transition = 'none';
      if (lateral) { ink.style.transform = 'translateY(' + on.offsetTop + 'px)'; ink.style.height = on.offsetHeight + 'px'; }
      else { var pill = on.querySelector('.ax-bottomnav__pill'); ink.style.transform = 'translate(' + (on.offsetLeft + pill.offsetLeft) + 'px,' + (on.offsetTop + pill.offsetTop) + 'px)'; }
      if (!anim) { ink.offsetWidth; ink.style.transition = ''; }
    }
    items.forEach(function (it) {
      it.addEventListener('click', function (e) {
        if (it.getAttribute('href') === '#') e.preventDefault();
        items.forEach(function (x) { if (x === it) x.setAttribute('aria-current', 'page'); else x.removeAttribute('aria-current'); });
        place(true); haptic.play('tap');
      });
    });
    place(false); w.addEventListener('resize', function () { place(false); });
    if (d.fonts) d.fonts.ready.then(function () { place(false); });
  }

  /* ── Controle segmentado e abas ── */
  function seg(root) {
    if (root.__axseg) return; root.__axseg = 1;
    var thumb = root.querySelector('.ax-seg__thumb'), opts = root.querySelectorAll('.ax-seg__opt');
    function place() { var on = root.querySelector('.ax-seg__opt[aria-checked="true"]') || opts[0]; thumb.style.width = on.offsetWidth + 'px'; thumb.style.transform = 'translateX(' + (on.offsetLeft - 3) + 'px)'; }
    opts.forEach(function (b) { b.addEventListener('click', function () { opts.forEach(function (x) { x.setAttribute('aria-checked', x === b ? 'true' : 'false'); }); place(); }); });
    root.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var list = Array.prototype.slice.call(opts), i = list.findIndex(function (x) { return x.getAttribute('aria-checked') === 'true'; });
      var n = list[(i + (e.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length]; n.click(); n.focus(); e.preventDefault();
    });
    place(); w.addEventListener('resize', place); if (d.fonts) d.fonts.ready.then(place);
  }
  function tabs(root) {
    if (root.__axtabs) return; root.__axtabs = 1;
    var ink = root.querySelector('.ax-tabs__ink'), list = Array.prototype.slice.call(root.querySelectorAll('.ax-tab'));
    function place() { var on = root.querySelector('.ax-tab[aria-selected="true"]') || list[0]; ink.style.width = on.offsetWidth + 'px'; ink.style.transform = 'translateX(' + on.offsetLeft + 'px)'; }
    list.forEach(function (t, i) {
      t.addEventListener('click', function () { list.forEach(function (x) { x.setAttribute('aria-selected', x === t ? 'true' : 'false'); x.tabIndex = x === t ? 0 : -1; var pid = x.getAttribute('aria-controls'), pn = pid && d.getElementById(pid); if (pn) pn.hidden = x !== t; }); place(); if (root.onTab) root.onTab(i); });
      t.addEventListener('keydown', function (e) { var dd = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0; if (!dd) return; var n = list[(i + dd + list.length) % list.length]; n.focus(); n.click(); e.preventDefault(); });
    });
    place(); w.addEventListener('resize', place); if (d.fonts) d.fonts.ready.then(place);
  }

  /* ── Contagem de números ── */
  function countUp(el, to, opts) {
    opts = opts || {}; var dur = reduceMotion() ? 0 : (opts.ms || 400);
    var fmt = opts.format || function (v) { return Math.round(v).toLocaleString('pt-BR'); };
    if (!dur) { el.textContent = fmt(to); return; }
    var t0 = performance.now(), from = opts.from || 0;
    (function step(t) { var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4); el.textContent = fmt(from + (to - from) * e); if (k < 1) requestAnimationFrame(step); })(t0);
  }

  var fmt = {
    money: function (v) { return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); },
    date: function (x) { return new Date(x).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).replace('.', ''); },
    pct: function (v, n) { return v.toLocaleString('pt-BR', { minimumFractionDigits: n || 0, maximumFractionDigits: n || 0 }) + '%'; }
  };


  /* ═══ MÓDULOS v0.3 · comportamento de aplicação ═══ */
  function each(root, sel, fn) {
    root = root || d;
    if (root.nodeType === 1 && root.matches(sel)) fn(root);
    if (root.querySelectorAll) root.querySelectorAll(sel).forEach(fn);
  }

  /* ── Preferências da pessoa (tema, som, movimento) ──
     Só valem onde <html data-ax-prefs>; guardadas em localStorage 'axioma.eixo'. Tema 'auto' segue o sistema,
     e "mais contraste" do sistema vira o tema contraste. */
  var PKEY = 'axioma.eixo';
  var prefs = {
    read: function () { try { return JSON.parse(localStorage.getItem(PKEY) || '{}') || {}; } catch (e) { return {}; } },
    get: function (k) { return this.read()[k]; },
    set: function (k, v) {
      var p = this.read(); p[k] = v;
      try { localStorage.setItem(PKEY, JSON.stringify(p)); } catch (e) {}
      applyPrefs(); d.dispatchEvent(new CustomEvent('ax-prefs', { detail: p }));
    },
    theme: function () { var t = this.get('theme'); return t && t !== 'auto' ? t : systemTheme(); }
  };
  function mq(q) { return !!(w.matchMedia && w.matchMedia(q).matches); }
  function systemTheme() { return mq('(prefers-contrast: more)') ? 'contraste' : mq('(prefers-color-scheme: dark)') ? 'dark' : 'light'; }
  function applyPrefs() {
    var h = d.documentElement; if (!h.hasAttribute('data-ax-prefs')) return;
    var p = prefs.read();
    h.setAttribute('data-theme', prefs.theme());
    h.classList.toggle('ax-reduce-motion', p.motion === 'reduce');
    if (typeof p.sound === 'boolean') sound.enabled = p.sound;
  }
  applyPrefs();
  ['(prefers-color-scheme: dark)', '(prefers-contrast: more)'].forEach(function (q) {
    if (!w.matchMedia) return; var m = w.matchMedia(q), f = function () { applyPrefs(); };
    if (m.addEventListener) m.addEventListener('change', f); else if (m.addListener) m.addListener(f);
  });
  function bindPrefs(root) {
    each(root, '[data-ax-pref]', function (el) {
      if (el.__axpref) return; el.__axpref = 1;
      var k = el.getAttribute('data-ax-pref'), cur = prefs.get(k);
      if (el.classList.contains('ax-select')) {
        var api = select(el); api.setValue(k === 'theme' ? (cur || 'auto') : cur);
        el.addEventListener('ax-change', function (e) { prefs.set(k, e.detail.value); });
      } else if (el.type === 'checkbox') {
        el.checked = k === 'motion' ? cur === 'reduce' : typeof cur === 'boolean' ? cur : k === 'sound' ? sound.enabled : false;
        el.addEventListener('change', function () { prefs.set(k, k === 'motion' ? (el.checked ? 'reduce' : 'auto') : el.checked); if (k === 'sound' && el.checked) sound.play('toggleOn'); });
      }
    });
  }

  /* ── Botão ocupado: evita envio duplo e mostra progresso ── */
  function busy(btn, on) {
    if (!btn) return;
    if (on) {
      if (btn.getAttribute('aria-busy') === 'true') return;
      btn.setAttribute('aria-busy', 'true'); btn.__axw = btn.style.minWidth; btn.style.minWidth = btn.offsetWidth + 'px';
      if (!btn.querySelector('.ax-spinner')) btn.insertAdjacentHTML('afterbegin', '<span class="ax-spinner" aria-hidden="true"></span>');
      setTimeout(function () { btn.disabled = true; }, 0);
    } else {
      btn.removeAttribute('aria-busy'); btn.disabled = false; btn.style.minWidth = btn.__axw || '';
      var sp = btn.querySelector('.ax-spinner'); if (sp) sp.remove();
    }
  }
  w.addEventListener('pageshow', function () { d.querySelectorAll('.ax-btn[aria-busy="true"]').forEach(function (b) { busy(b, false); }); });

  /* ── Validação em português: form[data-ax-validate] ──
     Usa as regras do próprio HTML (required, type, pattern, minlength, min, max) e data-ax-valid="cpf|cnpj|cpf-cnpj".
     Mensagens próprias: data-error (formato) e data-error-missing (vazio). */
  var MSG = { missing: 'Preencha este campo.', choose: 'Escolha uma opção.', email: 'Digite um e-mail válido, como nome@exemplo.com.', url: 'Digite um endereço completo, com https://.',
    pattern: 'Confira o formato.', short: 'Use pelo menos {n} caracteres.', low: 'Use um valor a partir de {n}.', high: 'Use um valor até {n}.', number: 'Digite só números.',
    cpf: 'Esse CPF não existe. Confira os 11 números.', cnpj: 'Esse CNPJ não existe. Confira os 14 números.' };
  function cpfOk(v) { v = v.replace(/\D/g, ''); if (v.length !== 11 || /^(\d)\1+$/.test(v)) return false; for (var t = 9; t < 11; t++) { var s = 0; for (var i = 0; i < t; i++) s += v[i] * (t + 1 - i); if (((s * 10) % 11) % 10 != v[t]) return false; } return true; }
  function cnpjOk(v) { v = v.replace(/\D/g, ''); if (v.length !== 14 || /^(\d)\1+$/.test(v)) return false; var c = function (n) { var s = 0, p = n - 7; for (var i = 0; i < n; i++) { s += v[i] * p--; if (p < 2) p = 9; } var r = s % 11; return r < 2 ? 0 : 11 - r; }; return c(12) == v[12] && c(13) == v[13]; }
  var VALID = { cpf: cpfOk, cnpj: cnpjOk, 'cpf-cnpj': function (v) { return v.replace(/\D/g, '').length > 11 ? cnpjOk(v) : cpfOk(v); } };
  function messageFor(el) {
    if (el.classList && el.classList.contains('ax-select')) {
      return el.hasAttribute('data-required') && !el.getAttribute('data-value') ? (el.getAttribute('data-error-missing') || MSG.choose) : '';
    }
    if (el.__axdate) el.setCustomValidity(el.__axdate.erro());
    var kind = el.getAttribute('data-ax-valid');
    if (kind && VALID[kind]) el.setCustomValidity(el.value && !VALID[kind](el.value) ? (el.getAttribute('data-error') || MSG[kind] || MSG[kind.split('-')[0]]) : '');
    var v = el.validity; if (!v || v.valid) return '';
    if (v.valueMissing) return el.getAttribute('data-error-missing') || (el.type === 'checkbox' || el.type === 'radio' ? MSG.choose : MSG.missing);
    if (v.customError) return el.validationMessage;
    var own = el.getAttribute('data-error'); if (own) return own;
    if (v.typeMismatch) return MSG[el.type] || MSG.pattern;
    if (v.badInput) return MSG.number;
    if (v.patternMismatch) return MSG.pattern;
    if (v.tooShort) return MSG.short.replace('{n}', el.minLength);
    if (v.rangeUnderflow) return MSG.low.replace('{n}', el.min);
    if (v.rangeOverflow) return MSG.high.replace('{n}', el.max);
    return el.validationMessage;
  }
  function showError(el, text) {
    var f = el.closest('.ax-field'), target = el.classList.contains('ax-select') ? el.querySelector('.ax-select__trigger') : el;
    target.setAttribute('aria-invalid', text ? 'true' : 'false');
    if (!f) return;
    f.toggleAttribute('data-invalid', !!text);
    var box = f.querySelector('.ax-field__error');
    if (!box && !text) return;
    if (!box) { box = d.createElement('p'); box.className = 'ax-field__error'; f.appendChild(box); }
    box.id = box.id || 'axe' + Math.random().toString(36).slice(2, 8);
    var desc = (target.getAttribute('aria-describedby') || '').split(' ').filter(function (x) { return x && x !== box.id; });
    if (text) { desc.push(box.id); box.innerHTML = icon('error') + '<span></span>'; box.lastChild.textContent = text; box.style.animation = 'none'; box.offsetWidth; box.style.animation = ''; }
    else box.innerHTML = '';
    if (desc.length) target.setAttribute('aria-describedby', desc.join(' ')); else target.removeAttribute('aria-describedby');
  }
  function validateField(el) { var m = messageFor(el); showError(el, m); return !m; }
  function controls(form) {
    return Array.prototype.slice.call(form.querySelectorAll('input:not([type="hidden"]):not([disabled]), textarea:not([disabled]), .ax-select[data-required]'))
      .filter(function (el) { return !el.closest('[hidden]') && !(el.closest('.ax-select') && el.tagName === 'INPUT'); });
  }
  function labelOf(el) {
    var f = el.closest('.ax-field'), l = f && f.querySelector('.ax-field__label, legend');
    return l ? l.textContent.replace(/\s*\(opcional\)\s*/i, '').trim() : (el.getAttribute('aria-label') || el.name || 'Campo');
  }
  function validate(form) {
    var bad = controls(form).filter(function (el) { return !validateField(el); });
    var sum = form.querySelector(':scope > .ax-error-summary[data-auto]');
    if (sum) sum.remove();
    if (bad.length > 1) {
      sum = d.createElement('div'); sum.className = 'ax-error-summary'; sum.setAttribute('data-auto', ''); sum.setAttribute('role', 'alert'); sum.tabIndex = -1;
      sum.innerHTML = '<h2>' + icon('error') + '<span></span></h2><ul></ul>';
      sum.querySelector('h2 span').textContent = 'Corrija ' + bad.length + ' campos para continuar';
      bad.forEach(function (el) {
        var tgt = el.classList.contains('ax-select') ? el.querySelector('.ax-select__trigger') : el;
        if (!tgt.id) tgt.id = 'axc' + Math.random().toString(36).slice(2, 8);
        var li = d.createElement('li'), a = d.createElement('a'); a.href = '#' + tgt.id; a.textContent = labelOf(el) + ': ' + messageFor(el);
        a.addEventListener('click', function (e) { e.preventDefault(); tgt.focus(); }); li.appendChild(a); sum.querySelector('ul').appendChild(li);
      });
      form.insertBefore(sum, form.firstChild);
    }
    return bad;
  }
  d.addEventListener('submit', function (e) {
    var f = e.target; if (!f.matches || !f.matches('form[data-ax-validate]')) return;
    var bad = validate(f);
    if (bad.length) {
      e.preventDefault(); e.stopImmediatePropagation();
      var first = bad[0].classList.contains('ax-select') ? bad[0].querySelector('.ax-select__trigger') : bad[0];
      var sum = f.querySelector('.ax-error-summary[data-auto]');
      (sum || first).focus(); if (!sum) first.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' });
      haptic.play('error'); sound.play('error');
    }
  }, true);
  d.addEventListener('focusout', function (e) {
    var el = e.target; if (!el.closest || !el.closest('form[data-ax-validate]') || !el.matches('input, textarea')) return;
    if (el.value || el.getAttribute('aria-invalid') === 'true') validateField(el);
  });
  d.addEventListener('input', function (e) {
    var el = e.target; if (el.getAttribute && el.getAttribute('aria-invalid') === 'true') validateField(el);
  });

  /* ── Máscaras brasileiras: data-ax-mask="cpf|cnpj|cpf-cnpj|cep|telefone|data|mes|periodo|moeda" ── */
  var MASKS = {
    cpf: function (v) { v = v.replace(/\D/g, '').slice(0, 11); return v.replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})$/, '$1-$2'); },
    cnpj: function (v) { v = v.replace(/\D/g, '').slice(0, 14); return v.replace(/^(\d{2})(\d)/, '$1.$2').replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3').replace(/\.(\d{3})(\d)/, '.$1/$2').replace(/(\d{4})(\d)/, '$1-$2'); },
    'cpf-cnpj': function (v) { return v.replace(/\D/g, '').length > 11 ? MASKS.cnpj(v) : MASKS.cpf(v); },
    cep: function (v) { v = v.replace(/\D/g, '').slice(0, 8); return v.replace(/(\d{5})(\d)/, '$1-$2'); },
    telefone: function (v) { v = v.replace(/\D/g, '').slice(0, 11); return v.length > 10 ? v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2') : v.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2'); },
    data: function (v) { v = v.replace(/\D/g, '').slice(0, 8); return v.replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})(\d)/, '$1/$2'); },
    mes: function (v) { v = v.replace(/\D/g, '').slice(0, 6); return v.replace(/(\d{2})(\d)/, '$1/$2'); },
    periodo: function (v) { v = v.replace(/\D/g, '').slice(0, 16); var a = MASKS.data(v.slice(0, 8)), b = v.length > 8 ? MASKS.data(v.slice(8)) : ''; return b ? a + ' a ' + b : a; },
    moeda: function (v) { var n = v.replace(/\D/g, '').replace(/^0+(?=\d)/, ''); if (!n) return ''; return (parseInt(n, 10) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  };
  function applyMask(el) {
    var fn = MASKS[el.getAttribute('data-ax-mask')]; if (!fn) return;
    var pos = el.selectionStart == null ? el.value.length : el.selectionStart;
    var digitsBefore = el.value.slice(0, pos).replace(/\D/g, '').length, out = fn(el.value);
    if (out === el.value) return;
    el.value = out;
    if (d.activeElement !== el) return;
    var i = 0, seen = 0; while (i < out.length && seen < digitsBefore) { if (/\d/.test(out[i])) seen++; i++; }
    if (el.getAttribute('data-ax-mask') === 'moeda') i = out.length;
    try { el.setSelectionRange(i, i); } catch (er) {}
  }
  d.addEventListener('input', function (e) { if (e.target.hasAttribute && e.target.hasAttribute('data-ax-mask')) applyMask(e.target); }, true);
  function bindMasks(root) {
    each(root, 'input[data-ax-mask]', function (el) {
      if (el.__axmask) return; el.__axmask = 1;
      var k = el.getAttribute('data-ax-mask');
      if (!el.hasAttribute('inputmode')) el.setAttribute('inputmode', k === 'moeda' ? 'decimal' : 'numeric');
      if (el.value) applyMask(el);
    });
  }

  /* ── Diálogos e folhas: <dialog class="ax-dialog | ax-sheet | ax-side-sheet" id="x">
     [data-ax-open="x"] abre; [data-ax-close] fecha (com animação); Esc e clique fora também fecham,
     exceto com data-ax-static. O foco volta para quem abriu. */
  function dlgOpen(dl, from) {
    if (typeof dl === 'string') dl = d.getElementById(dl);
    if (!dl || dl.open) return; bindDialog(dl);
    dl.__axfrom = from || d.activeElement; dl.removeAttribute('data-leaving'); dl.returnValue = '';
    dl.showModal();
    var auto = dl.querySelector('[autofocus]'); if (auto) auto.focus();
  }
  function dlgClose(dl, value) {
    if (typeof dl === 'string') dl = d.getElementById(dl);
    if (!dl || !dl.open || dl.hasAttribute('data-leaving')) return;
    if (reduceMotion()) { dl.close(value || ''); return; }
    dl.setAttribute('data-leaving', '');
    setTimeout(function () { dl.removeAttribute('data-leaving'); dl.close(value || ''); }, 210);
  }
  function bindDialog(dl) {
    if (dl.__axdlg) return; dl.__axdlg = 1;
    dl.addEventListener('cancel', function (e) { e.preventDefault(); if (!dl.hasAttribute('data-ax-static')) dlgClose(dl); });
    dl.addEventListener('pointerdown', function (e) {
      if (e.target !== dl || dl.hasAttribute('data-ax-static')) return;
      var r = dl.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlgClose(dl);
    });
    dl.addEventListener('close', function () { var f = dl.__axfrom; if (f && f.focus && d.contains(f)) f.focus(); });
  }
  d.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target : null; if (!t) return;
    var o = t.closest('[data-ax-open]');
    if (o) { e.preventDefault(); if (openMenu) menuClose(openMenu); dlgOpen(o.getAttribute('data-ax-open'), o); return; }
    var c = t.closest('[data-ax-close]');
    if (c) { var host = c.closest('dialog'); if (host) { e.preventDefault(); dlgClose(host, c.getAttribute('data-ax-close')); } }
  });

  /* ── Confirmação de ação destrutiva: data-ax-confirm="Excluir a receita?" em botão, link ou formulário ──
     Opcionais: data-ax-confirm-text (explicação), data-ax-confirm-ok (rótulo, padrão "Confirmar"),
     data-ax-confirm-tone="primary" quando não for destrutiva. Sem JavaScript, a ação segue direto. */
  function confirmDialog(o) {
    o = o || {};
    return new Promise(function (resolve) {
      var tone = o.tone || 'danger', id = 'axq' + Math.random().toString(36).slice(2, 8);
      var dl = d.createElement('dialog'); dl.className = 'ax-dialog'; dl.setAttribute('role', 'alertdialog'); dl.setAttribute('aria-labelledby', id + 't');
      dl.innerHTML = '<div class="ax-dialog__head">' + (tone === 'danger' ? '<span class="ax-dialog__icon">' + icon('warning') + '</span>' : '') +
        '<h2 class="ax-dialog__title" id="' + id + 't"></h2></div>' + (o.text ? '<p class="ax-dialog__body" id="' + id + 'd"></p>' : '') +
        '<div class="ax-dialog__actions"><button type="button" class="ax-btn ax-btn--secondary" data-ax-close="cancel"></button>' +
        '<button type="button" class="ax-btn ax-btn--' + (tone === 'danger' ? 'danger' : 'primary') + '" data-ax-close="ok"></button></div>';
      dl.querySelector('.ax-dialog__title').textContent = o.title || 'Tem certeza?';
      if (o.text) { dl.querySelector('.ax-dialog__body').textContent = o.text; dl.setAttribute('aria-describedby', id + 'd'); }
      dl.querySelector('[data-ax-close="cancel"]').textContent = o.cancel || 'Cancelar';
      dl.querySelector('[data-ax-close="ok"]').textContent = o.ok || 'Confirmar';
      d.body.appendChild(dl);
      dl.addEventListener('close', function () { var ok = dl.returnValue === 'ok'; setTimeout(function () { dl.remove(); }, 0); resolve(ok); });
      dlgOpen(dl, o.from); dl.querySelector('[data-ax-close="cancel"]').focus();
      if (tone === 'danger') haptic.play('warning');
    });
  }
  function confirmOpts(el) {
    return { title: el.getAttribute('data-ax-confirm'), text: el.getAttribute('data-ax-confirm-text'), ok: el.getAttribute('data-ax-confirm-ok'),
      tone: el.getAttribute('data-ax-confirm-tone') || 'danger', from: (el.closest('.ax-menu') && el.closest('.ax-menu').__axtrig) || el };
  }
  d.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-ax-confirm]'); if (!b || b.tagName === 'FORM' || b.__axok) return;
    if (b.type === 'submit' && b.form && b.form.hasAttribute('data-ax-validate') && validate(b.form).length) return;
    e.preventDefault(); e.stopImmediatePropagation();
    if (openMenu) menuClose(openMenu);
    confirmDialog(confirmOpts(b)).then(function (ok) { if (!ok) return; b.__axok = true; b.click(); b.__axok = false; });
  }, true);
  d.addEventListener('submit', function (e) {
    var f = e.target; if (!f.matches || !f.matches('form[data-ax-confirm]') || f.__axok) return;
    e.preventDefault(); e.stopImmediatePropagation(); var sub = e.submitter;
    confirmDialog(confirmOpts(f)).then(function (ok) {
      if (!ok) return; f.__axok = true;
      if (f.requestSubmit) f.requestSubmit(sub && sub.form === f ? sub : undefined); else f.submit();
      f.__axok = false;
    });
  }, true);
  /* Depois de todos os ouvintes: se ninguém cancelou o envio, o botão fica ocupado até a próxima página. */
  d.addEventListener('submit', function (e) {
    if (e.defaultPrevented) return;
    var f = e.target, b = e.submitter || (f.querySelector && f.querySelector('[type="submit"]'));
    if (b && b.classList && b.classList.contains('ax-btn') && !f.hasAttribute('data-ax-no-busy')) busy(b, true);
  });

  /* ── Menus: <button data-ax-menu="id"> abre <div class="ax-menu" id="id" hidden> ── */
  var openMenu = null;
  function menuItems(m) { return Array.prototype.slice.call(m.querySelectorAll('.ax-menu__item:not([disabled]):not([aria-disabled="true"])')); }
  function menuPlace(m, t) {
    var r = t.getBoundingClientRect(), mw = m.offsetWidth, mh = m.offsetHeight, gap = 6;
    var left = m.getAttribute('data-align') === 'start' ? r.left : r.right - mw;
    left = Math.max(8, Math.min(left, w.innerWidth - mw - 8));
    var up = r.bottom + gap + mh > w.innerHeight - 8 && r.top - gap - mh > 8;
    m.style.left = left + 'px'; m.style.top = (up ? r.top - gap - mh : r.bottom + gap) + 'px';
    m.style.transformOrigin = (up ? 'bottom ' : 'top ') + (m.getAttribute('data-align') === 'start' ? 'left' : 'right');
  }
  function menuOpen(m, t) {
    if (openMenu && openMenu !== m) menuClose(openMenu);
    if (m.parentNode !== d.body) d.body.appendChild(m);
    m.__axtrig = t; m.setAttribute('data-pop', ''); m.removeAttribute('data-leaving'); m.hidden = false;
    t.setAttribute('aria-expanded', 'true'); menuPlace(m, t); openMenu = m;
    var first = menuItems(m)[0]; if (first) first.focus({ preventScroll: true });
  }
  function menuClose(m, focusBack) {
    if (!m || m.hidden) return; var t = m.__axtrig;
    if (t) t.setAttribute('aria-expanded', 'false'); if (openMenu === m) openMenu = null;
    m.setAttribute('data-leaving', '');
    setTimeout(function () { m.hidden = true; m.removeAttribute('data-leaving'); }, reduceMotion() ? 0 : 110);
    if (focusBack && t) t.focus();
  }
  function bindMenus(root) {
    each(root, '[data-ax-menu]', function (t) {
      if (t.__axmenu) return;
      var m = d.getElementById(t.getAttribute('data-ax-menu')); if (!m) return; t.__axmenu = m;
      t.setAttribute('aria-haspopup', 'menu'); t.setAttribute('aria-expanded', 'false'); t.setAttribute('aria-controls', m.id);
      if (!m.hasAttribute('role')) m.setAttribute('role', 'menu');
      menuItems(m).forEach(function (i) { if (!i.hasAttribute('role')) i.setAttribute('role', 'menuitem'); });
      m.hidden = true;
      t.addEventListener('click', function (e) { e.preventDefault(); if (m.hidden) menuOpen(m, t); else menuClose(m, true); });
      t.addEventListener('keydown', function (e) { if (e.key === 'ArrowDown' && m.hidden) { e.preventDefault(); menuOpen(m, t); } });
      if (m.__axmkeys) return; m.__axmkeys = 1;
      m.addEventListener('keydown', function (e) {
        var it = menuItems(m), i = it.indexOf(d.activeElement);
        if (e.key === 'ArrowDown') { e.preventDefault(); it[(i + 1) % it.length].focus(); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); it[(i - 1 + it.length) % it.length].focus(); }
        else if (e.key === 'Home') { e.preventDefault(); it[0].focus(); }
        else if (e.key === 'End') { e.preventDefault(); it[it.length - 1].focus(); }
        else if (e.key === 'Escape') { e.preventDefault(); menuClose(m, true); }
        else if (e.key === 'Tab') menuClose(m);
      });
      m.addEventListener('click', function (e) { if (e.target.closest('.ax-menu__item')) menuClose(m, !e.target.closest('[data-ax-open]')); });
    });
  }
  d.addEventListener('pointerdown', function (e) {
    if (openMenu && !openMenu.contains(e.target) && !(openMenu.__axtrig && openMenu.__axtrig.contains(e.target))) menuClose(openMenu);
  }, true);
  w.addEventListener('resize', function () { if (openMenu) menuClose(openMenu); });
  w.addEventListener('scroll', function () { if (openMenu && openMenu.__axtrig) menuPlace(openMenu, openMenu.__axtrig); }, true);

  /* ── Avisos vindos do servidor: <template data-ax-toast data-tone="success" data-title="Receita salva"> ── */
  function flash(root) {
    each(root, '[data-ax-toast]', function (el) {
      if (el.__axflash) return; el.__axflash = 1;
      var title = el.getAttribute('data-title') || (el.content ? el.content.textContent : el.textContent).trim();
      if (title) toast({ tone: el.getAttribute('data-tone') || 'info', title: title, text: el.getAttribute('data-text') || '', sound: false });
      el.remove();
    });
  }

  /* ── Área de arquivo: .ax-drop com <input type="file"> dentro ── */
  ['dragenter', 'dragover'].forEach(function (ev) { d.addEventListener(ev, function (e) { var z = e.target.closest && e.target.closest('.ax-drop'); if (z) { e.preventDefault(); z.setAttribute('data-over', 'true'); } }); });
  ['dragleave', 'drop'].forEach(function (ev) {
    d.addEventListener(ev, function (e) {
      var z = e.target.closest && e.target.closest('.ax-drop'); if (!z) return;
      if (ev === 'dragleave' && z.contains(e.relatedTarget)) return;
      z.setAttribute('data-over', 'false');
      if (ev === 'drop') {
        e.preventDefault(); var inp = z.querySelector('input[type="file"]');
        if (inp && e.dataTransfer && e.dataTransfer.files.length) { try { inp.files = e.dataTransfer.files; } catch (er) {} inp.dispatchEvent(new Event('change', { bubbles: true })); }
      }
    });
  });
  d.addEventListener('change', function (e) {
    var inp = e.target; if (inp.type !== 'file') return; var z = inp.closest('.ax-drop'), out = z && z.querySelector('.ax-drop__files'); if (!out) return;
    out.textContent = Array.prototype.map.call(inp.files, function (f) { return f.name; }).join(', ');
  });

  /* ── Linha de tabela que leva a outra tela: <tr data-href="/receitas/42"> (o link real fica na primeira célula) ── */
  d.addEventListener('click', function (e) {
    var tr = e.target.closest && e.target.closest('tr[data-href]'); if (!tr) return;
    if (e.target.closest('a, button, input, label, .ax-select, [data-ax-menu]')) return;
    if (w.getSelection && String(w.getSelection())) return;
    if (e.ctrlKey || e.metaKey) w.open(tr.getAttribute('data-href'), '_blank'); else w.location.href = tr.getAttribute('data-href');
  });

  /* ── Números que contam ao aparecer: <b data-ax-count="12480.5" data-ax-format="money|int|pct"> ── */
  function bindCounts(root) {
    each(root, '[data-ax-count]', function (el) {
      if (el.__axcount) return; el.__axcount = 1;
      var to = parseFloat(el.getAttribute('data-ax-count')), f = el.getAttribute('data-ax-format');
      var format = f === 'money' ? fmt.money : f === 'pct' ? function (v) { return fmt.pct(v, 1); } : undefined;
      if (!('IntersectionObserver' in w)) { countUp(el, to, { format: format }); return; }
      var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); countUp(el, to, { format: format }); } });
      io.observe(el);
    });
  }

  /* ── Mostrar senha: <button data-ax-reveal> dentro do .ax-input do campo de senha ── */
  d.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-ax-reveal]'); if (!b) return;
    var inp = b.closest('.ax-input').querySelector('input'); if (!inp) return;
    var show = inp.type === 'password'; inp.type = show ? 'text' : 'password';
    b.setAttribute('aria-pressed', show ? 'true' : 'false'); b.setAttribute('aria-label', show ? 'Esconder senha' : 'Mostrar senha');
    var i = b.querySelector('.ax-i'); if (i) i.setAttribute('data-i', show ? 'visibility_off' : 'visibility');
  });

  /* ── Contador de caracteres: .ax-field com textarea/input[maxlength] e .ax-field__count ── */
  function count(el) {
    var f = el.closest('.ax-field'), c = f && f.querySelector('.ax-field__count'); if (!c || !el.maxLength || el.maxLength < 0) return;
    var left = el.maxLength - el.value.length; c.textContent = el.value.length + ' de ' + el.maxLength;
    c.toggleAttribute('data-near', left <= Math.max(10, el.maxLength * 0.1));
  }
  d.addEventListener('input', function (e) { if (e.target.matches && e.target.matches('textarea, input')) count(e.target); });
  function bindCounters(root) { each(root, '.ax-field__count', function (c) { var el = c.closest('.ax-field').querySelector('textarea, input'); if (el) count(el); }); }

  /* ── Filtro que recarrega a lista: .ax-select[data-ax-submit] envia o formulário ao escolher ── */
  d.addEventListener('ax-change', function (e) {
    var s = e.target.closest && e.target.closest('.ax-select[data-ax-submit]'); if (!s) return;
    var f = s.closest('form'); if (f) { if (f.requestSubmit) f.requestSubmit(); else f.submit(); }
  });

  /* ── Desfoque progressivo: topo de cada barra da aplicação e base da tela no celular ── */
  function pblurEl(side) {
    var el = d.createElement('div'); el.className = 'ax-pblur ax-pblur--' + side; el.setAttribute('aria-hidden', 'true');
    el.innerHTML = '<i></i><i></i><i></i><i></i><i></i><i></i>'; return el;
  }
  function bindPblur(root) {
    each(root, '.ax-app__bar', function (bar) { if (!bar.querySelector(':scope > .ax-pblur')) bar.insertBefore(pblurEl('top'), bar.firstChild); });
    each(root, '.ax-app', function (app) { if (!app.querySelector(':scope > .ax-pblur--bottom')) app.appendChild(pblurEl('bottom')); });
  }

  /* ── Calendário: <input data-ax-date> dentro de .ax-input ──
     data-ax-date="" ou "data" (dd/mm/aaaa) · "periodo" (dd/mm/aaaa a dd/mm/aaaa, com atalhos) · "mes" (competência mm/aaaa).
     data-min / data-max: dd/mm/aaaa (mm/aaaa no modo mes) ou "hoje". No modo mes, meses futuros já vêm desligados (data-max="hoje").
     data-dots="10/11/2026,12/11/2026": ponto sob os dias que têm registros.
     Digitar sempre funciona (máscara, "10/11" completa o ano). O calendário abre ao clicar no campo ou no botão; ↓ leva o foco
     para os dias. Teclado: setas movem um dia, Home/End vão ao começo/fim da semana, Page Up/Down trocam o mês (com Shift, o ano),
     Enter ou Espaço escolhem, Esc fecha e devolve o foco ao campo. Dispara input e change no campo ao escolher. */
  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var SEMANA = [['D', 'domingo'], ['S', 'segunda'], ['T', 'terça'], ['Q', 'quarta'], ['Q', 'quinta'], ['S', 'sexta'], ['S', 'sábado']];
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function hoje() { var t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate()); }
  function dmy(x) { return pad2(x.getDate()) + '/' + pad2(x.getMonth() + 1) + '/' + x.getFullYear(); }
  function mmaa(x) { return pad2(x.getMonth() + 1) + '/' + x.getFullYear(); }
  function chave(x) { return x.getFullYear() + '-' + pad2(x.getMonth() + 1) + '-' + pad2(x.getDate()); }
  function deChave(k) { var p = k.split('-'); return new Date(+p[0], +p[1] - 1, +(p[2] || 1)); }
  function addDias(x, n) { return new Date(x.getFullYear(), x.getMonth(), x.getDate() + n); }
  function addMeses(x, n) { var r = new Date(x.getFullYear(), x.getMonth() + n, 1), fim = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate(); r.setDate(Math.min(x.getDate(), fim)); return r; }
  function mesmoDia(a, b) { return !!(a && b && a.getTime() === b.getTime()); }
  function lerData(s) {
    s = (s || '').trim();
    var m = s.match(/^(\d{1,2})\/(\d{1,2})(?:\/(\d{2}|\d{4}))?$/) || s.match(/^(\d{2})(\d{2})(\d{4})$/);
    if (!m) return null;
    var dd = +m[1], mm = +m[2], aa = m[3] ? +m[3] : hoje().getFullYear(); if (aa < 100) aa += 2000;
    var x = new Date(aa, mm - 1, dd); return x.getMonth() === mm - 1 && x.getDate() === dd ? x : null;
  }
  function lerMes(s) { var m = (s || '').trim().match(/^(\d{1,2})\/(\d{4})$/); return m && +m[1] >= 1 && +m[1] <= 12 ? new Date(+m[2], +m[1] - 1, 1) : null; }
  function lerPeriodo(s) {
    var p = (s || '').trim().split(/\s+(?:a|até)(?:\s+|$)|\s*[–—]\s*/);
    var a = lerData(p[0]), b = p[1] ? lerData(p[1]) : null;
    return a ? { a: a, b: b } : null;
  }
  function datePicker(inp) {
    if (inp.__axdate) return inp.__axdate;
    var modo = inp.getAttribute('data-ax-date') || 'data'; if (['data', 'periodo', 'mes'].indexOf(modo) < 0) modo = 'data';
    var ehMes = modo === 'mes';
    var box = inp.closest('.ax-input') || inp.parentNode, uid = 'axd' + Math.random().toString(36).slice(2, 8);
    if (!inp.hasAttribute('data-ax-mask')) inp.setAttribute('data-ax-mask', modo);
    inp.setAttribute('autocomplete', 'off');
    if (!inp.placeholder) inp.placeholder = ehMes ? 'mm/aaaa' : modo === 'periodo' ? 'dd/mm/aaaa a dd/mm/aaaa' : 'dd/mm/aaaa';
    if (inp.getAttribute('pattern')) inp.removeAttribute('pattern');  // a conferência do calendário (data que existe, limites) substitui o pattern
    var velho = box.querySelector(':scope > .ax-i[data-i^="calendar"], :scope > .ax-i[data-i="event_note"]'); if (velho) velho.remove();
    var btn = d.createElement('button'); btn.type = 'button'; btn.className = 'ax-date__btn';
    btn.setAttribute('aria-label', ehMes ? 'Escolher no calendário de meses' : 'Escolher no calendário');
    btn.setAttribute('aria-haspopup', 'dialog'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = icon(ehMes ? 'calendar_month' : 'calendar_today');
    var pop = d.createElement('div'); pop.className = 'ax-cal ax-cal--pop'; pop.id = uid; pop.hidden = true; pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', ehMes ? 'Escolher mês' : modo === 'periodo' ? 'Escolher período' : 'Escolher data');
    btn.setAttribute('aria-controls', uid);
    box.appendChild(btn); box.appendChild(pop); hydrate(btn);
    function limite(v) { if (!v) return null; if (v === 'hoje') return ehMes ? new Date(hoje().getFullYear(), hoje().getMonth(), 1) : hoje(); return ehMes ? lerMes(v) : lerData(v); }
    var min = limite(inp.getAttribute('data-min')), max = limite(inp.getAttribute('data-max') || (ehMes ? 'hoje' : ''));
    var pontos = {}; (inp.getAttribute('data-dots') || '').split(',').forEach(function (s) { var x = lerData(s); if (x) pontos[chave(x)] = 1; });
    var sel = null, faixa = null, vista = null, foco = null, saindo = 0;
    function fora(x) { return !!((min && x < min) || (max && x > max)); }
    function ler() {
      sel = null; faixa = null;
      if (modo === 'periodo') faixa = lerPeriodo(inp.value);
      else sel = ehMes ? lerMes(inp.value) : lerData(inp.value);
    }
    function base() {
      var x = modo === 'periodo' ? faixa && (faixa.b || faixa.a) : sel;
      if (x) return x;
      var h = ehMes ? new Date(hoje().getFullYear(), hoje().getMonth(), 1) : hoje();
      return max && h > max ? max : min && h < min ? min : h;
    }
    function botaoNav(dir, rot) { return '<button type="button" class="ax-icon-btn" data-nav="' + dir + '" aria-label="' + rot + '">' + icon(dir < 0 ? 'chevron_left' : 'chevron_right') + '</button>'; }
    function render() {
      var h = hoje(), html, i;
      if (ehMes) {
        var ano = vista.getFullYear();
        html = '<div class="ax-cal__head"><span class="ax-cal__month" aria-live="polite">' + ano + '</span><span class="ax-cal__nav">' + botaoNav(-1, 'Ano anterior') + botaoNav(1, 'Próximo ano') + '</span></div><div class="ax-cal__grid ax-cal__grid--months">';
        for (i = 0; i < 12; i++) {
          var mx = new Date(ano, i, 1);
          html += '<button type="button" class="ax-cal__day" data-k="' + chave(mx) + '" tabindex="' + (mesmoDia(mx, foco) ? 0 : -1) + '" aria-label="' + MESES[i] + ' de ' + ano + '"' +
            ' aria-pressed="' + (mesmoDia(mx, sel) ? 'true' : 'false') + '"' + (ano === h.getFullYear() && i === h.getMonth() ? ' aria-current="date"' : '') + (fora(mx) ? ' disabled' : '') + '>' + MESES[i].slice(0, 3) + '</button>';
        }
        html += '</div>';
      } else {
        var y = vista.getFullYear(), m = vista.getMonth(), ini = new Date(y, m, 1), c = addDias(ini, -ini.getDay());
        var a = faixa && faixa.a, b = faixa && faixa.b;
        html = '<div class="ax-cal__head"><span class="ax-cal__month" aria-live="polite">' + MESES[m] + ' de ' + y + '</span><span class="ax-cal__nav">' + botaoNav(-1, 'Mês anterior') + botaoNav(1, 'Próximo mês') + '</span></div><div class="ax-cal__grid">';
        SEMANA.forEach(function (s) { html += '<abbr class="ax-cal__wd" title="' + s[1] + '">' + s[0] + '</abbr>'; });
        for (i = 0; i < 42; i++, c = addDias(c, 1)) {
          var marcado = modo === 'periodo' ? (mesmoDia(c, a) || mesmoDia(c, b)) : mesmoDia(c, sel);
          html += '<button type="button" class="ax-cal__day" data-k="' + chave(c) + '" tabindex="' + (mesmoDia(c, foco) ? 0 : -1) + '" aria-label="' + c.getDate() + ' de ' + MESES[c.getMonth()] + ' de ' + c.getFullYear() + '"' +
            ' aria-pressed="' + (marcado ? 'true' : 'false') + '"' + (c.getMonth() !== m ? ' data-out' : '') + (mesmoDia(c, h) ? ' aria-current="date"' : '') +
            (a && b && c > a && c < b ? ' data-in-range' : '') + (pontos[chave(c)] ? ' data-dot' : '') + (fora(c) ? ' disabled' : '') + '>' + c.getDate() + '</button>';
        }
        html += '</div>';
        var at = modo === 'periodo' ? [['mes', 'Este mês'], ['mes-1', 'Mês passado'], ['30', 'Últimos 30 dias'], ['ano', 'Este ano']] : (fora(h) ? [] : [['hoje', 'Hoje']]);
        if (at.length) html += '<div class="ax-cal__presets">' + at.map(function (p) { return '<button type="button" class="ax-chip" data-preset="' + p[0] + '">' + p[1] + '</button>'; }).join('') + '</div>';
        if (modo === 'periodo') html += '<p class="ax-sr" aria-live="polite">' + (a && !b ? 'Início em ' + dmy(a) + '. Escolha o fim.' : '') + '</p>';
      }
      pop.innerHTML = html; hydrate(pop);
    }
    function focarDia() { var el = pop.querySelector('.ax-cal__day[tabindex="0"]') || pop.querySelector('.ax-cal__day:not([disabled])'); if (el) el.focus({ preventScroll: true }); }
    function irPara(x, focar) {
      if (min && x < min) x = min; if (max && x > max) x = max;
      foco = x;
      var mudou = ehMes ? x.getFullYear() !== vista.getFullYear() : (x.getMonth() !== vista.getMonth() || x.getFullYear() !== vista.getFullYear());
      if (mudou) vista = ehMes ? new Date(x.getFullYear(), 0, 1) : new Date(x.getFullYear(), x.getMonth(), 1);
      render(); if (focar) focarDia();
    }
    function avisar() {
      inp.dispatchEvent(new Event('input', { bubbles: true })); inp.dispatchEvent(new Event('change', { bubbles: true }));
      var f = inp.closest('.ax-field'); if (f && f.hasAttribute('data-invalid')) validateField(inp);
    }
    function escolher(x) {
      if (!x || fora(x)) return;
      sound.play('tap');
      if (modo === 'periodo') {
        if (!faixa || !faixa.a || faixa.b) { faixa = { a: x, b: null }; inp.value = dmy(x) + ' a '; foco = x; render(); focarDia(); return; }
        if (x < faixa.a) { faixa.b = faixa.a; faixa.a = x; } else faixa.b = x;
        inp.value = dmy(faixa.a) + ' a ' + dmy(faixa.b);
      } else inp.value = ehMes ? mmaa(x) : dmy(x);
      avisar(); fechar(true);
    }
    function atalho(p) {
      var h = hoje(), a, b;
      if (p === 'hoje') return escolher(h);
      if (p === 'mes') { a = new Date(h.getFullYear(), h.getMonth(), 1); b = new Date(h.getFullYear(), h.getMonth() + 1, 0); }
      else if (p === 'mes-1') { a = new Date(h.getFullYear(), h.getMonth() - 1, 1); b = new Date(h.getFullYear(), h.getMonth(), 0); }
      else if (p === '30') { a = addDias(h, -29); b = h; }
      else { a = new Date(h.getFullYear(), 0, 1); b = new Date(h.getFullYear(), 11, 31); }
      if (min && a < min) a = min; if (max && b > max) b = max;
      faixa = { a: a, b: b }; inp.value = dmy(a) + ' a ' + dmy(b); sound.play('tap'); avisar(); fechar(true);
    }
    function abrir(focar) {
      if (!pop.hidden && !saindo) { if (focar) focarDia(); return; }
      clearTimeout(saindo); saindo = 0; pop.removeAttribute('data-leaving');
      ler(); foco = base();
      vista = ehMes ? new Date(foco.getFullYear(), 0, 1) : new Date(foco.getFullYear(), foco.getMonth(), 1);
      render(); pop.hidden = false; btn.setAttribute('aria-expanded', 'true');
      var r = box.getBoundingClientRect();
      pop.toggleAttribute('data-up', w.innerHeight - r.bottom < 400 && r.top > 400);
      pop.toggleAttribute('data-right', r.left + 320 > w.innerWidth - 8 && r.right > 320);
      if (focar) focarDia();
      d.addEventListener('pointerdown', foraDoCampo, true);
    }
    function fechar(devolver) {
      if (pop.hidden || saindo) return;
      btn.setAttribute('aria-expanded', 'false'); pop.setAttribute('data-leaving', '');
      d.removeEventListener('pointerdown', foraDoCampo, true);
      saindo = setTimeout(function () { pop.hidden = true; pop.removeAttribute('data-leaving'); saindo = 0; }, reduceMotion() ? 0 : 120);
      if (devolver) inp.focus({ preventScroll: true });
    }
    function foraDoCampo(e) { if (!box.contains(e.target)) fechar(false); }
    function erro() {
      var v = inp.value.trim(); if (!v) return '';
      if (modo === 'periodo') {
        var p = lerPeriodo(v); if (!p || !p.b) return inp.getAttribute('data-error') || 'Período incompleto. Use dd/mm/aaaa a dd/mm/aaaa.';
        if (p.b < p.a) return 'O fim do período vem antes do início.';
        if (fora(p.a) || fora(p.b)) return 'Escolha um período' + (min ? ' a partir de ' + dmy(min) : '') + (max ? (min ? ' e' : '') + ' até ' + dmy(max) : '') + '.';
        return '';
      }
      var x = ehMes ? lerMes(v) : lerData(v);
      if (!x) return inp.getAttribute('data-error') || (ehMes ? 'Esse mês não existe. Use mm/aaaa.' : 'Essa data não existe. Use dd/mm/aaaa.');
      if (max && x > max) return ehMes ? 'Escolha um mês até ' + mmaa(max) + '.' : 'Escolha uma data até ' + dmy(max) + '.';
      if (min && x < min) return ehMes ? 'Escolha um mês a partir de ' + mmaa(min) + '.' : 'Escolha uma data a partir de ' + dmy(min) + '.';
      return '';
    }
    btn.addEventListener('click', function () { if (pop.hidden || saindo) abrir(true); else fechar(true); });
    inp.addEventListener('click', function () { abrir(false); });
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); abrir(true); }
      else if (e.key === 'Escape' && !pop.hidden) { e.preventDefault(); fechar(false); }
      else if (e.key === 'Tab') fechar(false);
    });
    inp.addEventListener('input', function () {
      if (pop.hidden || saindo) return;
      ler(); var x = modo === 'periodo' ? faixa && (faixa.b || faixa.a) : sel;
      if (x) { foco = x; vista = ehMes ? new Date(x.getFullYear(), 0, 1) : new Date(x.getFullYear(), x.getMonth(), 1); }
      render();
    });
    inp.addEventListener('blur', function () {
      var v = inp.value.trim(), out = null;
      if (modo === 'data') { var x = lerData(v); if (x) out = dmy(x); }
      else if (modo === 'periodo') { var p = lerPeriodo(v); if (p && p.b) out = dmy(p.a < p.b ? p.a : p.b) + ' a ' + dmy(p.a < p.b ? p.b : p.a); }
      if (out && out !== inp.value) { inp.value = out; avisar(); }
    });
    pop.addEventListener('click', function (e) {
      var n = e.target.closest('[data-nav]'), dia = e.target.closest('.ax-cal__day'), pr = e.target.closest('[data-preset]');
      if (n) {
        var dir = +n.getAttribute('data-nav');
        if (ehMes) { vista = new Date(vista.getFullYear() + dir, 0, 1); foco = new Date(vista.getFullYear(), foco.getMonth(), 1); }
        else { vista = addMeses(vista, dir); foco = addMeses(foco, dir); if (foco.getMonth() !== vista.getMonth()) foco = new Date(vista); }
        render(); var nb = pop.querySelector('[data-nav="' + dir + '"]'); if (nb) nb.focus();
      }
      else if (dia && !dia.disabled) escolher(deChave(dia.getAttribute('data-k')));
      else if (pr) atalho(pr.getAttribute('data-preset'));
    });
    pop.addEventListener('pointerover', function (e) {
      if (modo !== 'periodo' || !faixa || !faixa.a || faixa.b) return;
      var dia = e.target.closest('.ax-cal__day'); if (!dia) return;
      var fim = deChave(dia.getAttribute('data-k')), a = faixa.a < fim ? faixa.a : fim, b = faixa.a < fim ? fim : faixa.a;
      pop.querySelectorAll('.ax-cal__day').forEach(function (el) { var x = deChave(el.getAttribute('data-k')); el.toggleAttribute('data-in-range', x > a && x < b); });
    });
    pop.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); fechar(true); return; }
      var dia = e.target.closest('.ax-cal__day'); if (!dia) return;
      var x = deChave(dia.getAttribute('data-k'));
      var passo = ehMes ? { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -3, ArrowDown: 3 } : { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7 };
      if (passo[e.key] != null) { e.preventDefault(); irPara(ehMes ? addMeses(x, passo[e.key]) : addDias(x, passo[e.key]), true); }
      else if (e.key === 'Home' && !ehMes) { e.preventDefault(); irPara(addDias(x, -x.getDay()), true); }
      else if (e.key === 'End' && !ehMes) { e.preventDefault(); irPara(addDias(x, 6 - x.getDay()), true); }
      else if (e.key === 'PageUp' || e.key === 'PageDown') { e.preventDefault(); var s = e.key === 'PageUp' ? -1 : 1; irPara(addMeses(x, (ehMes || e.shiftKey ? 12 : 1) * s), true); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); escolher(x); }
    });
    box.addEventListener('focusout', function (e) { if (!pop.hidden && e.relatedTarget && !box.contains(e.relatedTarget)) fechar(false); });
    return (inp.__axdate = { open: abrir, close: fechar, erro: erro, el: inp });
  }

  /* ── Liga tudo o que estiver marcado dentro de raiz (padrão: a página) ── */
  function init(root) {
    root = root || d;
    each(root, '.ax-select', select);
    each(root, 'input[data-ax-date]', datePicker);
    each(root, '.ax-side__nav[data-auto], .ax-bottomnav[data-auto]', nav);
    each(root, '.ax-seg', function (el) { if (el.querySelector('.ax-seg__thumb')) seg(el); });
    each(root, '.ax-tabs[data-auto]', tabs);
    each(root, 'dialog.ax-dialog, dialog.ax-sheet, dialog.ax-side-sheet', bindDialog);
    each(root, 'form[data-ax-validate]', function (f) { f.noValidate = true; });
    bindMenus(root); bindMasks(root); bindPrefs(root); bindCounts(root); bindCounters(root); bindPblur(root); flash(root);
  }

  function autoInit() { init(d); ready = true; }
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', autoInit); else setTimeout(autoInit, 0);

  w.Eixo = Object.assign(w.Eixo || {}, { icons: ICONS, icon: icon, hydrate: hydrate, sound: sound, haptic: haptic, toast: toast, select: select, date: datePicker, nav: nav, seg: seg, tabs: tabs, countUp: countUp, fmt: fmt, reduceMotion: reduceMotion, init: init, prefs: prefs, busy: busy, validate: validate, validateField: validateField, mask: MASKS,
    confirm: confirmDialog, dialog: { open: dlgOpen, close: dlgClose }, menu: { open: menuOpen, close: menuClose }, version: '0.4.0' });
})();
