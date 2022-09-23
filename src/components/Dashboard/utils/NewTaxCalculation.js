// // PAYABLE TAX
const [minSalary, housingFund, pensionRate] = [360000, 2.5, 7.5];

/**Relief first = 200k + 20% or annual */
const relief = function (annualSalary) {
  return 200000 + annualSalary * 0.2;
};

const pension = function (annualSalary) {
  return annualSalary * (pensionRate / 100);
};

/**Housing salary = 2.5% of annual salary */
const housing = function (annualSalary) {
  return annualSalary * (housingFund / 100);
};

/** Total relief */
const totalRelief = function (annualSalary) {
  //   var totalRelief =
  //     relief(annualSalary) + pension(annualSalary) + housing(annualSalary);
  //   console.log(totalRelief);
  return relief(annualSalary) + pension(annualSalary) + housing(annualSalary);
};

const chargeableIncomeFunct = function (annualSalary) {
  return annualSalary - totalRelief(annualSalary);
};
/**Chargeable income */
//var chargeableIncome = annualSalary;

export const Tax = function (annualSalary) {
  var annualTax;

  if (annualSalary <= minSalary) {
    annualTax = 0;
  } else {
    const chargeableIncome = chargeableIncomeFunct(annualSalary);
    /**Relief first = 200k + 20% or annual */
    // var relief = 200000 + (annualSalary * 0.2);

    /**Pension fund 7.5% of annual salary */
    // var pension = (annualSalary * (pensionRate/100));

    if (chargeableIncome <= 300000) {
      annualTax = chargeableIncome * 0.07;
    } else {
      if (chargeableIncome > 300000 && chargeableIncome <= 600000) {
        var tax1 = 300000 * 0.07;
        var tax2 = (chargeableIncome - 300000) * 0.11;
        // annualTax = tax1 + tax2;
        console.log(tax1 + tax2);
      }
      if (chargeableIncome > 600000 && chargeableIncome <= 1100000) {
        tax1 = 300000 * 0.07;
        tax2 = 300000 * 0.11;
        var tax3 = (chargeableIncome - 600000) * 0.15;
        // annualTax = tax1 + tax2 + tax3;
        console.log(tax1 + tax2 + tax3);
      }
      if (chargeableIncome > 1100000 && chargeableIncome <= 1600000) {
        tax1 = 300000 * 0.07;
        tax2 = 300000 * 0.11;
        tax3 = 500000 * 0.15;
        var tax4 = (chargeableIncome - 1100000) * 0.19;
        // annualTax = tax1 + tax2 + tax3 + tax4;
        console.log(tax1 + tax2 + tax3 + tax4);
      }
      if (chargeableIncome > 1600000 && chargeableIncome <= 3200000) {
        tax1 = 300000 * 0.07;
        tax2 = 300000 * 0.11;
        tax3 = 500000 * 0.15;
        tax4 = 500000 * 0.19;
        var tax5 = (chargeableIncome - 1600000) * 0.21;
        // annualTax = tax1 + tax2 + tax3 + tax4 + tax5;
        console.log(tax1 + tax2 + tax3 + tax4 + tax5);
      }
      if (chargeableIncome > 3200000) {
        tax1 = 300000 * 0.07;
        tax2 = 300000 * 0.11;
        tax3 = 500000 * 0.15;
        tax4 = 500000 * 0.19;
        tax5 = 1600000 * 0.21;
        var tax6 = (chargeableIncome - 3200000) * 0.24;
        // annualTax = tax1 + tax2 + tax3 + tax4 + tax5 + tax6;
        console.log(tax1 + tax2 + tax3 + tax4 + tax5 + tax6);
      }
    }
    return annualTax;
  }

  //   return tax * 0.1017;
};
