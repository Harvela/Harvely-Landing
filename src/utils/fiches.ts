export const fiches = [
  {
    title: 'La maison ( Art )',
    subject: 'Art plastique',
    level: 'maternelle',
    id: '86c4b9ed-ceb9-429a-ba49-ad5164c0af9a',
  },
  {
    title: 'La trotinette ( Art )',
    subject: 'Art plastique',
    level: 'maternelle',
    id: '0e96fc29-990b-45f4-8dfe-9f303c6debde',
  },
  {
    title: 'Protection des biens publics ( Social )',
    subject: 'Activites de comportement',
    level: 'maternelle',
    id: 'b43a8418-d42c-4ad4-a311-e1898d1e2c09',
  },
  {
    title: 'Les feuilles ( Agriculture )',
    subject: 'Botanique',
    level: 'primaire',
    id: '4a07895e-4b88-404b-ba2b-95c8fb86cebc',
  },
  {
    title: 'Le chiffre 6 ( Cuisine )',
    subject: 'Mathématique',
    level: 'primaire',
    id: '3e2c320a-f900-49c3-8d31-297da8d66816',
  },
  {
    title: "L'oeil ( Santé )",
    subject: 'Anatomie',
    level: 'primaire',
    id: 'bb0f80a9-1b9a-45c4-bfb6-b332f5daa587',
  },
  {
    title: 'Le volcan ( Environnement )',
    subject: 'Géographie',
    level: 'ctb',
    id: 'bb4fe3fe-10bb-433f-a4cd-26bde039668e',
  },
  {
    title: "Textile d'origine animale: Les soies ( Technologie )",
    subject: 'Technologie',
    level: 'ctb',
    id: 'c4e89409-1792-4420-b1d4-a08121866fd5',
  },
  {
    title: 'Les verbes du deuxième groupe ( Agriculture )',
    subject: 'Francais',
    level: 'ctb',
    id: '3460d4f6-b03e-4df5-ba7b-88f883ffa184',
  },
  {
    title: 'Carrière de position ( Social )',
    subject: 'Droit administratif',
    level: 'secondaire',
    id: '7b7ff3d0-e42a-4b00-9122-f702e1877e40',
  },
  {
    title: 'Les éléments du climats: Les précipitations ( Environnement )',
    subject: 'Géographie',
    level: 'secondaire',
    id: '3bf61e99-95b3-4af6-a37b-2c71fde149b1',
  },
  {
    title: 'Homothétie ( Agriculture )',
    subject: 'Mathématiques',
    level: 'secondaire',
    id: '3791af97-6416-40c0-801f-18a8e143f1da',
  },
  {
    title: 'la civilisation phenicienne ( Social )',
    subject: 'Histoire',
    level: 'secondaire',
    id: 'f0621517-254d-45a7-8ab7-80e788a38ccf',
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
