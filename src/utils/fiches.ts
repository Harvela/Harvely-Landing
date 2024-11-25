export const fiches = [
  {
    title: 'La trotinette',
    subject: 'Art plastique',
    level: 'maternelle',
    id: '0e96fc29-990b-45f4-8dfe-9f303c6debde',
    content:
      "Je vous présente une vraie trottinette que vous pourrez toucher et explorer. Nous allons l'observer ensemble...",
    domaine: 'Art',
  },
  {
    title: 'Les feuilles',
    subject: 'Botanique',
    level: 'primaire',
    id: '4a07895e-4b88-404b-ba2b-95c8fb86cebc',
    content:
      "Voici un exemple lié à l'agriculture dans un contexte africain: À Ngingu, un petit village au cœur de la campagne...",
    domaine: 'Agriculture',
  },
  {
    title: 'Le volcan',
    subject: 'Géographie',
    level: 'ctb',
    id: 'bb4fe3fe-10bb-433f-a4cd-26bde039668e',
    content:
      "Chères élèves, aujourd'hui nous allons découvrir une histoire passionnante qui s'est déroulée dans un village reculé...",
    domaine: 'Environnement',
  },
  {
    title: 'Homothétie',
    subject: 'Mathématiques',
    level: 'secondaire',
    id: '3791af97-6416-40c0-801f-18a8e143f1da',
    content:
      "Voici un exemple d'utilisation de l'homothétie dans un contexte agricole au village de Katindo: Au village de Katindo, Chubaka...",
    domaine: 'Agriculture',
  },
];

export const getLevels = () => {
  const levels: string[] = [];
  fiches.forEach((fiche) => {
    if (!levels.includes(fiche.level)) {
      levels.push(fiche.level);
    }
  });
  return levels;
};

export const getSubjectPerLevel = (level: string) => {
  const subjects: string[] = [];
  fiches.forEach((fiche) => {
    if (fiche.level === level && !subjects.includes(fiche.subject)) {
      subjects.push(fiche.subject);
    }
  });
  return subjects;
};

export const getFichesPerSubject = (level?: string, subject?: string) => {
  const fichesPerSubject: any[] = [];
  if (!level) {
    return fiches.slice(0, 3);
  }
  if (level && !subject) {
    return fiches.filter((fiche) => fiche.level === level).slice(0, 3);
  }
  fiches.forEach((fiche) => {
    if (fiche.level === level && fiche.subject === subject) {
      fichesPerSubject.push(fiche);
    }
  });
  return fichesPerSubject.slice(0, 3);
};
