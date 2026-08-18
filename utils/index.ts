export const formatDate = (date: Date | "Atualmente") => {
  if (date === "Atualmente") return date;

  return date.toLocaleDateString("pt-BR", {
    month: "2-digit",
    year: "numeric",
  });
};
