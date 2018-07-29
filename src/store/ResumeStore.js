import { observable } from "mobx";
import data_practice from '../data/practice.json';

export class ResumeStore {
  @observable data =  data_practice;
}

export default new ResumeStore();

