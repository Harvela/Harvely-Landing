export const fiches = [
  {
    title: 'Les feuilles ( Agriculture )',
    subject: 'Botanique',
    level: 'primaire',
    id: '4a07895e-4b88-404b-ba2b-95c8fb86cebc',
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
