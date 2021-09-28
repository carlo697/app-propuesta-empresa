export const localization = {
  serious: "Serio",
  retro: "Retro, Vintage",
  subtle: "Sutil",
  modern: "Moderno, Minimalista",
  
  technology: "Tecnología/Informática",
  manufacture: "Manufactura",
  legal: "Legal",
  food: "Comida/Alimentos",
  finance: "Finanzas",
  education: "Educación",
  real_state: "Bienes Raíces",
  health: "Salud",
};

export const findTranslation = (word) => {
  return localization[word] || word;
};
