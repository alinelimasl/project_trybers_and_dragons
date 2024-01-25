import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}