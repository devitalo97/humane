export function shuffleString(s: string): string {
  // Converte a string em uma array de caracteres
  let caracteres = s.split('');
  // Embaralha a array de caracteres
  for (let i = caracteres.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
  }
  // Converte a array de volta para uma string
  return caracteres.join('');
}