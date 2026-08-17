import fetch from "node-fetch";
import fs from "node:fs/promises"

export async function getTopFiveRepositories(repositories) {
  try {
    return repositories.slice(0, 5).map((repo) => repo.name);
  } catch (error) {
    console.error("Error getting top 5 repositories:", error.message);
  }
}

export async function filterRepositoriesByLanguage(repositories, language) {
  try {
    return repositories.filter(
      (repo) =>
        repo.language !== null &&
        repo.language.toLowerCase() === language.toLowerCase(),
    );
  } catch (error) {
    console.error("Error filtering repositories:", error.message);
  }
}

export async function calculateTotalSize(repositories) {
  try {
    return repositories.reduce(
      (accumulator, currentValue) => accumulator + currentValue.size,
      0,
    );
  } catch (error) {
    console.error("Error calculating total size:", error.message);
  }
}

export async function filterOnlyName(repositories) {
    return repositories.map(name => name.name);
}

export async function generateLanguageReport(repositories, language) {
  try {
    const filteredRepos = await filterRepositoriesByLanguage(
      repositories,
      language,
    );
    const totalSizeKB = await calculateTotalSize(filteredRepos);
    const filterOnlyNames = await filterOnlyName(filteredRepos);

    return {
      language: language,
      quantity: filteredRepos.length,
      totalSizeMB: (totalSizeKB / 1024).toFixed(2),
      names: filterOnlyNames,
    };
  } catch (error) {
    console.error("Error generating report:", error.message);
  }
}

export async function saveReportToFile(path, content) {
    try{
        const conteudoFormatado = JSON.stringify(content, null, 2);
        await fs.writeFile(path, conteudoFormatado, 'utf8');
        console.log('Arquivo criado com sucesso!');
    }catch(erro){
        console.error('Erro ao criar o arquivo:', erro);
    }
}

export async function readReportFromFile(path) {
    try{
        const content = await fs.readFile(path, 'utf8');
        const data = JSON.parse(content);
        console.log(`\n📖 Lendo do disco: Eu tenho ${data.quantity} repositórios de ${data.language} que pesam ${data.totalSizeMB} MB!`);
        return data;
    }catch(erro){
        console.error('Erro ao criar o arquivo:', erro.message);
    }
}