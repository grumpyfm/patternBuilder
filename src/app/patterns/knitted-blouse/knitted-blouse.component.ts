import {Component} from '@angular/core';
import {knittedBlouseMeasures} from '../../interfaces/knittedBlouseMeasures';
import {knittedBlousePoints} from '../../interfaces/knittedBlousePoints';

@Component({
  selector: 'app-knitted-blouse',
  templateUrl: './knitted-blouse.component.html',
  styleUrls: ['./knitted-blouse.component.scss']
})
export class KnittedBlouseComponent {
  patterns = [] = [{
    breastEmbroidery: 90,
    lengthOfBackToWaist: 39,
    depthOfTheArmhole: 21,
    backWidth: 33,
    circumferenceOfTheNeck: 36,
    sleeveLength: 61,
    wrapCircumference: 16,
    lengthOfProduct: 55,
  }];


  saveMeasures(breastEmbroidery, lengthOfBackToWaist, depthOfTheArmhole, backWidth, circumferenceOfTheNeck, sleeveLength, wrapCircumference, lengthOfProduct) {
    const pattern: knittedBlouseMeasures = new knittedBlouseMeasures(
      breastEmbroidery.viewModel,
      lengthOfBackToWaist.viewModel,
      depthOfTheArmhole.viewModel,
      backWidth.viewModel,
      circumferenceOfTheNeck.viewModel,
      sleeveLength.viewModel,
      wrapCircumference.viewModel,
      lengthOfProduct.viewModel);
    this.patterns.push(pattern);
    console.log(this.patterns);
    this.buildPattern(breastEmbroidery.viewModel,
      lengthOfBackToWaist.viewModel,
      depthOfTheArmhole.viewModel,
      backWidth.viewModel,
      circumferenceOfTheNeck.viewModel,
      sleeveLength.viewModel,
      wrapCircumference.viewModel,
      lengthOfProduct.viewModel)
  };

  buildPattern(OG, DCT, depthOfTheArmhole, SC, OS, DR, OZ, AD) {
    let AT = +DCT + 1,
      AG = +depthOfTheArmhole - 2,
      AP = +AG / 2,
      AR = +AP / 8,
      AA1 = +OS / 6,
      A1A2 = +1.3,
      GG1 = +SC / 2 - 1.5,
      P1P2 = 1 + 1,
      GG2 = +OG / 4 - 2,
      T1T2 = +2,
      AA3 = +OS / 6 - 1,
      OO1 = +AG / 2 + 1,
      OO2 = +DR + 3,
      O2O4 = +OZ / 2 + 0.5;
    const points: knittedBlousePoints = new knittedBlousePoints(AT, AG, AD, AP, AR, AA1, A1A2, GG1, P1P2, GG2, T1T2, AA3, OO1, OO2, O2O4);

    console.log(points);
  }

  constructor() {
  }


}
