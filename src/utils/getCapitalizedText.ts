export default function getCapitalizedText(text: string): string {
  const textToCapitalize = text.toLowerCase();
  return textToCapitalize[0].toUpperCase() + textToCapitalize.slice(1);
}
