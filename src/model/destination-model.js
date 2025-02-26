import { UpdateType } from '../const';
import Observable from '../framework/observable.js';

export default class DestinationModel extends Observable {
  #pointsApiService = null;
  #destinations = [];
  #hasError = false;

  constructor({pointsApiService}) {
    super();
    this.#pointsApiService = pointsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  get hasError() {
    return this.#hasError;
  }

  async init() {
    try {
      this.#destinations = await this.#pointsApiService.destinations;
    } catch(err) {
      this.#destinations = [];
    }

    this._notify(UpdateType.INIT);
  }

  getDestinationById(id) {
    return this.#destinations.find((destination) => destination.id === id);
  }
}
