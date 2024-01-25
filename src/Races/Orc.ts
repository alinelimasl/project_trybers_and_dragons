import Race from './Race';

export default class Orc extends Race {
  private static instances = 0;
  private _maxLifePoints = 74;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc.instances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}