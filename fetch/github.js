import { getUserProfile, getUserRepositories } from "./api.js";
import { generateLanguageReport, readReportFromFile, saveReportToFile } from "./relatorios.js";

// --- Main Execution ---
// 1. Capturando o que você digitar no terminal (posições 2 e 3)
const username = process.argv[2];
const language = process.argv[3];

// 2. A Trava de Segurança (Se você esquecer de digitar, ele avisa e para)
if (!username || !language) {
  console.log("❌ Ops! Faltou passar os argumentos.");
  console.log("👉 Uso correto: node github.js <usuario> <linguagem>");
  console.log("💡 Exemplo: node github.js CaioNunesGomesF javascript");
  
  process.exit(1); // O '1' significa que o script fechou com erro
}

// 3. O código roda normalmente usando as variáveis dinâmicas!
const profile = await getUserProfile(username);

if (profile) {
  console.log(`✅ Profile found: ${profile.name}`);

  const allRepositories = await getUserRepositories(username);

  // Repassando a linguagem digitada no terminal para o filtro
  const report = await generateLanguageReport(allRepositories, language);

  console.log("\n📊 Final Report:");
  console.log(report);

  // Bônus: Deixando o nome do arquivo dinâmico também!
  const fileName = `relatorio-${username}-${language}.json`;
  
  await saveReportToFile(fileName, report);
  await readReportFromFile(fileName);
}