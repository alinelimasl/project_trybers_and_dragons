import Race from './Race';

export default class Elf extends Race {
  private static instances = 0;
  private _maxLifePoints = 99;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf.instances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}