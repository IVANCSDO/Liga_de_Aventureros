// Obtener referencias a los elementos de entrada
    const modDexInput = document.getElementById('mod-dex');
    const modConInput = document.getElementById('mod-con');
    const modWisInput = document.getElementById('mod-wis');
    const modIntInput = document.getElementById('mod-int');
    const armorMagicInput = document.getElementById('armor-magic');
    const shieldMagicInput = document.getElementById('shield-magic');
    const bonus1Input = document.getElementById('bonus-1');
    const bonus2Input = document.getElementById('bonus-2');
    const shieldObjectCheckbox = document.getElementById('shield-object');
    const shieldSpellCheckbox = document.getElementById('shield-spell');
    const shieldFaithCheckbox = document.getElementById('shield-faith');
    const hasteCheckbox = document.getElementById('haste');
    const ringProtectionCheckbox = document.getElementById('ring-protection');
    const bracersDefenseCheckbox = document.getElementById('bracers-defense');
    const bladesongCheckbox = document.getElementById('bladesong');
    const fightingDefenseCheckbox = document.getElementById('fighting-defense');
    const dualWielderCheckbox = document.getElementById('dual-wielder');

// Variables para almacenar los valores
    let modDexValue = parseInt(modDexInput.value);
    let modConValue = parseInt(modConInput.value);
    let modWisValue = parseInt(modWisInput.value);
    let modIntValue = parseInt(modIntInput.value);
    let armorMagicValue = parseInt(armorMagicInput.value);
    let shieldMagicValue = parseInt(shieldMagicInput.value);
    let bonus1Value = parseInt(bonus1Input.value);
    let bonus2Value = parseInt(bonus2Input.value);
    let shieldObjectChecked = shieldObjectCheckbox.checked;
    let shieldSpellChecked = shieldSpellCheckbox.checked;
    let shieldFaithChecked = shieldFaithCheckbox.checked;
    let hasteChecked = hasteCheckbox.checked;
    let ringProtectionChecked = ringProtectionCheckbox.checked;
    let bracersDefenseChecked = bracersDefenseCheckbox.checked;
    let bladesongChecked = bladesongCheckbox.checked;
    let fightingDefenseChecked = fightingDefenseCheckbox.checked;
    let dualWielderChecked = dualWielderCheckbox.checked;

    var totalBonuses = 0;

// ----

// Base armors
    var labelNoArmor = document.getElementById('label-no-armor');
    var labelBarbarianDefense = document.getElementById('label-barbarian-defense');
    var labelMonkDefense = document.getElementById('label-monk-defense');
    var labelMageArmor = document.getElementById('label-mage-armor');
    var labelDraconicResilience = document.getElementById('label-draconic-resilience');

// Armors
    var labelPaddedLeather = document.getElementById('label-padded-leather');
    var labelStuddedLeather = document.getElementById('label-studded-leather');
    var labelHideArmor = document.getElementById('label-hide-armor');
    var labelChainShirt = document.getElementById('label-chain-shirt');
    var labelScaleBreastplate = document.getElementById('label-scale-breastplate');
    var labelHalfPlate = document.getElementById('label-half-plate');
    var labelRingMail = document.getElementById('label-ring-mail');
    var labelChainMail = document.getElementById('label-chain-mail');
    var labelSplintArmor = document.getElementById('label-splint-armor');
    var labelPlateArmor = document.getElementById('label-plate-armor');


$(document).ready(function() {
    // Event listener para los inputs de modificador de características
    $('#mod-dex, #mod-con, #mod-wis, #mod-int').on('input', function() {
      modDexValue = parseInt($('#mod-dex').val());
      modConValue = parseInt($('#mod-con').val());
      modWisValue = parseInt($('#mod-wis').val());
      modIntValue = parseInt($('#mod-int').val());
      actualizarValores()
    });
  
    // Event listener para los inputs de bonificaciones
    $('#armor-magic, #shield-magic, #bonus-1, #bonus-2').on('input', function() {
      armorMagicValue = parseInt($('#armor-magic').val());
      shieldMagicValue = parseInt($('#shield-magic').val());
      bonus1Value = parseInt($('#bonus-1').val());
      bonus2Value = parseInt($('#bonus-2').val());
      actualizarValores()
    });
  
    // Event listener para los checkboxes
    $('.form-check-input').on('change', function() {
      shieldObjectChecked = $('#shield-object').prop('checked');
      shieldSpellChecked = $('#shield-spell').prop('checked');
      shieldFaithChecked = $('#shield-faith').prop('checked');
      hasteChecked = $('#haste').prop('checked');
      ringProtectionChecked = $('#ring-protection').prop('checked');
      bracersDefenseChecked = $('#bracers-defense').prop('checked');
      bladesongChecked = $('#bladesong').prop('checked');
      fightingDefenseChecked = $('#fighting-defense').prop('checked');
      dualWielderChecked = $('#dual-wielder').prop('checked');
      actualizarValores()
    });
  });
  
  var bonusCheck = 0;

function sumarBonos(){

    bonusCheck = 0

    const checkboxes = [
        { checkbox: shieldObjectCheckbox, bonus: 2 },
        { checkbox: shieldSpellCheckbox, bonus: 5 },
        { checkbox: shieldFaithCheckbox, bonus: 1 },
        { checkbox: hasteCheckbox, bonus: 2 },
        { checkbox: ringProtectionCheckbox, bonus: 1 },
        { checkbox: bracersDefenseCheckbox, bonus: 2 },
        { checkbox: bladesongCheckbox, bonus: modIntValue },
        { checkbox: fightingDefenseCheckbox, bonus: 1 },
        { checkbox: dualWielderCheckbox, bonus: 1 }
    ];


    for (const checkboxData of checkboxes) {
        if (checkboxData.checkbox.checked) {
            bonusCheck += checkboxData.bonus;
        }
    }

    totalBonuses = modDexValue + modConValue + modWisValue + modIntValue + armorMagicValue + shieldMagicValue + bonus1Value + bonus2Value + bonusCheck;
}

function actualizarValores(){
    sumarBonos()

    var dexValueMax2 = modDexValue;
    if(dexValueMax2 > 2){
        dexValueMax2 = 2;
    }

    labelNoArmor.innerHTML = 10+modDexValue+bonusCheck;
    labelBarbarianDefense.innerHTML = 10 + modDexValue + modConValue + bonusCheck;
    labelMonkDefense.innerHTML = 10 + modDexValue + modWisValue + bonusCheck;
    labelMageArmor.innerHTML = 13 + modDexValue + bonusCheck;
    labelDraconicResilience.innerHTML = 13 + modDexValue + bonusCheck;

    labelPaddedLeather.innerHTML = 11 + modDexValue + bonusCheck;
    labelStuddedLeather.innerHTML = 12 + modDexValue + bonusCheck;
    labelHideArmor.innerHTML = 12 + dexValueMax2 + bonusCheck;
    labelChainShirt.innerHTML = 13 + dexValueMax2 + bonusCheck;
    labelScaleBreastplate.innerHTML = 14 + dexValueMax2 + bonusCheck;
    labelHalfPlate.innerHTML = 15 + dexValueMax2 + bonusCheck;
    labelRingMail.innerHTML = 14 + bonusCheck;
    labelChainMail.innerHTML = 16 + bonusCheck;
    labelSplintArmor.innerHTML = 17 + bonusCheck;
    labelPlateArmor.innerHTML = 18 + bonusCheck;

}