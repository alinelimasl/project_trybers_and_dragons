import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}
