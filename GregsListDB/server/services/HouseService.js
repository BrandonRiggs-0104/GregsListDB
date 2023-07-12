import { dbContext } from "../db/DbContext.js"

class HouseService {
  async getHouses() {
    const house = await dbContext.Houses.find()

    return house
  }

}

export const houseService = new HouseService()