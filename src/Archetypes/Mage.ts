import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static instances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage.instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}