(function () {
const D = window.D, IC = window.IC, S = D.S, R = D.R, E = D.E, Q = D.Q, K = D.K;
const C = { steel: '#3A4A60', orange: '#EF631A', green: '#1B9A3A', red: '#D90038', grey: '#C9CFD8', mute: '#6B7686', line: '#E3E6EA' };
const nf = (n, l) => n.toLocaleString(l === 'en' ? 'en-GB' : 'fr-FR');
const last = a => a[a.length - 1];
const liv = E.sans.map((v, i) => v + E.avec[i] + E.refus[i]);
const T = {
fr: {
 demo: 'Données de démonstration', kicker: 'Recrutement · tableau de mesure · 8 semaines',
 h1: 'Mesurer l’Expert recrutement, sans tout relire',
 question: 'Comment mesurer le KPI de cet assistant ?', who: 'Question posée par l’équipe RH le 10 novembre',
 t1: 'Le recrutement', t2: 'L’Expert', t3: 'Qualité',
 lead1: `Le premier KPI de l’Expert, c’est le vôtre : en 8 semaines, le délai pour pourvoir un poste est passé de <b>${R.delai[0]} à ${last(R.delai)} jours</b>, et le gain vient du tri des CV et de la planification des entretiens, pas des entretiens eux-mêmes.`,
 lead2: `Ce qu’on mesure de l’Expert lui-même : il répond en <b>${last(E.reponse_min)} minutes</b>, a tenu <b>${K.rapport} rapports du matin sur 40</b>, voit <b>${K.sans_s46} %</b> de ses livrables acceptés sans retouche, et a rendu <b>${K.h_total} heures nettes</b> à l’équipe.`,
 lead3: `Pas besoin de tout relire : l’équipe relit un <b>échantillon de 10 livrables par semaine</b> (5 depuis quatre semaines sans erreur grave), chaque erreur est corrigée sous 24 h, et c’est vous qui décidez, <b>action par action</b>, ce qui part seul.`,
 k_postes: 'Postes ouverts', k_postes_d: `dont ${last(R.managers)} postes de manager`,
 k_src: 'Candidats sourcés', k_src_d: `<span class="up">+${Math.round(100*(last(R.sources)/R.sources[0]-1))} %</span> en 8 semaines`, k_week: 'cette semaine',
 k_ent: 'Entretiens', k_ent_d: `${K.entretiens_tot} sur 8 semaines`,
 k_del: 'Délai pour pourvoir', k_del_d: `<span class="up">−${R.delai[0] - last(R.delai)} j</span> en 8 semaines (${R.delai[0]} → ${last(R.delai)}) `, j: 'j',
 c_delai: 'Délai pour pourvoir un poste', c_delai_s: 'Jours entre l’ouverture et l’acceptation de l’offre, moyenne glissante', ref: 'Point de départ (semaine 1)',
 c_funnel: 'Du sourcing à l’embauche', c_funnel_s: 'Cumul des 8 semaines', f: ['Candidats sourcés', 'Présélectionnés', 'Entretiens', 'Offres', 'Embauches'],
 c_etapes: 'Temps passé par étape', c_etapes_s: 'Durée médiane en jours, avant l’Expert et aujourd’hui', avant: 'Avant l’Expert', auj: 'Aujourd’hui', aujh: 'Aujourd’hui, étape restée humaine', gain: 'gagnés', inch: 'inchangé', jours: 'jours', hum: 'reste à l’équipe',
 c_flux: 'Le flux chaque semaine', c_flux_s: 'Candidats sourcés, entretiens et postes ouverts', l_src: 'Candidats sourcés', l_ent: 'Entretiens', l_post: 'Postes ouverts',
 k_rep: 'Temps de réponse', k_rep_d: `médiane, contre ${E.reponse_min[0]} min en S${S[0].fr.slice(1)}`, min: 'min',
 k_rout: 'Routines tenues', k_rout_d: `${K.rapport}/40 rapports, ${K.relances_pct} % des relances`,
 k_sans: 'Acceptés sans retouche', k_sans_d: `<span class="up">+${K.sans_s46 - K.sans_s39} pts</span> depuis la 1re semaine`,
 k_h: 'Heures rendues', k_h_d: 'nettes, relecture déduite, 8 semaines', h: 'h',
 c_liv: 'Que deviennent ses livrables ?', c_liv_s: 'Short-lists, annonces, messages, rapports, par semaine', l_sans: 'Acceptés sans retouche', l_avec: 'Acceptés avec retouche', l_refus: 'Refusés',
 c_h: 'Heures rendues à l’équipe', c_h_s: 'Temps gagné moins temps passé à relire, par semaine', l_hg: 'Heures gagnées', l_hr: 'Heures de relecture', l_hn: 'Heures nettes rendues',
 c_rout: 'Routines tenues', c_rout_s: 'Chaque point est un jour ouvré', r_mat: 'Rapport du matin', r_rel: 'Relances',
 rnote: 'S42 : un rapport du matin manqué (accès à l’outil de recrutement coupé pendant une maintenance), signalé à l’équipe à 8 h 05.',
 c_rep: 'Temps de réponse', c_rep_s: 'Médiane en minutes, heures ouvrées, et nombre de demandes reçues', l_rep: 'Minutes (médiane)', l_dem: 'Demandes reçues',
 k_ech: 'Livrables relus', k_ech_d: `${K.relus_tot} sur ${K.liv_tot} produits, soit ${Math.round(100*K.relus_tot/K.liv_tot)} %`,
 k_err: 'Erreurs relevées', k_err_d: `<span class="up">${Q.erreurs[0]} → ${last(Q.erreurs)}</span> par semaine`,
 k_grav: 'Erreurs graves', k_grav_d: 'aucune depuis 6 semaines',
 k_cor: 'Corrigées sous 24 h', k_cor_d: `${K.err_tot} sur ${K.err_tot}`,
 c_ech: 'L’échantillon relu chaque semaine', c_ech_s: 'Livrables tirés au hasard et relus par l’équipe, erreurs trouvées', l_ech: 'Livrables relus', l_err: 'Erreurs mineures', l_grav: 'Erreurs graves',
 c_jour: 'Journal des erreurs', c_jour_s: 'Extrait : les erreurs récentes et les deux graves, et ce qui a changé ensuite', mineure: 'mineure', grave: 'grave',
 c_reg: 'Ce qui part seul, ce qui attend votre validation', c_reg_s: 'Réglage action par action, modifiable à tout moment (cliquez pour essayer)',
 m_seul: 'Part seul', m_valid: 'Attend une validation', m_jamais: 'Jamais par l’Expert', vol: 'en 8 sem.',
 regnote: (p, n) => `Avec ce réglage, <b>${p} %</b> des actions de l’Expert partent seules ; <b>${n}</b> types d’action attendent un clic de l’équipe. Une validation arrête le départ, pas la préparation : le brouillon est toujours prêt.`,
 foot: 'Données de démonstration, inventées pour illustrer la méthode de mesure. Semaines 39 à 46 de 2026. Aucune donnée de candidat réel.'
},
en: {
 demo: 'Demo data', kicker: 'Recruitment · measurement dashboard · 8 weeks',
 h1: 'Measuring the recruitment Expert, without re-reading everything',
 question: 'How do we measure this assistant’s KPI?', who: 'Question raised by the HR team on 10 November',
 t1: 'Recruitment', t2: 'The Expert', t3: 'Quality',
 lead1: `The Expert’s first KPI is yours: in 8 weeks, time to fill went from <b>${R.delai[0]} to ${last(R.delai)} days</b>, and the gain comes from CV screening and interview scheduling, not from the interviews themselves.`,
 lead2: `What we measure about the Expert itself: it replies in <b>${last(E.reponse_min)} minutes</b>, delivered <b>${K.rapport} of 40 morning reports</b>, gets <b>${K.sans_s46}%</b> of its deliverables accepted as is, and gave <b>${K.h_total} net hours</b> back to the team.`,
 lead3: `No need to re-read everything: the team reviews a <b>sample of 10 deliverables a week</b> (5 after four weeks without a serious error), every error is fixed within 24 h, and you decide, <b>action by action</b>, what goes out on its own.`,
 k_postes: 'Open roles', k_postes_d: `including ${last(R.managers)} manager roles`,
 k_src: 'Candidates sourced', k_src_d: `<span class="up">+${Math.round(100*(last(R.sources)/R.sources[0]-1))}%</span> in 8 weeks`, k_week: 'this week',
 k_ent: 'Interviews', k_ent_d: `${K.entretiens_tot} over 8 weeks`,
 k_del: 'Time to fill', k_del_d: `<span class="up">−${R.delai[0] - last(R.delai)} d</span> in 8 weeks (${R.delai[0]} → ${last(R.delai)}) `, j: 'd',
 c_delai: 'Time to fill a role', c_delai_s: 'Days from opening to offer acceptance, rolling average', ref: 'Starting point (week 1)',
 c_funnel: 'From sourcing to hire', c_funnel_s: 'Total over 8 weeks', f: ['Candidates sourced', 'Shortlisted', 'Interviews', 'Offers', 'Hires'],
 c_etapes: 'Time spent per stage', c_etapes_s: 'Median duration in days, before the Expert and today', avant: 'Before the Expert', auj: 'Today', aujh: 'Today, stage kept human', gain: 'saved', inch: 'unchanged', jours: 'days', hum: 'stays with the team',
 c_flux: 'Weekly flow', c_flux_s: 'Candidates sourced, interviews and open roles', l_src: 'Candidates sourced', l_ent: 'Interviews', l_post: 'Open roles',
 k_rep: 'Response time', k_rep_d: `median, vs ${E.reponse_min[0]} min in W${S[0].fr.slice(1)}`, min: 'min',
 k_rout: 'Routines kept', k_rout_d: `${K.rapport}/40 reports, ${K.relances_pct}% of reminders`,
 k_sans: 'Accepted as is', k_sans_d: `<span class="up">+${K.sans_s46 - K.sans_s39} pts</span> since week 1`,
 k_h: 'Hours given back', k_h_d: 'net of review time, 8 weeks', h: 'h',
 c_liv: 'What happens to its deliverables?', c_liv_s: 'Shortlists, job ads, messages, reports, per week', l_sans: 'Accepted as is', l_avec: 'Accepted with edits', l_refus: 'Rejected',
 c_h: 'Hours given back to the team', c_h_s: 'Time saved minus time spent reviewing, per week', l_hg: 'Hours saved', l_hr: 'Review hours', l_hn: 'Net hours given back',
 c_rout: 'Routines kept', c_rout_s: 'Each dot is a working day', r_mat: 'Morning report', r_rel: 'Reminders',
 rnote: 'W42: one morning report missed (recruiting tool access down during maintenance), flagged to the team at 8:05 am.',
 c_rep: 'Response time', c_rep_s: 'Median minutes during working hours, and requests received', l_rep: 'Minutes (median)', l_dem: 'Requests received',
 k_ech: 'Deliverables reviewed', k_ech_d: `${K.relus_tot} of ${K.liv_tot} produced, i.e. ${Math.round(100*K.relus_tot/K.liv_tot)}%`,
 k_err: 'Errors found', k_err_d: `<span class="up">${Q.erreurs[0]} → ${last(Q.erreurs)}</span> per week`,
 k_grav: 'Serious errors', k_grav_d: 'none for 6 weeks',
 k_cor: 'Fixed within 24 h', k_cor_d: `${K.err_tot} of ${K.err_tot}`,
 c_ech: 'The sample reviewed each week', c_ech_s: 'Deliverables drawn at random and reviewed by the team, errors found', l_ech: 'Deliverables reviewed', l_err: 'Minor errors', l_grav: 'Serious errors',
 c_jour: 'Error log', c_jour_s: 'Excerpt: recent errors and the two serious ones, and what changed afterwards', mineure: 'minor', grave: 'serious',
 c_reg: 'What goes out alone, what waits for approval', c_reg_s: 'Set action by action, changeable at any time (click to try)',
 m_seul: 'Goes out alone', m_valid: 'Waits for approval', m_jamais: 'Never by the Expert', vol: 'in 8 wks',
 regnote: (p, n) => `With this setting, <b>${p}%</b> of the Expert’s actions go out on their own; <b>${n}</b> action types wait for one click from the team. Approval stops the sending, not the drafting: the draft is always ready.`,
 foot: 'Demo data, made up to illustrate the measurement method. Weeks 39 to 46, 2026. No real candidate data.'
}};
let L = 'fr';
const mode = Object.fromEntries(Q.actions.map((a, i) => [i, a.m]));
const ico = n => IC[n] ? `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[n]}</svg>` : '';
const wk = () => S.map(s => (L === 'fr' ? s.fr : 'W' + s.fr.slice(1)));
const kpi = (ic, h, v, u, d) => `<div class="kpi"><div class="h"><span class="bx">${ico(ic)}</span>${h}</div><div class="v">${v}${u ? `<small>${u}</small>` : ''}</div><div class="d">${d}</div></div>`;
Chart.defaults.font.family = '"Libre Franklin", system-ui, sans-serif'; Chart.defaults.font.size = 12; Chart.defaults.color = C.mute;
Chart.defaults.plugins.legend.labels.boxWidth = 10; Chart.defaults.plugins.legend.labels.boxHeight = 10; Chart.defaults.plugins.legend.position = 'bottom';
Chart.defaults.maintainAspectRatio = false; Chart.defaults.animation = window.__CAPTURE ? false : Chart.defaults.animation;
const grid = { color: C.line }, nog = { display: false };
let charts = [];
function mk(id, cfg) { charts.push(new Chart(document.getElementById(id), cfg)); }
function render() {
 const t = T[L]; document.documentElement.lang = L;
 document.querySelectorAll('[data-t]').forEach(e => { const v = t[e.dataset.t]; if (typeof v === 'string') e.innerHTML = v; });
 document.querySelectorAll('i[data-i]').forEach(e => { e.outerHTML = ico(e.dataset.i); });
 charts.forEach(c => c.destroy()); charts = [];
 const W = wk();
 // Onglet 1
 document.getElementById('k-rec').innerHTML =
  kpi('briefcase', t.k_postes, last(R.postes), '', t.k_postes_d) +
  kpi('users', t.k_src, last(R.sources), t.k_week, t.k_src_d) +
  kpi('message-circle', t.k_ent, last(R.entretiens), t.k_week, t.k_ent_d) +
  kpi('hourglass', t.k_del, last(R.delai), t.j, t.k_del_d);
 mk('ch-delai', { type: 'line', data: { labels: W, datasets: [
  { label: t.c_delai, data: R.delai, borderColor: C.orange, backgroundColor: 'rgba(239,99,26,.10)', fill: true, tension: .3, pointRadius: 3, borderWidth: 2.5 },
  { label: t.ref, data: W.map(() => R.delai[0]), borderColor: C.steel, borderDash: [5, 4], pointRadius: 0, borderWidth: 1.5 }] },
  options: { scales: { y: { min: 30, max: 60, grid }, x: { grid: nog } } } });
 const fv = [K.sources_tot, K.preselec_tot, K.entretiens_tot, K.offres_tot, K.embauches_tot];
 document.getElementById('funnel').innerHTML = fv.map((v, i) => `<div class="fn"><div class="lb">${t.f[i]}${i ? `<small>${(100 * v / fv[i - 1]).toFixed(i > 2 ? 0 : 0)} %</small>` : ''}</div><div class="bar"><i style="width:${Math.max(2.5, 100 * Math.sqrt(v / fv[0]))}%"></i></div><div class="n">${nf(v, L)}</div></div>`).join('');
 const mx = Math.max(...R.etapes.map(e => e.avant));
 document.getElementById('etapes').innerHTML = `<div class="lg"><span><i style="background:#C9CFD8"></i>${t.avant}</span><span><i style="background:${C.orange}"></i>${t.auj}</span><span><i style="background:${C.steel}"></i>${t.aujh}</span></div>` +
  R.etapes.map(e => { const g = e.avant - e.apres, h = g <= 0;
   return `<div class="et"><div class="nm">${e[L]}${h ? `<small>${t.hum}</small>` : ''}</div><div class="bars"><div class="b av" style="width:${100 * e.avant / mx}%"></div><div class="b ap${h ? ' h' : ''}" style="width:${100 * e.apres / mx}%"></div></div><div class="gain">${e.avant} → ${e.apres} ${t.jours}<b class="${h ? 'z' : ''}">${h ? t.inch : '−' + g + ' j ' + t.gain}</b></div></div>`; }).join('');
 mk('ch-flux', { data: { labels: W, datasets: [
  { type: 'bar', label: t.l_src, data: R.sources, backgroundColor: C.steel, borderRadius: 4, yAxisID: 'y', order: 2 },
  { type: 'bar', label: t.l_ent, data: R.entretiens, backgroundColor: C.orange, borderRadius: 4, yAxisID: 'y', order: 2 },
  { type: 'line', label: t.l_post, data: R.postes, borderColor: C.green, backgroundColor: C.green, yAxisID: 'y2', tension: .3, pointRadius: 3, borderWidth: 2, order: 1 }] },
  options: { scales: { y: { grid, beginAtZero: true }, y2: { position: 'right', grid: nog, min: 0, max: 24 }, x: { grid: nog } } } });
 // Onglet 2
 document.getElementById('k-exp').innerHTML =
  kpi('timer', t.k_rep, last(E.reponse_min), t.min, t.k_rep_d) +
  kpi('list-checks', t.k_rout, Math.round(100 * (K.rapport + E.relances_faites.reduce((a, b) => a + b)) / (40 + E.relances_prev.reduce((a, b) => a + b))), '%', t.k_rout_d) +
  kpi('circle-check', t.k_sans, K.sans_s46, '%', t.k_sans_d) +
  kpi('heart-handshake', t.k_h, K.h_total, t.h, t.k_h_d);
 mk('ch-liv', { type: 'bar', data: { labels: W, datasets: [
  { label: t.l_sans, data: E.sans, backgroundColor: C.green, borderRadius: 3 },
  { label: t.l_avec, data: E.avec, backgroundColor: C.orange, borderRadius: 3 },
  { label: t.l_refus, data: E.refus, backgroundColor: C.red, borderRadius: 3 }] },
  options: { scales: { x: { stacked: true, grid: nog }, y: { stacked: true, grid } } } });
 mk('ch-h', { data: { labels: W, datasets: [
  { type: 'bar', label: t.l_hg, data: E.h_gagnees, backgroundColor: '#C9CFD8', borderRadius: 4, order: 2 },
  { type: 'bar', label: t.l_hr, data: E.h_relecture.map(v => -v), backgroundColor: C.red, borderRadius: 4, order: 2 },
  { type: 'line', label: t.l_hn, data: E.h_nettes, borderColor: C.orange, backgroundColor: C.orange, tension: .3, borderWidth: 2.5, pointRadius: 3, order: 1 }] },
  options: { scales: { x: { stacked: true, grid: nog }, y: { stacked: false, grid } }, plugins: { tooltip: { callbacks: { label: c => `${c.dataset.label} : ${Math.abs(c.raw)} h` } } } } });
 let rt = `<div class="rt"><div></div>${W.map(w => `<div class="hd">${w}</div>`).join('')}`;
 rt += `<div class="lb">${t.r_mat}</div>` + E.rapport_tenu.map(v => `<div class="cell">${Array.from({ length: 5 }, (_, i) => `<span class="dot${i < v ? '' : ' ko'}"></span>`).join('')}</div>`).join('');
 rt += `<div></div>` + E.rapport_tenu.map(v => `<div class="pc${v < 5 ? ' ko' : ''}">${v}/5</div>`).join('');
 rt += `<div class="lb">${t.r_rel}</div>` + E.relances_faites.map((v, i) => `<div class="pc${v < E.relances_prev[i] ? ' ko' : ''}">${v}/${E.relances_prev[i]}</div>`).join('') + '</div>';
 document.getElementById('routines').innerHTML = rt + `<p class="rnote">${t.rnote}</p>`;
 mk('ch-rep', { data: { labels: W, datasets: [
  { type: 'line', label: t.l_rep, data: E.reponse_min, borderColor: C.orange, backgroundColor: C.orange, tension: .3, borderWidth: 2.5, pointRadius: 3, yAxisID: 'y', order: 1 },
  { type: 'bar', label: t.l_dem, data: E.demandes, backgroundColor: '#E3E6EA', borderRadius: 4, yAxisID: 'y2', order: 2 }] },
  options: { scales: { y: { min: 0, max: 8, grid }, y2: { position: 'right', grid: nog, beginAtZero: true }, x: { grid: nog } } } });
 // Onglet 3
 document.getElementById('k-qual').innerHTML =
  kpi('eye', t.k_ech, K.relus_tot, '', t.k_ech_d) +
  kpi('file-warning', t.k_err, K.err_tot, '', t.k_err_d) +
  kpi('shield-alert', t.k_grav, Q.graves.reduce((a, b) => a + b), '', t.k_grav_d) +
  kpi('badge-check', t.k_cor, 100, '%', t.k_cor_d);
 mk('ch-ech', { data: { labels: W, datasets: [
  { type: 'bar', label: t.l_ech, data: Q.echantillon, backgroundColor: '#C9CFD8', borderRadius: 4, order: 3, stack: 'r', barPercentage: .75 },
  { type: 'bar', label: t.l_err, data: Q.erreurs.map((v, i) => v - Q.graves[i]), backgroundColor: C.orange, borderRadius: 3, stack: 'e', order: 1, barPercentage: .4 },
  { type: 'bar', label: t.l_grav, data: Q.graves, backgroundColor: C.red, borderRadius: 3, stack: 'e', order: 1, barPercentage: .4 }] },
  options: { scales: { x: { stacked: true, grid: nog }, y: { stacked: true, grid, beginAtZero: true, max: 12 } } } });
 document.getElementById('journal').innerHTML = Q.journal.map(j => `<div class="jr"><div class="s">${L === 'fr' ? j.s : 'W' + j.s.slice(1)}</div><div><div class="t">${j[L]}<span class="tag ${j.g}">${t[j.g]}</span></div><div class="a">${ico('circle-check')}${j['act_' + L]}</div></div></div>`).join('');
 renderReg();
}
function renderReg() {
 const t = T[L];
 document.getElementById('reglage').innerHTML = Q.actions.map((a, i) => `<div class="rg"><span class="ix">${ico(a.ic)}</span><div class="nm">${a[L]}</div><div class="vol"><b>${a.vol ? nf(a.vol, L) : '—'}</b> ${a.vol ? t.vol : ''}</div><div class="seg">${['seul', 'valid', 'jamais'].map(m => `<button class="${m}${mode[i] === m ? ' on' : ''}" data-i="${i}" data-m="${m}">${t['m_' + m]}</button>`).join('')}</div></div>`).join('') + '<p class="regnote" id="regnote"></p>';
 const act = Q.actions.map((a, i) => ({ v: a.vol, m: mode[i] }));
 const tot = act.filter(a => a.m !== 'jamais').reduce((s, a) => s + a.v, 0);
 const seul = act.filter(a => a.m === 'seul').reduce((s, a) => s + a.v, 0);
 const n = act.filter(a => a.m === 'valid').length;
 document.getElementById('regnote').innerHTML = ico('triangle-alert') + '<span>' + t.regnote(tot ? Math.round(100 * seul / tot) : 0, n) + '</span>';
}
document.getElementById('reglage').addEventListener('click', e => { const b = e.target.closest('button[data-m]'); if (!b) return; mode[b.dataset.i] = b.dataset.m; renderReg(); });
document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
 document.querySelectorAll('.tabs button').forEach(x => x.classList.toggle('on', x === b));
 document.querySelectorAll('.view').forEach(v => v.classList.toggle('on', v.id === 'v-' + b.dataset.v));
 charts.forEach(c => c.resize());
}));
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => {
 L = b.dataset.l; document.querySelectorAll('.lang button').forEach(x => x.classList.toggle('on', x === b)); render();
}));
render();
})();
