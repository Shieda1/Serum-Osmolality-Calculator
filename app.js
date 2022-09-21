// https://www.omnicalculator.com/health/serum-osmolality

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const serumosmolalityRadio = document.getElementById('serumosmolalityRadio');
const naRadio = document.getElementById('naRadio');
const bloodureanitrogenRadio = document.getElementById('bloodureanitrogenRadio');
const glucoseRadio = document.getElementById('glucoseRadio');
const serumalcoholconcetrationRadio = document.getElementById('serumalcoholconcetrationRadio');

let serumosmolality;
let na = v1;
let bloodureanitrogen = v2;
let glucose = v3;
let serumalcoholconcetration = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

serumosmolalityRadio.addEventListener('click', function() {
  variable1.textContent = 'Na';
  variable2.textContent = 'Blood urea nitrogen';
  variable3.textContent = 'Glucose';
  variable4.textContent = 'Serum alcohol concetration';
  na = v1;
  bloodureanitrogen = v2;
  glucose = v3;
  serumalcoholconcetration = v4;
  result.textContent = '';
});

naRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum osmolality';
  variable2.textContent = 'Blood urea nitrogen';
  variable3.textContent = 'Glucose';
  variable4.textContent = 'Serum alcohol concetration';
  serumosmolality = v1;
  bloodureanitrogen = v2;
  glucose = v3;
  serumalcoholconcetration = v4;
  result.textContent = '';
});

bloodureanitrogenRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum osmolality';
  variable2.textContent = 'Na';
  variable3.textContent = 'Glucose';
  variable4.textContent = 'Serum alcohol concetration';
  serumosmolality = v1;
  na = v2;
  glucose = v3;
  serumalcoholconcetration = v4;
  result.textContent = '';
});

glucoseRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum osmolality';
  variable2.textContent = 'Na';
  variable3.textContent = 'Blood urea nitrogen';
  variable4.textContent = 'Serum alcohol concetration';
  serumosmolality = v1;
  na = v2;
  bloodureanitrogen = v3;
  serumalcoholconcetration = v4;
  result.textContent = '';
});

serumalcoholconcetrationRadio.addEventListener('click', function() {
  variable1.textContent = 'Serum osmolality';
  variable2.textContent = 'Na';
  variable3.textContent = 'Blood urea nitrogen';
  variable4.textContent = 'Glucose';
  serumosmolality = v1;
  na = v2;
  bloodureanitrogen = v3;
  glucose = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(serumosmolalityRadio.checked)
    result.textContent = `Serum osmolality = ${computeserumosmolality().toFixed(2)}`;

  else if(naRadio.checked)
    result.textContent = `Na = ${computena().toFixed(2)}`;

  else if(bloodureanitrogenRadio.checked)
    result.textContent = `Blood urea nitrogen = ${computebloodureanitrogen().toFixed(2)}`;

  else if(glucoseRadio.checked)
    result.textContent = `Glucose = ${computeglucose().toFixed(2)}`;

  else if(serumalcoholconcetrationRadio.checked)
    result.textContent = `Serum alcohol concetration = ${computeserumalcoholconcetration().toFixed(2)}`;
})

// calculation

// serumosmolality = 2 * na + bloodureanitrogen / 2.8 + glucose / 18 + serumalcoholconcetration / 3.7

function computeserumosmolality() {
  return 2 * Number(na.value) + Number(bloodureanitrogen.value) / 2.8 + Number(glucose.value) / 18 + Number(serumalcoholconcetration.value) / 3.7;
}

function computena() {
  return (Number(serumosmolality.value) - Number(bloodureanitrogen.value) / 2.8 - Number(glucose.value) / 18 - Number(serumalcoholconcetration.value) / 3.7) / 2;
}

function computebloodureanitrogen() {
  return (Number(serumosmolality.value) - 2 * Number(na.value) - Number(glucose.value) / 18 - Number(serumalcoholconcetration.value) / 3.7) * 2.8;
}

function computeglucose() {
  return (Number(serumosmolality.value) - 2 * Number(na.value) - Number(bloodureanitrogen.value) / 2.8 - Number(serumalcoholconcetration.value) / 3.7) * 18;
}

function computeserumalcoholconcetration() {
  return (Number(serumosmolality.value) - 2 * Number(na.value) - Number(bloodureanitrogen.value) / 2.8 - Number(glucose.value) / 18) * 3.7;
}