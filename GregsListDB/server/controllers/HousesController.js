import { houseService } from "../services/HouseService.js";
import BaseController from "../utils/BaseController.js";


export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router
      .get('', this.getHouses)
  }
  async getHouses(req, res, next) {
    try {
      const house = await houseService.getHouses()
    } catch (error) {
      next(error)
    }
  }
}