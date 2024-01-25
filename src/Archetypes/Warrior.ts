import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}