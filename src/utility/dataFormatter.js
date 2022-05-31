export const formatTableData = (fetchedData) => {
  const restrucedDataArray = fetchedData.map((repo) => {
    return {
      name: repo.name,
      author: repo.owner.login,
      description: repo.description,
      stars: repo.stargazers_count,
      watchers: repo.watchers,
      forks: repo.forks,
      lastUpdate: repo.updated_at.substring(0, 10),
    }
  })
  return restrucedDataArray
}
