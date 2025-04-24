document.getElementById("salarioForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const salarioBruto = parseFloat(document.getElementById("salario").value);
    const dependentes = parseInt(document.getElementById("dependentes").value);

    
    let inss;
    if (salarioBruto <= 1518.00) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2793.88) {
        inss = (1518 * 0.075) + ((salarioBruto - 1518) * 0.09);
    } else if (salarioBruto <= 4190.83) {
        inss = (1518 * 0.075) + ((2793.88 - 1518) * 0.09) + ((salarioBruto - 2793.88) * 0.12);
    } else if (salarioBruto <= 8157.41) {
        inss = (1518 * 0.075) + ((2793.88 - 1518) * 0.09) + ((4190.83 - 2793.88) * 0.12) + ((salarioBruto - 4190.83) * 0.14);
    } else {
        inss = 951.62; 
    }

    
    const baseIR = salarioBruto - inss - (dependentes * 189.59);

    
    let ir;
    if (baseIR <= 2259.20) {
        ir = 0;
    } else if (baseIR <= 2826.65) {
        ir = (baseIR * 0.075) - 169.44;
    } else if (baseIR <= 3751.05) {
        ir = (baseIR * 0.15) - 381.44;
    } else if (baseIR <= 4664.68) {
        ir = (baseIR * 0.225) - 662.77;
    } else {
        ir = (baseIR * 0.275) - 896.00;
    }

    ir = ir < 0 ? 0 : ir;

    const salarioLiquido = salarioBruto - inss - ir;

    document.getElementById("inss").textContent = inss.toFixed(2);
    document.getElementById("irrf").textContent = ir.toFixed(2);
    document.getElementById("liquido").textContent = salarioLiquido.toFixed(2);
    document.getElementById("resultado").style.display = "block";
});