const input = require('prompt-sync')();

const valor_kwh = Number(input("Digite o valor de consumo em KWh: "))

function calcular_talao(KWh) {
    var taxa_kwh = 1
    var icms = 0
    var pis_confis = 0
    var taxa_porte = 0
    if (KWh>80){
        taxa_porte = KWh*(6/100)
        if (KWh<=100){
            taxa_kwh *= (KWh*0.59)
            icms = taxa_kwh*(25/100)
            pis_confis = taxa_kwh*(15/100)
            console.log("CONSUMO", KWh," KWh")
            console.log("Total a pagar R$", taxa_kwh.toFixed(2))
            console.log("ICMS R$", icms.toFixed(2))
            console.log("PIS/CONFIS R$", pis_confis.toFixed(2))
            console.log("Taxa de Iluminação R$", taxa_porte.toFixed(2))
        }
        else if (KWh>100){
            taxa_kwh *= (KWh*0.75)
            icms = taxa_kwh*(25/100)
            pis_confis = taxa_kwh*(15/100)
            console.log("CONSUMO", KWh," KWh")
            console.log("Total a pagar R$", taxa_kwh.toFixed(2))
            console.log("ICMS R$", icms.toFixed(2))
            console.log("PIS/CONFIS R$", pis_confis.toFixed(2))
            console.log("Taxa de Iluminação R$", taxa_porte.toFixed(2))
        }
    }
    else if (KWh<30){
        console.log("CONSUMO", KWh," KWh")
        console.log("Total a pagar R$", 0)
        console.log("ICMS R$", 0)
        console.log("PIS/CONFIS R$", 0)
        console.log("Taxa de Iluminação R$", 0)
    }
}

calcular_talao(valor_kwh)