export type Language = "Eng" | "Viet";

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}
