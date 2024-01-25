import Race from './Race';

export default class Halfling extends Race {
  private static instances = 0;
  private _maxLifePoints = 60;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Halfling.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling.instances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}