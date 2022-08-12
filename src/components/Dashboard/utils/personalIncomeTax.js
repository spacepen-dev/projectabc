// CALCULATED THE REDEFINED TAX
const redefinedTaxCalculation = function (annualSalary) {
  const redefined = {
    pension: 0.08 * annualSalary,
    NHF: 0.025 * annualSalary,
    redefinedTax: function () {
      return this.pension + this.NHF;
    },
  };
  return redefined;
};

// CALCULATING THE ANNUAL CONSOLIDATED RELIEFS AND THE MONTHLY CONSOLIDATED RELIEFS
const ConsolidatedRelief = function (annualSalary) {
  const CRA = 0.2 * annualSalary + 200000;

  //   console.log(CRA);
  return CRA;
};

//  CALCULATE THE TOTAL RELIEF
const TotalRelief = function (annualSalary) {
  const total =
    redefinedTaxCalculation(annualSalary).redefinedTax() +
    ConsolidatedRelief(annualSalary);
  return total;
};

function lessThanTax(annualSalary) {
  return annualSalary * 0.01;
}

function tobeTaxed(taxAbleIncome, annualSalary) {
  if (taxAbleIncome >= 300000) {
    return taxAbleIncome * 0.07;
  } else if (taxAbleIncome >= 500000) {
    return taxAbleIncome * 0.15;
  } else if (taxAbleIncome >= 1600000) {
    return taxAbleIncome * 0.21;
  } else if (taxAbleIncome > 3200000) {
    return (annualSalary - 3200000) * 0.24;
  }
}

// PAYABLE TAX
export const payTax = function (annualSalary) {
  //   var tax;

  let convertedToNumber = Number(annualSalary);

  const taxAbleIncome = annualSalary - TotalRelief(convertedToNumber);

  if (taxAbleIncome < 300000) {
    return lessThanTax(annualSalary);
  } else {
    return tobeTaxed(taxAbleIncome, annualSalary);
  }

  //   return tax * 0.1017;
};
