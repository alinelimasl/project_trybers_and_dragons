import Race from './Race';

export default class Dwarf extends Race {
  private static instances = 0;
  private _maxLifePoints = 80;

  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}