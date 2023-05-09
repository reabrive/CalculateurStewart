 document.querySelectorAll('input[type="number"]').forEach(input => {
            input.addEventListener('focus', function () {
                if (!this.dataset.used) {
                    this.value = this.dataset.default || '';
                    this.dataset.used = 'true';
                }
            });
        });
  function calculerstewart() {
  var ph = parseFloat(document.getElementById("ph").value);
  var po = parseFloat(document.getElementById("po").value);
  var pc = parseFloat(document.getElementById("pc").value);
  var na = parseFloat(document.getElementById("na").value);
  var k = parseFloat(document.getElementById("k").value);
  var ca = parseFloat(document.getElementById("ca").value);
  var mg = parseFloat(document.getElementById("mg").value);
  var cl = parseFloat(document.getElementById("cl").value);
  var lactate = parseFloat(document.getElementById("lactate").value);
  var phosphore = parseFloat(document.getElementById("phosphore").value);
  var albumine = parseFloat(document.getElementById("albumine").value);
  var bicarbonate = parseFloat(document.getElementById("bicarbonate").value);
  var glycemie = parseFloat(document.getElementById("glycemie").value);

  var SIDa = (na + k + 2 * ca + 2 * mg) - (cl + lactate);
  var SIDe = bicarbonate + 0.28 * albumine + 1.8 * phosphore;
  var SIG = SIDa - SIDe;
  var kc = k - 6 * (7.40 - ph);
  var natcor = na + 0.3 * (glycemie - 5);
  var trou_anionique = na - (cl + bicarbonate);
  var trou_anionique_corrige = trou_anionique + (40 - albumine) * 0.25;
  var calcium_corrige = ca - 0.025 * (albumine - 40);


  var message = "<p>SIDa = " + SIDa.toFixed(2) + " mmol/L</p><p>SIDe = " + SIDe.toFixed(2) + " mmol/L</p><p>SIG = " + SIG.toFixed(2) + " mmol/L</p><p>Kaliémie corrigée = " + kc.toFixed(2) + " mmol/L</p>";

  if (ph > 7.42) {
  message += "<p>Le patient est en alcalose.</p>";
} else if (ph < 7.38) {
  message += "<p>Le patient est en acidose.</p>";
} else {
  message += "<p>Le pH est dans la plage normale.</p>";
}

if (SIDa > 42 && SIG < 5 ) {
  message += "<p>Selon la méthode de Stewart le patient présente une alcalose métabolique.</p>";
} else if (SIDa < 38 && SIG < 5) {
  message += "<p>Selon la méthode Stewart le patient présente une acidose métabolique.</p>";
}

if (SIG > 5) {
  message += "<p>Selon la méthode de Stewart la présence d'un anion indosé est probable.</p>";
}

if (pc < 32) {
  message += "<p>Le patient est hypocapnique.</p>";
} else if (pc > 45) {
  message += "<p>Le patient est hypercapnique.</p>";
}

if (po > 105) {
  message += "<p>Le patient est hyperoxique.</p>";
} else if (po < 70) {
  message += "<p>Le patient est hypoxémique.</p>";
}
   if (lactate > 1.90) {
  message += "<p>Le patient présente une hyperlactatémie.</p>";
} 
   
  message += "<p> Le trou anionique est de : " + trou_anionique.toFixed(2) + " mEq/l <p>";
  message += "<p> Le trou anionique corrigé (Albumine) est de : " + trou_anionique_corrige.toFixed(2) + " mEq/l <p>";
  message += "<p> La calcémie corrigée (Albumine) est de : " + calcium_corrige.toFixed(2) + " mEq/l <p>";

  if (ph < 7.37 && pc > 35 && pc < 44 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une acidose métabolique non compensée";
  } else if (ph < 7.37 && pc < 35 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une acidose métabolique partiellement compensée";
  } else if (ph > 7.37 && ph < 7.43 && pc < 35 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une acidose métabolique complètement compensée";
  } else if (ph < 7.35 && pc > 45 && bicarbonate > 22 && bicarbonate < 26) {
    message += "Selon la méthode classique, il s'agit d'une acidose respiratoire non compensée";
  } else if (ph < 7.35 && pc > 45 && bicarbonate > 26) {
    message += "Selon la méthode classique, il s'agit d'une acidose respiratoire partiellement compensée";
  } else if (ph > 7.37 && ph < 7.43 && pc > 45 && bicarbonate > 26) {
    message += "Selon la méthode classique, il s'agit d'une acidose respiratoire complètement compensée";
  } else if (ph > 7.45 && pc > 35 && pc < 44 && bicarbonate > 26) {
    message += "Selon la méthode classique, il s'agit d'une alcalose métabolique non compensée";
  } else if (ph > 7.45 && pc > 44 && bicarbonate > 26) {
    message += "Selon la méthode classique, il s'agit d'une alcalose métabolique partiellement compensée";
  } else if (ph > 7.37 && ph < 7.43 && pc > 44 && bicarbonate > 26) {
    message += "Selon la méthode classique, il s'agit d'une alcalose métabolique complètement compensée";
  } else if (ph > 7.45 && pc < 35 && bicarbonate > 22 && bicarbonate < 26) {
    message += "Selon la méthode classique, il s'agit d'une alcalose respiratoire non compensée";
  } else if (ph > 7.45 && pc < 35 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une alcalose respiratoire partiellement compensée";
  } else if (ph > 7.37 && ph < 7.43 && pc < 35 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une alcalose respiratoire complètement compensée";
  } else if (ph < 7.37 && pc > 45 && bicarbonate < 22) {
    message += "Selon la méthode classique, il s'agit d'une acidose mixte";
  } else {
    message += "Selon la méthode classique le diagnostic ne peut pas être déterminé avec les informations fournies.";
  }


  document.getElementById("resultat").innerHTML = message;
}
