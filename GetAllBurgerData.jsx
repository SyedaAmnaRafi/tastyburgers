export const getAllBurgersApiData = async () => {
  try {
    const response = await fetch('./api/AllBurgersApi.json')
    const data = await response.json()
    return data.slice(9, 13)

  } catch (error) {
    console.log(error);
    
  }
}