// Convertir caracteres especiales en texto seguro para que el navegador no los interprete como HTML.
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Transformar un importe con formato visual en euros a un número utilizable para ordenar.
function parsePolicyAmountToNumber(policyAmount) {
  return Number(
    String(policyAmount)
      .replace(' €', '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
}

// Convertir una fecha en formato dd/mm/yyyy a timestamp para comparar cronológicamente.
function parsePolicyDateToTimestamp(policyDate) {
  const [day, month, year] = String(policyDate).split('/').map(Number);
  return new Date(year, month - 1, day).getTime();
}




const policiesData = [
    {
        "policyNumber":  "75840001",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/01/2024",
        "expiryDate":  "08/01/2025",
        "amount":  "1.337,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840002",
        "riskName":  "Seat Leon",
        "contractDate":  "11/01/2024",
        "expiryDate":  "15/01/2025",
        "amount":  "1.474,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840003",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/01/2024",
        "expiryDate":  "22/01/2025",
        "amount":  "1.612,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840004",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/01/2024",
        "expiryDate":  "29/01/2025",
        "amount":  "1.749,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840005",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/01/2024",
        "expiryDate":  "05/02/2025",
        "amount":  "1.887,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840006",
        "riskName":  "Toyota Corolla",
        "contractDate":  "31/01/2024",
        "expiryDate":  "12/02/2025",
        "amount":  "2.024,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840007",
        "riskName":  "Renault Clio",
        "contractDate":  "05/02/2024",
        "expiryDate":  "19/02/2025",
        "amount":  "2.162,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840008",
        "riskName":  "BMW X1",
        "contractDate":  "10/02/2024",
        "expiryDate":  "26/02/2025",
        "amount":  "2.299,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840009",
        "riskName":  "Audi A3",
        "contractDate":  "15/02/2024",
        "expiryDate":  "05/03/2025",
        "amount":  "2.437,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840010",
        "riskName":  "Tesla Model 3",
        "contractDate":  "20/02/2024",
        "expiryDate":  "12/03/2025",
        "amount":  "2.574,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840011",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "25/02/2024",
        "expiryDate":  "19/03/2025",
        "amount":  "2.711,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840012",
        "riskName":  "Seat Leon",
        "contractDate":  "01/03/2024",
        "expiryDate":  "26/03/2025",
        "amount":  "2.849,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840013",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "06/03/2024",
        "expiryDate":  "02/04/2025",
        "amount":  "2.986,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840014",
        "riskName":  "Peugeot 3008",
        "contractDate":  "11/03/2024",
        "expiryDate":  "09/04/2025",
        "amount":  "3.124,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840015",
        "riskName":  "Kia Sportage",
        "contractDate":  "16/03/2024",
        "expiryDate":  "16/04/2025",
        "amount":  "3.261,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840016",
        "riskName":  "Toyota Corolla",
        "contractDate":  "21/03/2024",
        "expiryDate":  "23/04/2025",
        "amount":  "3.399,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840017",
        "riskName":  "Renault Clio",
        "contractDate":  "26/03/2024",
        "expiryDate":  "30/04/2025",
        "amount":  "3.536,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840018",
        "riskName":  "BMW X1",
        "contractDate":  "31/03/2024",
        "expiryDate":  "07/05/2025",
        "amount":  "3.674,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840019",
        "riskName":  "Audi A3",
        "contractDate":  "05/04/2024",
        "expiryDate":  "14/05/2025",
        "amount":  "3.811,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840020",
        "riskName":  "Tesla Model 3",
        "contractDate":  "10/04/2024",
        "expiryDate":  "21/05/2025",
        "amount":  "3.949,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840021",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "15/04/2024",
        "expiryDate":  "28/05/2025",
        "amount":  "4.086,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840022",
        "riskName":  "Seat Leon",
        "contractDate":  "20/04/2024",
        "expiryDate":  "04/06/2025",
        "amount":  "4.223,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840023",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "25/04/2024",
        "expiryDate":  "11/06/2025",
        "amount":  "4.361,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840024",
        "riskName":  "Peugeot 3008",
        "contractDate":  "30/04/2024",
        "expiryDate":  "18/06/2025",
        "amount":  "4.498,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840025",
        "riskName":  "Kia Sportage",
        "contractDate":  "05/05/2024",
        "expiryDate":  "25/06/2025",
        "amount":  "4.636,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840026",
        "riskName":  "Toyota Corolla",
        "contractDate":  "10/05/2024",
        "expiryDate":  "02/07/2025",
        "amount":  "4.773,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840027",
        "riskName":  "Renault Clio",
        "contractDate":  "15/05/2024",
        "expiryDate":  "09/07/2025",
        "amount":  "4.911,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840028",
        "riskName":  "BMW X1",
        "contractDate":  "20/05/2024",
        "expiryDate":  "16/07/2025",
        "amount":  "5.048,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840029",
        "riskName":  "Audi A3",
        "contractDate":  "25/05/2024",
        "expiryDate":  "23/07/2025",
        "amount":  "5.186,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840030",
        "riskName":  "Tesla Model 3",
        "contractDate":  "30/05/2024",
        "expiryDate":  "30/07/2025",
        "amount":  "5.323,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840031",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "04/06/2024",
        "expiryDate":  "06/08/2025",
        "amount":  "5.460,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840032",
        "riskName":  "Seat Leon",
        "contractDate":  "09/06/2024",
        "expiryDate":  "13/08/2025",
        "amount":  "5.598,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840033",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "14/06/2024",
        "expiryDate":  "20/08/2025",
        "amount":  "5.735,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840034",
        "riskName":  "Peugeot 3008",
        "contractDate":  "19/06/2024",
        "expiryDate":  "27/08/2025",
        "amount":  "5.873,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840035",
        "riskName":  "Kia Sportage",
        "contractDate":  "24/06/2024",
        "expiryDate":  "03/09/2025",
        "amount":  "6.010,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840036",
        "riskName":  "Toyota Corolla",
        "contractDate":  "29/06/2024",
        "expiryDate":  "10/09/2025",
        "amount":  "6.148,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840037",
        "riskName":  "Renault Clio",
        "contractDate":  "04/07/2024",
        "expiryDate":  "17/09/2025",
        "amount":  "6.285,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840038",
        "riskName":  "BMW X1",
        "contractDate":  "09/07/2024",
        "expiryDate":  "24/09/2025",
        "amount":  "6.423,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840039",
        "riskName":  "Audi A3",
        "contractDate":  "14/07/2024",
        "expiryDate":  "01/10/2025",
        "amount":  "6.560,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840040",
        "riskName":  "Tesla Model 3",
        "contractDate":  "19/07/2024",
        "expiryDate":  "08/10/2025",
        "amount":  "6.698,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840041",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "24/07/2024",
        "expiryDate":  "15/10/2025",
        "amount":  "6.835,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840042",
        "riskName":  "Seat Leon",
        "contractDate":  "29/07/2024",
        "expiryDate":  "22/10/2025",
        "amount":  "6.972,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840043",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "03/08/2024",
        "expiryDate":  "29/10/2025",
        "amount":  "7.110,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840044",
        "riskName":  "Peugeot 3008",
        "contractDate":  "08/08/2024",
        "expiryDate":  "05/11/2025",
        "amount":  "7.247,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840045",
        "riskName":  "Kia Sportage",
        "contractDate":  "13/08/2024",
        "expiryDate":  "12/11/2025",
        "amount":  "7.385,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840046",
        "riskName":  "Toyota Corolla",
        "contractDate":  "18/08/2024",
        "expiryDate":  "19/11/2025",
        "amount":  "7.522,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840047",
        "riskName":  "Renault Clio",
        "contractDate":  "23/08/2024",
        "expiryDate":  "26/11/2025",
        "amount":  "7.660,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840048",
        "riskName":  "BMW X1",
        "contractDate":  "28/08/2024",
        "expiryDate":  "03/12/2025",
        "amount":  "7.797,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840049",
        "riskName":  "Audi A3",
        "contractDate":  "02/09/2024",
        "expiryDate":  "10/12/2025",
        "amount":  "7.935,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840050",
        "riskName":  "Tesla Model 3",
        "contractDate":  "07/09/2024",
        "expiryDate":  "17/12/2025",
        "amount":  "8.072,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840051",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "12/09/2024",
        "expiryDate":  "24/12/2025",
        "amount":  "8.209,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840052",
        "riskName":  "Seat Leon",
        "contractDate":  "17/09/2024",
        "expiryDate":  "31/12/2025",
        "amount":  "8.347,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840053",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "22/09/2024",
        "expiryDate":  "07/01/2026",
        "amount":  "8.484,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840054",
        "riskName":  "Peugeot 3008",
        "contractDate":  "27/09/2024",
        "expiryDate":  "14/01/2026",
        "amount":  "8.622,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840055",
        "riskName":  "Kia Sportage",
        "contractDate":  "02/10/2024",
        "expiryDate":  "21/01/2026",
        "amount":  "8.759,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840056",
        "riskName":  "Toyota Corolla",
        "contractDate":  "07/10/2024",
        "expiryDate":  "28/01/2026",
        "amount":  "8.897,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840057",
        "riskName":  "Renault Clio",
        "contractDate":  "12/10/2024",
        "expiryDate":  "04/02/2026",
        "amount":  "9.034,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840058",
        "riskName":  "BMW X1",
        "contractDate":  "17/10/2024",
        "expiryDate":  "11/02/2026",
        "amount":  "9.172,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840059",
        "riskName":  "Audi A3",
        "contractDate":  "22/10/2024",
        "expiryDate":  "18/02/2026",
        "amount":  "9.309,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840060",
        "riskName":  "Tesla Model 3",
        "contractDate":  "27/10/2024",
        "expiryDate":  "25/02/2026",
        "amount":  "9.447,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840061",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "01/11/2024",
        "expiryDate":  "04/03/2026",
        "amount":  "9.584,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840062",
        "riskName":  "Seat Leon",
        "contractDate":  "06/11/2024",
        "expiryDate":  "11/03/2026",
        "amount":  "9.721,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840063",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "11/11/2024",
        "expiryDate":  "18/03/2026",
        "amount":  "9.859,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840064",
        "riskName":  "Peugeot 3008",
        "contractDate":  "16/11/2024",
        "expiryDate":  "25/03/2026",
        "amount":  "9.996,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840065",
        "riskName":  "Kia Sportage",
        "contractDate":  "21/11/2024",
        "expiryDate":  "01/04/2026",
        "amount":  "10.134,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840066",
        "riskName":  "Toyota Corolla",
        "contractDate":  "26/11/2024",
        "expiryDate":  "08/04/2026",
        "amount":  "10.271,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840067",
        "riskName":  "Renault Clio",
        "contractDate":  "01/12/2024",
        "expiryDate":  "15/04/2026",
        "amount":  "10.409,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840068",
        "riskName":  "BMW X1",
        "contractDate":  "06/12/2024",
        "expiryDate":  "22/04/2026",
        "amount":  "10.546,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840069",
        "riskName":  "Audi A3",
        "contractDate":  "11/12/2024",
        "expiryDate":  "29/04/2026",
        "amount":  "10.684,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840070",
        "riskName":  "Tesla Model 3",
        "contractDate":  "16/12/2024",
        "expiryDate":  "06/05/2026",
        "amount":  "10.821,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840071",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "21/12/2024",
        "expiryDate":  "13/05/2026",
        "amount":  "10.958,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840072",
        "riskName":  "Seat Leon",
        "contractDate":  "26/12/2024",
        "expiryDate":  "20/05/2026",
        "amount":  "11.096,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840073",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "31/12/2024",
        "expiryDate":  "27/05/2026",
        "amount":  "11.233,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840074",
        "riskName":  "Peugeot 3008",
        "contractDate":  "05/01/2025",
        "expiryDate":  "03/06/2026",
        "amount":  "11.371,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840075",
        "riskName":  "Kia Sportage",
        "contractDate":  "10/01/2025",
        "expiryDate":  "10/06/2026",
        "amount":  "11.508,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840076",
        "riskName":  "Toyota Corolla",
        "contractDate":  "15/01/2025",
        "expiryDate":  "17/06/2026",
        "amount":  "11.646,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840077",
        "riskName":  "Renault Clio",
        "contractDate":  "20/01/2025",
        "expiryDate":  "24/06/2026",
        "amount":  "11.783,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840078",
        "riskName":  "BMW X1",
        "contractDate":  "25/01/2025",
        "expiryDate":  "01/07/2026",
        "amount":  "11.921,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840079",
        "riskName":  "Audi A3",
        "contractDate":  "30/01/2025",
        "expiryDate":  "08/07/2026",
        "amount":  "12.058,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840080",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/02/2025",
        "expiryDate":  "15/07/2026",
        "amount":  "12.196,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840081",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/02/2025",
        "expiryDate":  "22/07/2026",
        "amount":  "12.333,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840082",
        "riskName":  "Seat Leon",
        "contractDate":  "14/02/2025",
        "expiryDate":  "29/07/2026",
        "amount":  "12.470,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840083",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/02/2025",
        "expiryDate":  "05/08/2026",
        "amount":  "12.608,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840084",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/02/2025",
        "expiryDate":  "12/08/2026",
        "amount":  "12.745,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840085",
        "riskName":  "Kia Sportage",
        "contractDate":  "01/03/2025",
        "expiryDate":  "19/08/2026",
        "amount":  "12.883,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840086",
        "riskName":  "Toyota Corolla",
        "contractDate":  "06/03/2025",
        "expiryDate":  "26/08/2026",
        "amount":  "13.020,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840087",
        "riskName":  "Renault Clio",
        "contractDate":  "11/03/2025",
        "expiryDate":  "02/09/2026",
        "amount":  "13.158,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840088",
        "riskName":  "BMW X1",
        "contractDate":  "16/03/2025",
        "expiryDate":  "09/09/2026",
        "amount":  "13.295,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840089",
        "riskName":  "Audi A3",
        "contractDate":  "21/03/2025",
        "expiryDate":  "16/09/2026",
        "amount":  "13.433,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840090",
        "riskName":  "Tesla Model 3",
        "contractDate":  "26/03/2025",
        "expiryDate":  "23/09/2026",
        "amount":  "13.570,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840091",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "31/03/2025",
        "expiryDate":  "30/09/2026",
        "amount":  "13.707,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840092",
        "riskName":  "Seat Leon",
        "contractDate":  "05/04/2025",
        "expiryDate":  "07/10/2026",
        "amount":  "13.845,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840093",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "10/04/2025",
        "expiryDate":  "14/10/2026",
        "amount":  "13.982,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840094",
        "riskName":  "Peugeot 3008",
        "contractDate":  "15/04/2025",
        "expiryDate":  "21/10/2026",
        "amount":  "14.120,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840095",
        "riskName":  "Kia Sportage",
        "contractDate":  "20/04/2025",
        "expiryDate":  "28/10/2026",
        "amount":  "14.257,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840096",
        "riskName":  "Toyota Corolla",
        "contractDate":  "25/04/2025",
        "expiryDate":  "04/11/2026",
        "amount":  "14.395,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840097",
        "riskName":  "Renault Clio",
        "contractDate":  "30/04/2025",
        "expiryDate":  "11/11/2026",
        "amount":  "14.532,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840098",
        "riskName":  "BMW X1",
        "contractDate":  "05/05/2025",
        "expiryDate":  "18/11/2026",
        "amount":  "14.670,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840099",
        "riskName":  "Audi A3",
        "contractDate":  "10/05/2025",
        "expiryDate":  "25/11/2026",
        "amount":  "14.807,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840100",
        "riskName":  "Tesla Model 3",
        "contractDate":  "15/05/2025",
        "expiryDate":  "02/12/2026",
        "amount":  "14.945,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840101",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "20/05/2025",
        "expiryDate":  "09/12/2026",
        "amount":  "15.082,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840102",
        "riskName":  "Seat Leon",
        "contractDate":  "25/05/2025",
        "expiryDate":  "16/12/2026",
        "amount":  "15.219,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840103",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "30/05/2025",
        "expiryDate":  "23/12/2026",
        "amount":  "15.357,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840104",
        "riskName":  "Peugeot 3008",
        "contractDate":  "04/06/2025",
        "expiryDate":  "30/12/2026",
        "amount":  "15.494,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840105",
        "riskName":  "Kia Sportage",
        "contractDate":  "09/06/2025",
        "expiryDate":  "06/01/2027",
        "amount":  "15.632,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840106",
        "riskName":  "Toyota Corolla",
        "contractDate":  "14/06/2025",
        "expiryDate":  "13/01/2027",
        "amount":  "15.769,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840107",
        "riskName":  "Renault Clio",
        "contractDate":  "19/06/2025",
        "expiryDate":  "20/01/2027",
        "amount":  "15.907,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840108",
        "riskName":  "BMW X1",
        "contractDate":  "24/06/2025",
        "expiryDate":  "27/01/2027",
        "amount":  "16.044,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840109",
        "riskName":  "Audi A3",
        "contractDate":  "29/06/2025",
        "expiryDate":  "03/02/2027",
        "amount":  "16.182,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840110",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/07/2025",
        "expiryDate":  "10/02/2027",
        "amount":  "16.319,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840111",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/07/2025",
        "expiryDate":  "17/02/2027",
        "amount":  "16.456,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840112",
        "riskName":  "Seat Leon",
        "contractDate":  "14/07/2025",
        "expiryDate":  "24/02/2027",
        "amount":  "16.594,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840113",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/07/2025",
        "expiryDate":  "03/03/2027",
        "amount":  "16.731,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840114",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/07/2025",
        "expiryDate":  "10/03/2027",
        "amount":  "16.869,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840115",
        "riskName":  "Kia Sportage",
        "contractDate":  "29/07/2025",
        "expiryDate":  "17/03/2027",
        "amount":  "17.006,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840116",
        "riskName":  "Toyota Corolla",
        "contractDate":  "03/08/2025",
        "expiryDate":  "24/03/2027",
        "amount":  "17.144,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840117",
        "riskName":  "Renault Clio",
        "contractDate":  "08/08/2025",
        "expiryDate":  "31/03/2027",
        "amount":  "17.281,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840118",
        "riskName":  "BMW X1",
        "contractDate":  "13/08/2025",
        "expiryDate":  "07/04/2027",
        "amount":  "17.419,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840119",
        "riskName":  "Audi A3",
        "contractDate":  "18/08/2025",
        "expiryDate":  "14/04/2027",
        "amount":  "17.556,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840120",
        "riskName":  "Tesla Model 3",
        "contractDate":  "23/08/2025",
        "expiryDate":  "21/04/2027",
        "amount":  "17.694,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840121",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "28/08/2025",
        "expiryDate":  "28/04/2027",
        "amount":  "17.831,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840122",
        "riskName":  "Seat Leon",
        "contractDate":  "02/09/2025",
        "expiryDate":  "05/05/2027",
        "amount":  "17.968,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840123",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "07/09/2025",
        "expiryDate":  "12/05/2027",
        "amount":  "18.106,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840124",
        "riskName":  "Peugeot 3008",
        "contractDate":  "12/09/2025",
        "expiryDate":  "19/05/2027",
        "amount":  "18.243,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840125",
        "riskName":  "Kia Sportage",
        "contractDate":  "17/09/2025",
        "expiryDate":  "26/05/2027",
        "amount":  "18.381,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840126",
        "riskName":  "Toyota Corolla",
        "contractDate":  "22/09/2025",
        "expiryDate":  "02/06/2027",
        "amount":  "18.518,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840127",
        "riskName":  "Renault Clio",
        "contractDate":  "27/09/2025",
        "expiryDate":  "09/06/2027",
        "amount":  "18.656,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840128",
        "riskName":  "BMW X1",
        "contractDate":  "02/10/2025",
        "expiryDate":  "16/06/2027",
        "amount":  "18.793,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840129",
        "riskName":  "Audi A3",
        "contractDate":  "07/10/2025",
        "expiryDate":  "23/06/2027",
        "amount":  "18.931,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840130",
        "riskName":  "Tesla Model 3",
        "contractDate":  "12/10/2025",
        "expiryDate":  "30/06/2027",
        "amount":  "19.068,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840131",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "17/10/2025",
        "expiryDate":  "07/07/2027",
        "amount":  "19.205,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840132",
        "riskName":  "Seat Leon",
        "contractDate":  "22/10/2025",
        "expiryDate":  "14/07/2027",
        "amount":  "19.343,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840133",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "27/10/2025",
        "expiryDate":  "21/07/2027",
        "amount":  "19.480,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840134",
        "riskName":  "Peugeot 3008",
        "contractDate":  "01/11/2025",
        "expiryDate":  "28/07/2027",
        "amount":  "19.618,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840135",
        "riskName":  "Kia Sportage",
        "contractDate":  "06/11/2025",
        "expiryDate":  "04/08/2027",
        "amount":  "19.755,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840136",
        "riskName":  "Toyota Corolla",
        "contractDate":  "11/11/2025",
        "expiryDate":  "11/08/2027",
        "amount":  "19.893,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840137",
        "riskName":  "Renault Clio",
        "contractDate":  "16/11/2025",
        "expiryDate":  "18/08/2027",
        "amount":  "20.030,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840138",
        "riskName":  "BMW X1",
        "contractDate":  "21/11/2025",
        "expiryDate":  "25/08/2027",
        "amount":  "20.168,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840139",
        "riskName":  "Audi A3",
        "contractDate":  "26/11/2025",
        "expiryDate":  "01/09/2027",
        "amount":  "20.305,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840140",
        "riskName":  "Tesla Model 3",
        "contractDate":  "01/12/2025",
        "expiryDate":  "08/09/2027",
        "amount":  "20.443,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840141",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/12/2025",
        "expiryDate":  "15/09/2027",
        "amount":  "20.580,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840142",
        "riskName":  "Seat Leon",
        "contractDate":  "11/12/2025",
        "expiryDate":  "22/09/2027",
        "amount":  "20.717,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840143",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/12/2025",
        "expiryDate":  "29/09/2027",
        "amount":  "20.855,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840144",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/12/2025",
        "expiryDate":  "06/10/2027",
        "amount":  "20.992,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840145",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/12/2025",
        "expiryDate":  "13/10/2027",
        "amount":  "21.130,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840146",
        "riskName":  "Toyota Corolla",
        "contractDate":  "31/12/2025",
        "expiryDate":  "20/10/2027",
        "amount":  "21.267,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840147",
        "riskName":  "Renault Clio",
        "contractDate":  "05/01/2026",
        "expiryDate":  "27/10/2027",
        "amount":  "21.405,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840148",
        "riskName":  "BMW X1",
        "contractDate":  "10/01/2026",
        "expiryDate":  "03/11/2027",
        "amount":  "21.542,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840149",
        "riskName":  "Audi A3",
        "contractDate":  "15/01/2026",
        "expiryDate":  "10/11/2027",
        "amount":  "21.680,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840150",
        "riskName":  "Tesla Model 3",
        "contractDate":  "20/01/2026",
        "expiryDate":  "17/11/2027",
        "amount":  "21.817,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840151",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "25/01/2026",
        "expiryDate":  "24/11/2027",
        "amount":  "21.954,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840152",
        "riskName":  "Seat Leon",
        "contractDate":  "30/01/2026",
        "expiryDate":  "01/12/2027",
        "amount":  "22.092,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840153",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "04/02/2026",
        "expiryDate":  "08/12/2027",
        "amount":  "22.229,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840154",
        "riskName":  "Peugeot 3008",
        "contractDate":  "09/02/2026",
        "expiryDate":  "15/12/2027",
        "amount":  "22.367,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840155",
        "riskName":  "Kia Sportage",
        "contractDate":  "14/02/2026",
        "expiryDate":  "22/12/2027",
        "amount":  "22.504,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840156",
        "riskName":  "Toyota Corolla",
        "contractDate":  "19/02/2026",
        "expiryDate":  "29/12/2027",
        "amount":  "22.642,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840157",
        "riskName":  "Renault Clio",
        "contractDate":  "24/02/2026",
        "expiryDate":  "05/01/2028",
        "amount":  "22.779,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840158",
        "riskName":  "BMW X1",
        "contractDate":  "01/03/2026",
        "expiryDate":  "12/01/2028",
        "amount":  "22.917,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840159",
        "riskName":  "Audi A3",
        "contractDate":  "06/03/2026",
        "expiryDate":  "19/01/2028",
        "amount":  "23.054,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840160",
        "riskName":  "Tesla Model 3",
        "contractDate":  "11/03/2026",
        "expiryDate":  "26/01/2028",
        "amount":  "23.192,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840161",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "16/03/2026",
        "expiryDate":  "02/02/2028",
        "amount":  "23.329,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840162",
        "riskName":  "Seat Leon",
        "contractDate":  "21/03/2026",
        "expiryDate":  "09/02/2028",
        "amount":  "23.466,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840163",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "26/03/2026",
        "expiryDate":  "16/02/2028",
        "amount":  "23.604,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840164",
        "riskName":  "Peugeot 3008",
        "contractDate":  "31/03/2026",
        "expiryDate":  "23/02/2028",
        "amount":  "23.741,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840165",
        "riskName":  "Kia Sportage",
        "contractDate":  "05/04/2026",
        "expiryDate":  "01/03/2028",
        "amount":  "23.879,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840166",
        "riskName":  "Toyota Corolla",
        "contractDate":  "10/04/2026",
        "expiryDate":  "08/03/2028",
        "amount":  "24.016,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840167",
        "riskName":  "Renault Clio",
        "contractDate":  "15/04/2026",
        "expiryDate":  "15/03/2028",
        "amount":  "24.154,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840168",
        "riskName":  "BMW X1",
        "contractDate":  "20/04/2026",
        "expiryDate":  "22/03/2028",
        "amount":  "24.291,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840169",
        "riskName":  "Audi A3",
        "contractDate":  "25/04/2026",
        "expiryDate":  "29/03/2028",
        "amount":  "24.429,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840170",
        "riskName":  "Tesla Model 3",
        "contractDate":  "30/04/2026",
        "expiryDate":  "05/04/2028",
        "amount":  "24.566,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840171",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "05/05/2026",
        "expiryDate":  "12/04/2028",
        "amount":  "24.703,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840172",
        "riskName":  "Seat Leon",
        "contractDate":  "10/05/2026",
        "expiryDate":  "19/04/2028",
        "amount":  "24.841,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840173",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "15/05/2026",
        "expiryDate":  "26/04/2028",
        "amount":  "24.978,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840174",
        "riskName":  "Peugeot 3008",
        "contractDate":  "20/05/2026",
        "expiryDate":  "03/05/2028",
        "amount":  "25.116,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840175",
        "riskName":  "Kia Sportage",
        "contractDate":  "25/05/2026",
        "expiryDate":  "10/05/2028",
        "amount":  "25.253,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840176",
        "riskName":  "Toyota Corolla",
        "contractDate":  "30/05/2026",
        "expiryDate":  "17/05/2028",
        "amount":  "25.391,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840177",
        "riskName":  "Renault Clio",
        "contractDate":  "04/06/2026",
        "expiryDate":  "24/05/2028",
        "amount":  "25.528,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840178",
        "riskName":  "BMW X1",
        "contractDate":  "09/06/2026",
        "expiryDate":  "31/05/2028",
        "amount":  "25.666,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840179",
        "riskName":  "Audi A3",
        "contractDate":  "14/06/2026",
        "expiryDate":  "07/06/2028",
        "amount":  "25.803,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840180",
        "riskName":  "Tesla Model 3",
        "contractDate":  "19/06/2026",
        "expiryDate":  "14/06/2028",
        "amount":  "25.941,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840181",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "24/06/2026",
        "expiryDate":  "21/06/2028",
        "amount":  "26.078,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840182",
        "riskName":  "Seat Leon",
        "contractDate":  "29/06/2026",
        "expiryDate":  "28/06/2028",
        "amount":  "26.215,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840183",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "04/07/2026",
        "expiryDate":  "05/07/2028",
        "amount":  "26.353,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840184",
        "riskName":  "Peugeot 3008",
        "contractDate":  "09/07/2026",
        "expiryDate":  "12/07/2028",
        "amount":  "26.490,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840185",
        "riskName":  "Kia Sportage",
        "contractDate":  "14/07/2026",
        "expiryDate":  "19/07/2028",
        "amount":  "26.628,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840186",
        "riskName":  "Toyota Corolla",
        "contractDate":  "19/07/2026",
        "expiryDate":  "26/07/2028",
        "amount":  "26.765,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840187",
        "riskName":  "Renault Clio",
        "contractDate":  "24/07/2026",
        "expiryDate":  "02/08/2028",
        "amount":  "26.903,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840188",
        "riskName":  "BMW X1",
        "contractDate":  "29/07/2026",
        "expiryDate":  "09/08/2028",
        "amount":  "27.040,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840189",
        "riskName":  "Audi A3",
        "contractDate":  "03/08/2026",
        "expiryDate":  "16/08/2028",
        "amount":  "27.178,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840190",
        "riskName":  "Tesla Model 3",
        "contractDate":  "08/08/2026",
        "expiryDate":  "23/08/2028",
        "amount":  "27.315,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840191",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "13/08/2026",
        "expiryDate":  "30/08/2028",
        "amount":  "27.452,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840192",
        "riskName":  "Seat Leon",
        "contractDate":  "18/08/2026",
        "expiryDate":  "06/09/2028",
        "amount":  "27.590,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840193",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "23/08/2026",
        "expiryDate":  "13/09/2028",
        "amount":  "27.727,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840194",
        "riskName":  "Peugeot 3008",
        "contractDate":  "28/08/2026",
        "expiryDate":  "20/09/2028",
        "amount":  "27.865,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840195",
        "riskName":  "Kia Sportage",
        "contractDate":  "02/09/2026",
        "expiryDate":  "27/09/2028",
        "amount":  "28.002,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840196",
        "riskName":  "Toyota Corolla",
        "contractDate":  "07/09/2026",
        "expiryDate":  "04/10/2028",
        "amount":  "28.140,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840197",
        "riskName":  "Renault Clio",
        "contractDate":  "12/09/2026",
        "expiryDate":  "11/10/2028",
        "amount":  "28.277,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840198",
        "riskName":  "BMW X1",
        "contractDate":  "17/09/2026",
        "expiryDate":  "18/10/2028",
        "amount":  "28.415,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840199",
        "riskName":  "Audi A3",
        "contractDate":  "22/09/2026",
        "expiryDate":  "25/10/2028",
        "amount":  "28.552,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840200",
        "riskName":  "Tesla Model 3",
        "contractDate":  "27/09/2026",
        "expiryDate":  "01/11/2028",
        "amount":  "28.690,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840201",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "02/10/2026",
        "expiryDate":  "08/11/2028",
        "amount":  "28.827,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840202",
        "riskName":  "Seat Leon",
        "contractDate":  "07/10/2026",
        "expiryDate":  "15/11/2028",
        "amount":  "28.964,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840203",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "12/10/2026",
        "expiryDate":  "22/11/2028",
        "amount":  "29.102,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840204",
        "riskName":  "Peugeot 3008",
        "contractDate":  "17/10/2026",
        "expiryDate":  "29/11/2028",
        "amount":  "29.239,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840205",
        "riskName":  "Kia Sportage",
        "contractDate":  "22/10/2026",
        "expiryDate":  "06/12/2028",
        "amount":  "29.377,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840206",
        "riskName":  "Toyota Corolla",
        "contractDate":  "27/10/2026",
        "expiryDate":  "13/12/2028",
        "amount":  "29.514,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840207",
        "riskName":  "Renault Clio",
        "contractDate":  "01/11/2026",
        "expiryDate":  "20/12/2028",
        "amount":  "29.652,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840208",
        "riskName":  "BMW X1",
        "contractDate":  "06/11/2026",
        "expiryDate":  "27/12/2028",
        "amount":  "29.789,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840209",
        "riskName":  "Audi A3",
        "contractDate":  "11/11/2026",
        "expiryDate":  "03/01/2029",
        "amount":  "29.927,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840210",
        "riskName":  "Tesla Model 3",
        "contractDate":  "16/11/2026",
        "expiryDate":  "10/01/2029",
        "amount":  "30.064,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840211",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "21/11/2026",
        "expiryDate":  "17/01/2029",
        "amount":  "30.201,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840212",
        "riskName":  "Seat Leon",
        "contractDate":  "26/11/2026",
        "expiryDate":  "24/01/2029",
        "amount":  "30.339,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840213",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "01/12/2026",
        "expiryDate":  "31/01/2029",
        "amount":  "30.476,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840214",
        "riskName":  "Peugeot 3008",
        "contractDate":  "06/12/2026",
        "expiryDate":  "07/02/2029",
        "amount":  "30.614,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840215",
        "riskName":  "Kia Sportage",
        "contractDate":  "11/12/2026",
        "expiryDate":  "14/02/2029",
        "amount":  "30.751,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840216",
        "riskName":  "Toyota Corolla",
        "contractDate":  "16/12/2026",
        "expiryDate":  "21/02/2029",
        "amount":  "30.889,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840217",
        "riskName":  "Renault Clio",
        "contractDate":  "21/12/2026",
        "expiryDate":  "28/02/2029",
        "amount":  "31.026,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840218",
        "riskName":  "BMW X1",
        "contractDate":  "26/12/2026",
        "expiryDate":  "07/03/2029",
        "amount":  "31.164,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840219",
        "riskName":  "Audi A3",
        "contractDate":  "31/12/2026",
        "expiryDate":  "14/03/2029",
        "amount":  "31.301,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840220",
        "riskName":  "Tesla Model 3",
        "contractDate":  "05/01/2027",
        "expiryDate":  "21/03/2029",
        "amount":  "31.439,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840221",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "10/01/2027",
        "expiryDate":  "28/03/2029",
        "amount":  "31.576,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840222",
        "riskName":  "Seat Leon",
        "contractDate":  "15/01/2027",
        "expiryDate":  "04/04/2029",
        "amount":  "31.713,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840223",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "20/01/2027",
        "expiryDate":  "11/04/2029",
        "amount":  "31.851,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840224",
        "riskName":  "Peugeot 3008",
        "contractDate":  "25/01/2027",
        "expiryDate":  "18/04/2029",
        "amount":  "31.988,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840225",
        "riskName":  "Kia Sportage",
        "contractDate":  "30/01/2027",
        "expiryDate":  "25/04/2029",
        "amount":  "32.126,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840226",
        "riskName":  "Toyota Corolla",
        "contractDate":  "04/02/2027",
        "expiryDate":  "02/05/2029",
        "amount":  "32.263,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840227",
        "riskName":  "Renault Clio",
        "contractDate":  "09/02/2027",
        "expiryDate":  "09/05/2029",
        "amount":  "32.401,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840228",
        "riskName":  "BMW X1",
        "contractDate":  "14/02/2027",
        "expiryDate":  "16/05/2029",
        "amount":  "32.538,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840229",
        "riskName":  "Audi A3",
        "contractDate":  "19/02/2027",
        "expiryDate":  "23/05/2029",
        "amount":  "32.676,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840230",
        "riskName":  "Tesla Model 3",
        "contractDate":  "24/02/2027",
        "expiryDate":  "30/05/2029",
        "amount":  "32.813,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840231",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "01/03/2027",
        "expiryDate":  "06/06/2029",
        "amount":  "32.950,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840232",
        "riskName":  "Seat Leon",
        "contractDate":  "06/03/2027",
        "expiryDate":  "13/06/2029",
        "amount":  "33.088,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840233",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "11/03/2027",
        "expiryDate":  "20/06/2029",
        "amount":  "33.225,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840234",
        "riskName":  "Peugeot 3008",
        "contractDate":  "16/03/2027",
        "expiryDate":  "27/06/2029",
        "amount":  "33.363,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840235",
        "riskName":  "Kia Sportage",
        "contractDate":  "21/03/2027",
        "expiryDate":  "04/07/2029",
        "amount":  "33.500,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840236",
        "riskName":  "Toyota Corolla",
        "contractDate":  "26/03/2027",
        "expiryDate":  "11/07/2029",
        "amount":  "33.638,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840237",
        "riskName":  "Renault Clio",
        "contractDate":  "31/03/2027",
        "expiryDate":  "18/07/2029",
        "amount":  "33.775,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840238",
        "riskName":  "BMW X1",
        "contractDate":  "05/04/2027",
        "expiryDate":  "25/07/2029",
        "amount":  "33.913,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840239",
        "riskName":  "Audi A3",
        "contractDate":  "10/04/2027",
        "expiryDate":  "01/08/2029",
        "amount":  "34.050,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840240",
        "riskName":  "Tesla Model 3",
        "contractDate":  "15/04/2027",
        "expiryDate":  "08/08/2029",
        "amount":  "34.188,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840241",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "20/04/2027",
        "expiryDate":  "15/08/2029",
        "amount":  "34.325,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840242",
        "riskName":  "Seat Leon",
        "contractDate":  "25/04/2027",
        "expiryDate":  "22/08/2029",
        "amount":  "34.462,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840243",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "30/04/2027",
        "expiryDate":  "29/08/2029",
        "amount":  "34.600,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840244",
        "riskName":  "Peugeot 3008",
        "contractDate":  "05/05/2027",
        "expiryDate":  "05/09/2029",
        "amount":  "34.737,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840245",
        "riskName":  "Kia Sportage",
        "contractDate":  "10/05/2027",
        "expiryDate":  "12/09/2029",
        "amount":  "34.875,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840246",
        "riskName":  "Toyota Corolla",
        "contractDate":  "15/05/2027",
        "expiryDate":  "19/09/2029",
        "amount":  "35.012,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840247",
        "riskName":  "Renault Clio",
        "contractDate":  "20/05/2027",
        "expiryDate":  "26/09/2029",
        "amount":  "35.150,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840248",
        "riskName":  "BMW X1",
        "contractDate":  "25/05/2027",
        "expiryDate":  "03/10/2029",
        "amount":  "35.287,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840249",
        "riskName":  "Audi A3",
        "contractDate":  "30/05/2027",
        "expiryDate":  "10/10/2029",
        "amount":  "35.425,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840250",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/06/2027",
        "expiryDate":  "17/10/2029",
        "amount":  "35.562,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840251",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/06/2027",
        "expiryDate":  "24/10/2029",
        "amount":  "35.699,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840252",
        "riskName":  "Seat Leon",
        "contractDate":  "14/06/2027",
        "expiryDate":  "31/10/2029",
        "amount":  "35.837,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840253",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/06/2027",
        "expiryDate":  "07/11/2029",
        "amount":  "35.974,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840254",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/06/2027",
        "expiryDate":  "14/11/2029",
        "amount":  "36.112,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840255",
        "riskName":  "Kia Sportage",
        "contractDate":  "29/06/2027",
        "expiryDate":  "21/11/2029",
        "amount":  "36.249,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840256",
        "riskName":  "Toyota Corolla",
        "contractDate":  "04/07/2027",
        "expiryDate":  "28/11/2029",
        "amount":  "36.387,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840257",
        "riskName":  "Renault Clio",
        "contractDate":  "09/07/2027",
        "expiryDate":  "05/12/2029",
        "amount":  "36.524,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840258",
        "riskName":  "BMW X1",
        "contractDate":  "14/07/2027",
        "expiryDate":  "12/12/2029",
        "amount":  "36.662,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840259",
        "riskName":  "Audi A3",
        "contractDate":  "19/07/2027",
        "expiryDate":  "19/12/2029",
        "amount":  "36.799,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840260",
        "riskName":  "Tesla Model 3",
        "contractDate":  "24/07/2027",
        "expiryDate":  "26/12/2029",
        "amount":  "36.937,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840261",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "29/07/2027",
        "expiryDate":  "02/01/2030",
        "amount":  "37.074,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840262",
        "riskName":  "Seat Leon",
        "contractDate":  "03/08/2027",
        "expiryDate":  "09/01/2030",
        "amount":  "37.211,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840263",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "08/08/2027",
        "expiryDate":  "16/01/2030",
        "amount":  "37.349,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840264",
        "riskName":  "Peugeot 3008",
        "contractDate":  "13/08/2027",
        "expiryDate":  "23/01/2030",
        "amount":  "37.486,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840265",
        "riskName":  "Kia Sportage",
        "contractDate":  "18/08/2027",
        "expiryDate":  "30/01/2030",
        "amount":  "37.624,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840266",
        "riskName":  "Toyota Corolla",
        "contractDate":  "23/08/2027",
        "expiryDate":  "06/02/2030",
        "amount":  "37.761,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840267",
        "riskName":  "Renault Clio",
        "contractDate":  "28/08/2027",
        "expiryDate":  "13/02/2030",
        "amount":  "37.899,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840268",
        "riskName":  "BMW X1",
        "contractDate":  "02/09/2027",
        "expiryDate":  "20/02/2030",
        "amount":  "38.036,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840269",
        "riskName":  "Audi A3",
        "contractDate":  "07/09/2027",
        "expiryDate":  "27/02/2030",
        "amount":  "38.174,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840270",
        "riskName":  "Tesla Model 3",
        "contractDate":  "12/09/2027",
        "expiryDate":  "06/03/2030",
        "amount":  "38.311,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840271",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "17/09/2027",
        "expiryDate":  "13/03/2030",
        "amount":  "38.448,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840272",
        "riskName":  "Seat Leon",
        "contractDate":  "22/09/2027",
        "expiryDate":  "20/03/2030",
        "amount":  "38.586,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840273",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "27/09/2027",
        "expiryDate":  "27/03/2030",
        "amount":  "38.723,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840274",
        "riskName":  "Peugeot 3008",
        "contractDate":  "02/10/2027",
        "expiryDate":  "03/04/2030",
        "amount":  "38.861,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840275",
        "riskName":  "Kia Sportage",
        "contractDate":  "07/10/2027",
        "expiryDate":  "10/04/2030",
        "amount":  "38.998,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840276",
        "riskName":  "Toyota Corolla",
        "contractDate":  "12/10/2027",
        "expiryDate":  "17/04/2030",
        "amount":  "39.136,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840277",
        "riskName":  "Renault Clio",
        "contractDate":  "17/10/2027",
        "expiryDate":  "24/04/2030",
        "amount":  "39.273,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840278",
        "riskName":  "BMW X1",
        "contractDate":  "22/10/2027",
        "expiryDate":  "01/05/2030",
        "amount":  "39.411,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840279",
        "riskName":  "Audi A3",
        "contractDate":  "27/10/2027",
        "expiryDate":  "08/05/2030",
        "amount":  "39.548,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840280",
        "riskName":  "Tesla Model 3",
        "contractDate":  "01/11/2027",
        "expiryDate":  "15/05/2030",
        "amount":  "39.686,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840281",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/11/2027",
        "expiryDate":  "22/05/2030",
        "amount":  "39.823,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840282",
        "riskName":  "Seat Leon",
        "contractDate":  "11/11/2027",
        "expiryDate":  "29/05/2030",
        "amount":  "39.960,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840283",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/11/2027",
        "expiryDate":  "05/06/2030",
        "amount":  "40.098,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840284",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/11/2027",
        "expiryDate":  "12/06/2030",
        "amount":  "40.235,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840285",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/11/2027",
        "expiryDate":  "19/06/2030",
        "amount":  "40.373,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840286",
        "riskName":  "Toyota Corolla",
        "contractDate":  "01/12/2027",
        "expiryDate":  "26/06/2030",
        "amount":  "40.510,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840287",
        "riskName":  "Renault Clio",
        "contractDate":  "06/12/2027",
        "expiryDate":  "03/07/2030",
        "amount":  "40.648,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840288",
        "riskName":  "BMW X1",
        "contractDate":  "11/12/2027",
        "expiryDate":  "10/07/2030",
        "amount":  "40.785,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840289",
        "riskName":  "Audi A3",
        "contractDate":  "16/12/2027",
        "expiryDate":  "17/07/2030",
        "amount":  "40.923,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840290",
        "riskName":  "Tesla Model 3",
        "contractDate":  "21/12/2027",
        "expiryDate":  "24/07/2030",
        "amount":  "41.060,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840291",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "26/12/2027",
        "expiryDate":  "31/07/2030",
        "amount":  "41.197,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840292",
        "riskName":  "Seat Leon",
        "contractDate":  "31/12/2027",
        "expiryDate":  "07/08/2030",
        "amount":  "41.335,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840293",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "05/01/2028",
        "expiryDate":  "14/08/2030",
        "amount":  "41.472,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840294",
        "riskName":  "Peugeot 3008",
        "contractDate":  "10/01/2028",
        "expiryDate":  "21/08/2030",
        "amount":  "41.610,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840295",
        "riskName":  "Kia Sportage",
        "contractDate":  "15/01/2028",
        "expiryDate":  "28/08/2030",
        "amount":  "41.747,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840296",
        "riskName":  "Toyota Corolla",
        "contractDate":  "20/01/2028",
        "expiryDate":  "04/09/2030",
        "amount":  "41.885,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840297",
        "riskName":  "Renault Clio",
        "contractDate":  "25/01/2028",
        "expiryDate":  "11/09/2030",
        "amount":  "42.022,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840298",
        "riskName":  "BMW X1",
        "contractDate":  "30/01/2028",
        "expiryDate":  "18/09/2030",
        "amount":  "42.160,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840299",
        "riskName":  "Audi A3",
        "contractDate":  "04/02/2028",
        "expiryDate":  "25/09/2030",
        "amount":  "42.297,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840300",
        "riskName":  "Tesla Model 3",
        "contractDate":  "09/02/2028",
        "expiryDate":  "02/10/2030",
        "amount":  "42.435,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840301",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "14/02/2028",
        "expiryDate":  "09/10/2030",
        "amount":  "42.572,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840302",
        "riskName":  "Seat Leon",
        "contractDate":  "19/02/2028",
        "expiryDate":  "16/10/2030",
        "amount":  "42.709,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840303",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "24/02/2028",
        "expiryDate":  "23/10/2030",
        "amount":  "42.847,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840304",
        "riskName":  "Peugeot 3008",
        "contractDate":  "29/02/2028",
        "expiryDate":  "30/10/2030",
        "amount":  "42.984,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840305",
        "riskName":  "Kia Sportage",
        "contractDate":  "05/03/2028",
        "expiryDate":  "06/11/2030",
        "amount":  "43.122,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840306",
        "riskName":  "Toyota Corolla",
        "contractDate":  "10/03/2028",
        "expiryDate":  "13/11/2030",
        "amount":  "43.259,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840307",
        "riskName":  "Renault Clio",
        "contractDate":  "15/03/2028",
        "expiryDate":  "20/11/2030",
        "amount":  "43.397,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840308",
        "riskName":  "BMW X1",
        "contractDate":  "20/03/2028",
        "expiryDate":  "27/11/2030",
        "amount":  "43.534,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840309",
        "riskName":  "Audi A3",
        "contractDate":  "25/03/2028",
        "expiryDate":  "04/12/2030",
        "amount":  "43.672,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840310",
        "riskName":  "Tesla Model 3",
        "contractDate":  "30/03/2028",
        "expiryDate":  "11/12/2030",
        "amount":  "43.809,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840311",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "04/04/2028",
        "expiryDate":  "18/12/2030",
        "amount":  "43.946,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840312",
        "riskName":  "Seat Leon",
        "contractDate":  "09/04/2028",
        "expiryDate":  "25/12/2030",
        "amount":  "44.084,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840313",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "14/04/2028",
        "expiryDate":  "01/01/2031",
        "amount":  "44.221,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840314",
        "riskName":  "Peugeot 3008",
        "contractDate":  "19/04/2028",
        "expiryDate":  "08/01/2031",
        "amount":  "44.359,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840315",
        "riskName":  "Kia Sportage",
        "contractDate":  "24/04/2028",
        "expiryDate":  "15/01/2031",
        "amount":  "44.496,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840316",
        "riskName":  "Toyota Corolla",
        "contractDate":  "29/04/2028",
        "expiryDate":  "22/01/2031",
        "amount":  "44.634,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840317",
        "riskName":  "Renault Clio",
        "contractDate":  "04/05/2028",
        "expiryDate":  "29/01/2031",
        "amount":  "44.771,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840318",
        "riskName":  "BMW X1",
        "contractDate":  "09/05/2028",
        "expiryDate":  "05/02/2031",
        "amount":  "44.909,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840319",
        "riskName":  "Audi A3",
        "contractDate":  "14/05/2028",
        "expiryDate":  "12/02/2031",
        "amount":  "45.046,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840320",
        "riskName":  "Tesla Model 3",
        "contractDate":  "19/05/2028",
        "expiryDate":  "19/02/2031",
        "amount":  "45.184,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840321",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "24/05/2028",
        "expiryDate":  "26/02/2031",
        "amount":  "45.321,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840322",
        "riskName":  "Seat Leon",
        "contractDate":  "29/05/2028",
        "expiryDate":  "05/03/2031",
        "amount":  "45.458,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840323",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "03/06/2028",
        "expiryDate":  "12/03/2031",
        "amount":  "45.596,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840324",
        "riskName":  "Peugeot 3008",
        "contractDate":  "08/06/2028",
        "expiryDate":  "19/03/2031",
        "amount":  "45.733,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840325",
        "riskName":  "Kia Sportage",
        "contractDate":  "13/06/2028",
        "expiryDate":  "26/03/2031",
        "amount":  "45.871,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840326",
        "riskName":  "Toyota Corolla",
        "contractDate":  "18/06/2028",
        "expiryDate":  "02/04/2031",
        "amount":  "46.008,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840327",
        "riskName":  "Renault Clio",
        "contractDate":  "23/06/2028",
        "expiryDate":  "09/04/2031",
        "amount":  "46.146,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840328",
        "riskName":  "BMW X1",
        "contractDate":  "28/06/2028",
        "expiryDate":  "16/04/2031",
        "amount":  "46.283,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840329",
        "riskName":  "Audi A3",
        "contractDate":  "03/07/2028",
        "expiryDate":  "23/04/2031",
        "amount":  "46.421,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840330",
        "riskName":  "Tesla Model 3",
        "contractDate":  "08/07/2028",
        "expiryDate":  "30/04/2031",
        "amount":  "46.558,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840331",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "13/07/2028",
        "expiryDate":  "07/05/2031",
        "amount":  "46.695,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840332",
        "riskName":  "Seat Leon",
        "contractDate":  "18/07/2028",
        "expiryDate":  "14/05/2031",
        "amount":  "46.833,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840333",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "23/07/2028",
        "expiryDate":  "21/05/2031",
        "amount":  "46.970,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840334",
        "riskName":  "Peugeot 3008",
        "contractDate":  "28/07/2028",
        "expiryDate":  "28/05/2031",
        "amount":  "47.108,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840335",
        "riskName":  "Kia Sportage",
        "contractDate":  "02/08/2028",
        "expiryDate":  "04/06/2031",
        "amount":  "47.245,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840336",
        "riskName":  "Toyota Corolla",
        "contractDate":  "07/08/2028",
        "expiryDate":  "11/06/2031",
        "amount":  "47.383,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840337",
        "riskName":  "Renault Clio",
        "contractDate":  "12/08/2028",
        "expiryDate":  "18/06/2031",
        "amount":  "47.520,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840338",
        "riskName":  "BMW X1",
        "contractDate":  "17/08/2028",
        "expiryDate":  "25/06/2031",
        "amount":  "47.658,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840339",
        "riskName":  "Audi A3",
        "contractDate":  "22/08/2028",
        "expiryDate":  "02/07/2031",
        "amount":  "47.795,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840340",
        "riskName":  "Tesla Model 3",
        "contractDate":  "27/08/2028",
        "expiryDate":  "09/07/2031",
        "amount":  "47.933,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840341",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "01/09/2028",
        "expiryDate":  "16/07/2031",
        "amount":  "48.070,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840342",
        "riskName":  "Seat Leon",
        "contractDate":  "06/09/2028",
        "expiryDate":  "23/07/2031",
        "amount":  "48.207,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840343",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "11/09/2028",
        "expiryDate":  "30/07/2031",
        "amount":  "48.345,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840344",
        "riskName":  "Peugeot 3008",
        "contractDate":  "16/09/2028",
        "expiryDate":  "06/08/2031",
        "amount":  "48.482,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840345",
        "riskName":  "Kia Sportage",
        "contractDate":  "21/09/2028",
        "expiryDate":  "13/08/2031",
        "amount":  "48.620,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840346",
        "riskName":  "Toyota Corolla",
        "contractDate":  "26/09/2028",
        "expiryDate":  "20/08/2031",
        "amount":  "48.757,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840347",
        "riskName":  "Renault Clio",
        "contractDate":  "01/10/2028",
        "expiryDate":  "27/08/2031",
        "amount":  "48.895,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840348",
        "riskName":  "BMW X1",
        "contractDate":  "06/10/2028",
        "expiryDate":  "03/09/2031",
        "amount":  "49.032,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840349",
        "riskName":  "Audi A3",
        "contractDate":  "11/10/2028",
        "expiryDate":  "10/09/2031",
        "amount":  "49.170,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840350",
        "riskName":  "Tesla Model 3",
        "contractDate":  "16/10/2028",
        "expiryDate":  "17/09/2031",
        "amount":  "49.307,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840351",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "21/10/2028",
        "expiryDate":  "24/09/2031",
        "amount":  "49.444,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840352",
        "riskName":  "Seat Leon",
        "contractDate":  "26/10/2028",
        "expiryDate":  "01/10/2031",
        "amount":  "49.582,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840353",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "31/10/2028",
        "expiryDate":  "08/10/2031",
        "amount":  "49.719,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840354",
        "riskName":  "Peugeot 3008",
        "contractDate":  "05/11/2028",
        "expiryDate":  "15/10/2031",
        "amount":  "49.857,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840355",
        "riskName":  "Kia Sportage",
        "contractDate":  "10/11/2028",
        "expiryDate":  "22/10/2031",
        "amount":  "49.994,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840356",
        "riskName":  "Toyota Corolla",
        "contractDate":  "15/11/2028",
        "expiryDate":  "29/10/2031",
        "amount":  "50.132,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840357",
        "riskName":  "Renault Clio",
        "contractDate":  "20/11/2028",
        "expiryDate":  "05/11/2031",
        "amount":  "50.269,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840358",
        "riskName":  "BMW X1",
        "contractDate":  "25/11/2028",
        "expiryDate":  "12/11/2031",
        "amount":  "50.407,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840359",
        "riskName":  "Audi A3",
        "contractDate":  "30/11/2028",
        "expiryDate":  "19/11/2031",
        "amount":  "50.544,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840360",
        "riskName":  "Tesla Model 3",
        "contractDate":  "05/12/2028",
        "expiryDate":  "26/11/2031",
        "amount":  "50.682,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840361",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "10/12/2028",
        "expiryDate":  "03/12/2031",
        "amount":  "50.819,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840362",
        "riskName":  "Seat Leon",
        "contractDate":  "15/12/2028",
        "expiryDate":  "10/12/2031",
        "amount":  "50.956,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840363",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "20/12/2028",
        "expiryDate":  "17/12/2031",
        "amount":  "51.094,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840364",
        "riskName":  "Peugeot 3008",
        "contractDate":  "25/12/2028",
        "expiryDate":  "24/12/2031",
        "amount":  "51.231,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840365",
        "riskName":  "Kia Sportage",
        "contractDate":  "30/12/2028",
        "expiryDate":  "31/12/2031",
        "amount":  "51.369,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840366",
        "riskName":  "Toyota Corolla",
        "contractDate":  "04/01/2029",
        "expiryDate":  "07/01/2032",
        "amount":  "51.506,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840367",
        "riskName":  "Renault Clio",
        "contractDate":  "09/01/2029",
        "expiryDate":  "14/01/2032",
        "amount":  "51.644,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840368",
        "riskName":  "BMW X1",
        "contractDate":  "14/01/2029",
        "expiryDate":  "21/01/2032",
        "amount":  "51.781,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840369",
        "riskName":  "Audi A3",
        "contractDate":  "19/01/2029",
        "expiryDate":  "28/01/2032",
        "amount":  "51.919,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840370",
        "riskName":  "Tesla Model 3",
        "contractDate":  "24/01/2029",
        "expiryDate":  "04/02/2032",
        "amount":  "52.056,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840371",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "29/01/2029",
        "expiryDate":  "11/02/2032",
        "amount":  "52.193,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840372",
        "riskName":  "Seat Leon",
        "contractDate":  "03/02/2029",
        "expiryDate":  "18/02/2032",
        "amount":  "52.331,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840373",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "08/02/2029",
        "expiryDate":  "25/02/2032",
        "amount":  "52.468,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840374",
        "riskName":  "Peugeot 3008",
        "contractDate":  "13/02/2029",
        "expiryDate":  "03/03/2032",
        "amount":  "52.606,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840375",
        "riskName":  "Kia Sportage",
        "contractDate":  "18/02/2029",
        "expiryDate":  "10/03/2032",
        "amount":  "52.743,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840376",
        "riskName":  "Toyota Corolla",
        "contractDate":  "23/02/2029",
        "expiryDate":  "17/03/2032",
        "amount":  "52.881,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840377",
        "riskName":  "Renault Clio",
        "contractDate":  "28/02/2029",
        "expiryDate":  "24/03/2032",
        "amount":  "53.018,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840378",
        "riskName":  "BMW X1",
        "contractDate":  "05/03/2029",
        "expiryDate":  "31/03/2032",
        "amount":  "53.156,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840379",
        "riskName":  "Audi A3",
        "contractDate":  "10/03/2029",
        "expiryDate":  "07/04/2032",
        "amount":  "53.293,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840380",
        "riskName":  "Tesla Model 3",
        "contractDate":  "15/03/2029",
        "expiryDate":  "14/04/2032",
        "amount":  "53.431,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840381",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "20/03/2029",
        "expiryDate":  "21/04/2032",
        "amount":  "53.568,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840382",
        "riskName":  "Seat Leon",
        "contractDate":  "25/03/2029",
        "expiryDate":  "28/04/2032",
        "amount":  "53.705,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840383",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "30/03/2029",
        "expiryDate":  "05/05/2032",
        "amount":  "53.843,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840384",
        "riskName":  "Peugeot 3008",
        "contractDate":  "04/04/2029",
        "expiryDate":  "12/05/2032",
        "amount":  "53.980,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840385",
        "riskName":  "Kia Sportage",
        "contractDate":  "09/04/2029",
        "expiryDate":  "19/05/2032",
        "amount":  "54.118,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840386",
        "riskName":  "Toyota Corolla",
        "contractDate":  "14/04/2029",
        "expiryDate":  "26/05/2032",
        "amount":  "54.255,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840387",
        "riskName":  "Renault Clio",
        "contractDate":  "19/04/2029",
        "expiryDate":  "02/06/2032",
        "amount":  "54.393,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840388",
        "riskName":  "BMW X1",
        "contractDate":  "24/04/2029",
        "expiryDate":  "09/06/2032",
        "amount":  "54.530,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840389",
        "riskName":  "Audi A3",
        "contractDate":  "29/04/2029",
        "expiryDate":  "16/06/2032",
        "amount":  "54.668,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840390",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/05/2029",
        "expiryDate":  "23/06/2032",
        "amount":  "54.805,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840391",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/05/2029",
        "expiryDate":  "30/06/2032",
        "amount":  "54.942,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840392",
        "riskName":  "Seat Leon",
        "contractDate":  "14/05/2029",
        "expiryDate":  "07/07/2032",
        "amount":  "55.080,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840393",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/05/2029",
        "expiryDate":  "14/07/2032",
        "amount":  "55.217,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840394",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/05/2029",
        "expiryDate":  "21/07/2032",
        "amount":  "55.355,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840395",
        "riskName":  "Kia Sportage",
        "contractDate":  "29/05/2029",
        "expiryDate":  "28/07/2032",
        "amount":  "55.492,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840396",
        "riskName":  "Toyota Corolla",
        "contractDate":  "03/06/2029",
        "expiryDate":  "04/08/2032",
        "amount":  "55.630,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840397",
        "riskName":  "Renault Clio",
        "contractDate":  "08/06/2029",
        "expiryDate":  "11/08/2032",
        "amount":  "55.767,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840398",
        "riskName":  "BMW X1",
        "contractDate":  "13/06/2029",
        "expiryDate":  "18/08/2032",
        "amount":  "55.905,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840399",
        "riskName":  "Audi A3",
        "contractDate":  "18/06/2029",
        "expiryDate":  "25/08/2032",
        "amount":  "56.042,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840400",
        "riskName":  "Tesla Model 3",
        "contractDate":  "23/06/2029",
        "expiryDate":  "01/09/2032",
        "amount":  "56.180,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840401",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "28/06/2029",
        "expiryDate":  "08/09/2032",
        "amount":  "56.317,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840402",
        "riskName":  "Seat Leon",
        "contractDate":  "03/07/2029",
        "expiryDate":  "15/09/2032",
        "amount":  "56.454,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840403",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "08/07/2029",
        "expiryDate":  "22/09/2032",
        "amount":  "56.592,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840404",
        "riskName":  "Peugeot 3008",
        "contractDate":  "13/07/2029",
        "expiryDate":  "29/09/2032",
        "amount":  "56.729,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840405",
        "riskName":  "Kia Sportage",
        "contractDate":  "18/07/2029",
        "expiryDate":  "06/10/2032",
        "amount":  "56.867,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840406",
        "riskName":  "Toyota Corolla",
        "contractDate":  "23/07/2029",
        "expiryDate":  "13/10/2032",
        "amount":  "57.004,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840407",
        "riskName":  "Renault Clio",
        "contractDate":  "28/07/2029",
        "expiryDate":  "20/10/2032",
        "amount":  "57.142,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840408",
        "riskName":  "BMW X1",
        "contractDate":  "02/08/2029",
        "expiryDate":  "27/10/2032",
        "amount":  "57.279,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840409",
        "riskName":  "Audi A3",
        "contractDate":  "07/08/2029",
        "expiryDate":  "03/11/2032",
        "amount":  "57.417,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840410",
        "riskName":  "Tesla Model 3",
        "contractDate":  "12/08/2029",
        "expiryDate":  "10/11/2032",
        "amount":  "57.554,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840411",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "17/08/2029",
        "expiryDate":  "17/11/2032",
        "amount":  "57.691,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840412",
        "riskName":  "Seat Leon",
        "contractDate":  "22/08/2029",
        "expiryDate":  "24/11/2032",
        "amount":  "57.829,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840413",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "27/08/2029",
        "expiryDate":  "01/12/2032",
        "amount":  "57.966,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840414",
        "riskName":  "Peugeot 3008",
        "contractDate":  "01/09/2029",
        "expiryDate":  "08/12/2032",
        "amount":  "58.104,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840415",
        "riskName":  "Kia Sportage",
        "contractDate":  "06/09/2029",
        "expiryDate":  "15/12/2032",
        "amount":  "58.241,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840416",
        "riskName":  "Toyota Corolla",
        "contractDate":  "11/09/2029",
        "expiryDate":  "22/12/2032",
        "amount":  "58.379,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840417",
        "riskName":  "Renault Clio",
        "contractDate":  "16/09/2029",
        "expiryDate":  "29/12/2032",
        "amount":  "58.516,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840418",
        "riskName":  "BMW X1",
        "contractDate":  "21/09/2029",
        "expiryDate":  "05/01/2033",
        "amount":  "58.654,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840419",
        "riskName":  "Audi A3",
        "contractDate":  "26/09/2029",
        "expiryDate":  "12/01/2033",
        "amount":  "58.791,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840420",
        "riskName":  "Tesla Model 3",
        "contractDate":  "01/10/2029",
        "expiryDate":  "19/01/2033",
        "amount":  "58.929,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840421",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/10/2029",
        "expiryDate":  "26/01/2033",
        "amount":  "59.066,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840422",
        "riskName":  "Seat Leon",
        "contractDate":  "11/10/2029",
        "expiryDate":  "02/02/2033",
        "amount":  "59.203,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840423",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/10/2029",
        "expiryDate":  "09/02/2033",
        "amount":  "59.341,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840424",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/10/2029",
        "expiryDate":  "16/02/2033",
        "amount":  "59.478,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840425",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/10/2029",
        "expiryDate":  "23/02/2033",
        "amount":  "59.616,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840426",
        "riskName":  "Toyota Corolla",
        "contractDate":  "31/10/2029",
        "expiryDate":  "02/03/2033",
        "amount":  "59.753,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840427",
        "riskName":  "Renault Clio",
        "contractDate":  "05/11/2029",
        "expiryDate":  "09/03/2033",
        "amount":  "59.891,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840428",
        "riskName":  "BMW X1",
        "contractDate":  "10/11/2029",
        "expiryDate":  "16/03/2033",
        "amount":  "60.028,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840429",
        "riskName":  "Audi A3",
        "contractDate":  "15/11/2029",
        "expiryDate":  "23/03/2033",
        "amount":  "60.166,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840430",
        "riskName":  "Tesla Model 3",
        "contractDate":  "20/11/2029",
        "expiryDate":  "30/03/2033",
        "amount":  "60.303,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840431",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "25/11/2029",
        "expiryDate":  "06/04/2033",
        "amount":  "60.440,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840432",
        "riskName":  "Seat Leon",
        "contractDate":  "30/11/2029",
        "expiryDate":  "13/04/2033",
        "amount":  "60.578,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840433",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "05/12/2029",
        "expiryDate":  "20/04/2033",
        "amount":  "60.715,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840434",
        "riskName":  "Peugeot 3008",
        "contractDate":  "10/12/2029",
        "expiryDate":  "27/04/2033",
        "amount":  "60.853,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840435",
        "riskName":  "Kia Sportage",
        "contractDate":  "15/12/2029",
        "expiryDate":  "04/05/2033",
        "amount":  "60.990,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840436",
        "riskName":  "Toyota Corolla",
        "contractDate":  "20/12/2029",
        "expiryDate":  "11/05/2033",
        "amount":  "61.128,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840437",
        "riskName":  "Renault Clio",
        "contractDate":  "25/12/2029",
        "expiryDate":  "18/05/2033",
        "amount":  "61.265,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840438",
        "riskName":  "BMW X1",
        "contractDate":  "30/12/2029",
        "expiryDate":  "25/05/2033",
        "amount":  "61.403,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840439",
        "riskName":  "Audi A3",
        "contractDate":  "04/01/2030",
        "expiryDate":  "01/06/2033",
        "amount":  "61.540,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840440",
        "riskName":  "Tesla Model 3",
        "contractDate":  "09/01/2030",
        "expiryDate":  "08/06/2033",
        "amount":  "61.678,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840441",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "14/01/2030",
        "expiryDate":  "15/06/2033",
        "amount":  "61.815,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840442",
        "riskName":  "Seat Leon",
        "contractDate":  "19/01/2030",
        "expiryDate":  "22/06/2033",
        "amount":  "61.952,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840443",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "24/01/2030",
        "expiryDate":  "29/06/2033",
        "amount":  "62.090,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840444",
        "riskName":  "Peugeot 3008",
        "contractDate":  "29/01/2030",
        "expiryDate":  "06/07/2033",
        "amount":  "62.227,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840445",
        "riskName":  "Kia Sportage",
        "contractDate":  "03/02/2030",
        "expiryDate":  "13/07/2033",
        "amount":  "62.365,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840446",
        "riskName":  "Toyota Corolla",
        "contractDate":  "08/02/2030",
        "expiryDate":  "20/07/2033",
        "amount":  "62.502,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840447",
        "riskName":  "Renault Clio",
        "contractDate":  "13/02/2030",
        "expiryDate":  "27/07/2033",
        "amount":  "62.640,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840448",
        "riskName":  "BMW X1",
        "contractDate":  "18/02/2030",
        "expiryDate":  "03/08/2033",
        "amount":  "62.777,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840449",
        "riskName":  "Audi A3",
        "contractDate":  "23/02/2030",
        "expiryDate":  "10/08/2033",
        "amount":  "62.915,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840450",
        "riskName":  "Tesla Model 3",
        "contractDate":  "28/02/2030",
        "expiryDate":  "17/08/2033",
        "amount":  "63.052,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840451",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "05/03/2030",
        "expiryDate":  "24/08/2033",
        "amount":  "63.189,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840452",
        "riskName":  "Seat Leon",
        "contractDate":  "10/03/2030",
        "expiryDate":  "31/08/2033",
        "amount":  "63.327,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840453",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "15/03/2030",
        "expiryDate":  "07/09/2033",
        "amount":  "63.464,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840454",
        "riskName":  "Peugeot 3008",
        "contractDate":  "20/03/2030",
        "expiryDate":  "14/09/2033",
        "amount":  "63.602,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840455",
        "riskName":  "Kia Sportage",
        "contractDate":  "25/03/2030",
        "expiryDate":  "21/09/2033",
        "amount":  "63.739,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840456",
        "riskName":  "Toyota Corolla",
        "contractDate":  "30/03/2030",
        "expiryDate":  "28/09/2033",
        "amount":  "63.877,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840457",
        "riskName":  "Renault Clio",
        "contractDate":  "04/04/2030",
        "expiryDate":  "05/10/2033",
        "amount":  "64.014,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840458",
        "riskName":  "BMW X1",
        "contractDate":  "09/04/2030",
        "expiryDate":  "12/10/2033",
        "amount":  "64.152,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840459",
        "riskName":  "Audi A3",
        "contractDate":  "14/04/2030",
        "expiryDate":  "19/10/2033",
        "amount":  "64.289,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840460",
        "riskName":  "Tesla Model 3",
        "contractDate":  "19/04/2030",
        "expiryDate":  "26/10/2033",
        "amount":  "64.427,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840461",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "24/04/2030",
        "expiryDate":  "02/11/2033",
        "amount":  "64.564,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840462",
        "riskName":  "Seat Leon",
        "contractDate":  "29/04/2030",
        "expiryDate":  "09/11/2033",
        "amount":  "64.701,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840463",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "04/05/2030",
        "expiryDate":  "16/11/2033",
        "amount":  "64.839,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840464",
        "riskName":  "Peugeot 3008",
        "contractDate":  "09/05/2030",
        "expiryDate":  "23/11/2033",
        "amount":  "64.976,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840465",
        "riskName":  "Kia Sportage",
        "contractDate":  "14/05/2030",
        "expiryDate":  "30/11/2033",
        "amount":  "65.114,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840466",
        "riskName":  "Toyota Corolla",
        "contractDate":  "19/05/2030",
        "expiryDate":  "07/12/2033",
        "amount":  "65.251,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840467",
        "riskName":  "Renault Clio",
        "contractDate":  "24/05/2030",
        "expiryDate":  "14/12/2033",
        "amount":  "65.389,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840468",
        "riskName":  "BMW X1",
        "contractDate":  "29/05/2030",
        "expiryDate":  "21/12/2033",
        "amount":  "65.526,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840469",
        "riskName":  "Audi A3",
        "contractDate":  "03/06/2030",
        "expiryDate":  "28/12/2033",
        "amount":  "65.664,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840470",
        "riskName":  "Tesla Model 3",
        "contractDate":  "08/06/2030",
        "expiryDate":  "04/01/2034",
        "amount":  "65.801,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840471",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "13/06/2030",
        "expiryDate":  "11/01/2034",
        "amount":  "65.938,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840472",
        "riskName":  "Seat Leon",
        "contractDate":  "18/06/2030",
        "expiryDate":  "18/01/2034",
        "amount":  "66.076,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840473",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "23/06/2030",
        "expiryDate":  "25/01/2034",
        "amount":  "66.213,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840474",
        "riskName":  "Peugeot 3008",
        "contractDate":  "28/06/2030",
        "expiryDate":  "01/02/2034",
        "amount":  "66.351,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840475",
        "riskName":  "Kia Sportage",
        "contractDate":  "03/07/2030",
        "expiryDate":  "08/02/2034",
        "amount":  "66.488,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840476",
        "riskName":  "Toyota Corolla",
        "contractDate":  "08/07/2030",
        "expiryDate":  "15/02/2034",
        "amount":  "66.626,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840477",
        "riskName":  "Renault Clio",
        "contractDate":  "13/07/2030",
        "expiryDate":  "22/02/2034",
        "amount":  "66.763,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840478",
        "riskName":  "BMW X1",
        "contractDate":  "18/07/2030",
        "expiryDate":  "01/03/2034",
        "amount":  "66.901,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840479",
        "riskName":  "Audi A3",
        "contractDate":  "23/07/2030",
        "expiryDate":  "08/03/2034",
        "amount":  "67.038,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840480",
        "riskName":  "Tesla Model 3",
        "contractDate":  "28/07/2030",
        "expiryDate":  "15/03/2034",
        "amount":  "67.176,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840481",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "02/08/2030",
        "expiryDate":  "22/03/2034",
        "amount":  "67.313,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840482",
        "riskName":  "Seat Leon",
        "contractDate":  "07/08/2030",
        "expiryDate":  "29/03/2034",
        "amount":  "67.450,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840483",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "12/08/2030",
        "expiryDate":  "05/04/2034",
        "amount":  "67.588,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840484",
        "riskName":  "Peugeot 3008",
        "contractDate":  "17/08/2030",
        "expiryDate":  "12/04/2034",
        "amount":  "67.725,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840485",
        "riskName":  "Kia Sportage",
        "contractDate":  "22/08/2030",
        "expiryDate":  "19/04/2034",
        "amount":  "67.863,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840486",
        "riskName":  "Toyota Corolla",
        "contractDate":  "27/08/2030",
        "expiryDate":  "26/04/2034",
        "amount":  "68.000,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840487",
        "riskName":  "Renault Clio",
        "contractDate":  "01/09/2030",
        "expiryDate":  "03/05/2034",
        "amount":  "68.138,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840488",
        "riskName":  "BMW X1",
        "contractDate":  "06/09/2030",
        "expiryDate":  "10/05/2034",
        "amount":  "68.275,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840489",
        "riskName":  "Audi A3",
        "contractDate":  "11/09/2030",
        "expiryDate":  "17/05/2034",
        "amount":  "68.413,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840490",
        "riskName":  "Tesla Model 3",
        "contractDate":  "16/09/2030",
        "expiryDate":  "24/05/2034",
        "amount":  "68.550,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840491",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "21/09/2030",
        "expiryDate":  "31/05/2034",
        "amount":  "68.687,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840492",
        "riskName":  "Seat Leon",
        "contractDate":  "26/09/2030",
        "expiryDate":  "07/06/2034",
        "amount":  "68.825,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840493",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "01/10/2030",
        "expiryDate":  "14/06/2034",
        "amount":  "68.962,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840494",
        "riskName":  "Peugeot 3008",
        "contractDate":  "06/10/2030",
        "expiryDate":  "21/06/2034",
        "amount":  "69.100,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840495",
        "riskName":  "Kia Sportage",
        "contractDate":  "11/10/2030",
        "expiryDate":  "28/06/2034",
        "amount":  "69.237,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840496",
        "riskName":  "Toyota Corolla",
        "contractDate":  "16/10/2030",
        "expiryDate":  "05/07/2034",
        "amount":  "69.375,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840497",
        "riskName":  "Renault Clio",
        "contractDate":  "21/10/2030",
        "expiryDate":  "12/07/2034",
        "amount":  "69.512,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840498",
        "riskName":  "BMW X1",
        "contractDate":  "26/10/2030",
        "expiryDate":  "19/07/2034",
        "amount":  "69.650,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840499",
        "riskName":  "Audi A3",
        "contractDate":  "31/10/2030",
        "expiryDate":  "26/07/2034",
        "amount":  "69.787,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840500",
        "riskName":  "Tesla Model 3",
        "contractDate":  "05/11/2030",
        "expiryDate":  "02/08/2034",
        "amount":  "69.925,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840501",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "10/11/2030",
        "expiryDate":  "09/08/2034",
        "amount":  "70.062,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840502",
        "riskName":  "Seat Leon",
        "contractDate":  "15/11/2030",
        "expiryDate":  "16/08/2034",
        "amount":  "70.199,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840503",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "20/11/2030",
        "expiryDate":  "23/08/2034",
        "amount":  "70.337,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840504",
        "riskName":  "Peugeot 3008",
        "contractDate":  "25/11/2030",
        "expiryDate":  "30/08/2034",
        "amount":  "70.474,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840505",
        "riskName":  "Kia Sportage",
        "contractDate":  "30/11/2030",
        "expiryDate":  "06/09/2034",
        "amount":  "70.612,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840506",
        "riskName":  "Toyota Corolla",
        "contractDate":  "05/12/2030",
        "expiryDate":  "13/09/2034",
        "amount":  "70.749,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840507",
        "riskName":  "Renault Clio",
        "contractDate":  "10/12/2030",
        "expiryDate":  "20/09/2034",
        "amount":  "70.887,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840508",
        "riskName":  "BMW X1",
        "contractDate":  "15/12/2030",
        "expiryDate":  "27/09/2034",
        "amount":  "71.024,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840509",
        "riskName":  "Audi A3",
        "contractDate":  "20/12/2030",
        "expiryDate":  "04/10/2034",
        "amount":  "71.162,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840510",
        "riskName":  "Tesla Model 3",
        "contractDate":  "25/12/2030",
        "expiryDate":  "11/10/2034",
        "amount":  "71.299,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840511",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "30/12/2030",
        "expiryDate":  "18/10/2034",
        "amount":  "71.436,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840512",
        "riskName":  "Seat Leon",
        "contractDate":  "04/01/2031",
        "expiryDate":  "25/10/2034",
        "amount":  "71.574,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840513",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "09/01/2031",
        "expiryDate":  "01/11/2034",
        "amount":  "71.711,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840514",
        "riskName":  "Peugeot 3008",
        "contractDate":  "14/01/2031",
        "expiryDate":  "08/11/2034",
        "amount":  "71.849,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840515",
        "riskName":  "Kia Sportage",
        "contractDate":  "19/01/2031",
        "expiryDate":  "15/11/2034",
        "amount":  "71.986,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840516",
        "riskName":  "Toyota Corolla",
        "contractDate":  "24/01/2031",
        "expiryDate":  "22/11/2034",
        "amount":  "72.124,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840517",
        "riskName":  "Renault Clio",
        "contractDate":  "29/01/2031",
        "expiryDate":  "29/11/2034",
        "amount":  "72.261,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840518",
        "riskName":  "BMW X1",
        "contractDate":  "03/02/2031",
        "expiryDate":  "06/12/2034",
        "amount":  "72.399,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840519",
        "riskName":  "Audi A3",
        "contractDate":  "08/02/2031",
        "expiryDate":  "13/12/2034",
        "amount":  "72.536,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840520",
        "riskName":  "Tesla Model 3",
        "contractDate":  "13/02/2031",
        "expiryDate":  "20/12/2034",
        "amount":  "72.674,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840521",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "18/02/2031",
        "expiryDate":  "27/12/2034",
        "amount":  "72.811,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840522",
        "riskName":  "Seat Leon",
        "contractDate":  "23/02/2031",
        "expiryDate":  "03/01/2035",
        "amount":  "72.948,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840523",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "28/02/2031",
        "expiryDate":  "10/01/2035",
        "amount":  "73.086,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840524",
        "riskName":  "Peugeot 3008",
        "contractDate":  "05/03/2031",
        "expiryDate":  "17/01/2035",
        "amount":  "73.223,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840525",
        "riskName":  "Kia Sportage",
        "contractDate":  "10/03/2031",
        "expiryDate":  "24/01/2035",
        "amount":  "73.361,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840526",
        "riskName":  "Toyota Corolla",
        "contractDate":  "15/03/2031",
        "expiryDate":  "31/01/2035",
        "amount":  "73.498,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840527",
        "riskName":  "Renault Clio",
        "contractDate":  "20/03/2031",
        "expiryDate":  "07/02/2035",
        "amount":  "73.636,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840528",
        "riskName":  "BMW X1",
        "contractDate":  "25/03/2031",
        "expiryDate":  "14/02/2035",
        "amount":  "73.773,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840529",
        "riskName":  "Audi A3",
        "contractDate":  "30/03/2031",
        "expiryDate":  "21/02/2035",
        "amount":  "73.911,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840530",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/04/2031",
        "expiryDate":  "28/02/2035",
        "amount":  "74.048,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840531",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/04/2031",
        "expiryDate":  "07/03/2035",
        "amount":  "74.185,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840532",
        "riskName":  "Seat Leon",
        "contractDate":  "14/04/2031",
        "expiryDate":  "14/03/2035",
        "amount":  "74.323,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840533",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/04/2031",
        "expiryDate":  "21/03/2035",
        "amount":  "74.460,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840534",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/04/2031",
        "expiryDate":  "28/03/2035",
        "amount":  "74.598,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840535",
        "riskName":  "Kia Sportage",
        "contractDate":  "29/04/2031",
        "expiryDate":  "04/04/2035",
        "amount":  "74.735,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840536",
        "riskName":  "Toyota Corolla",
        "contractDate":  "04/05/2031",
        "expiryDate":  "11/04/2035",
        "amount":  "74.873,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840537",
        "riskName":  "Renault Clio",
        "contractDate":  "09/05/2031",
        "expiryDate":  "18/04/2035",
        "amount":  "75.010,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840538",
        "riskName":  "BMW X1",
        "contractDate":  "14/05/2031",
        "expiryDate":  "25/04/2035",
        "amount":  "75.148,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840539",
        "riskName":  "Audi A3",
        "contractDate":  "19/05/2031",
        "expiryDate":  "02/05/2035",
        "amount":  "75.285,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840540",
        "riskName":  "Tesla Model 3",
        "contractDate":  "24/05/2031",
        "expiryDate":  "09/05/2035",
        "amount":  "75.423,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840541",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "29/05/2031",
        "expiryDate":  "16/05/2035",
        "amount":  "75.560,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840542",
        "riskName":  "Seat Leon",
        "contractDate":  "03/06/2031",
        "expiryDate":  "23/05/2035",
        "amount":  "75.697,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840543",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "08/06/2031",
        "expiryDate":  "30/05/2035",
        "amount":  "75.835,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840544",
        "riskName":  "Peugeot 3008",
        "contractDate":  "13/06/2031",
        "expiryDate":  "06/06/2035",
        "amount":  "75.972,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840545",
        "riskName":  "Kia Sportage",
        "contractDate":  "18/06/2031",
        "expiryDate":  "13/06/2035",
        "amount":  "76.110,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840546",
        "riskName":  "Toyota Corolla",
        "contractDate":  "23/06/2031",
        "expiryDate":  "20/06/2035",
        "amount":  "76.247,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840547",
        "riskName":  "Renault Clio",
        "contractDate":  "28/06/2031",
        "expiryDate":  "27/06/2035",
        "amount":  "76.385,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840548",
        "riskName":  "BMW X1",
        "contractDate":  "03/07/2031",
        "expiryDate":  "04/07/2035",
        "amount":  "76.522,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840549",
        "riskName":  "Audi A3",
        "contractDate":  "08/07/2031",
        "expiryDate":  "11/07/2035",
        "amount":  "76.660,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840550",
        "riskName":  "Tesla Model 3",
        "contractDate":  "13/07/2031",
        "expiryDate":  "18/07/2035",
        "amount":  "76.797,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840551",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "18/07/2031",
        "expiryDate":  "25/07/2035",
        "amount":  "76.934,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840552",
        "riskName":  "Seat Leon",
        "contractDate":  "23/07/2031",
        "expiryDate":  "01/08/2035",
        "amount":  "77.072,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840553",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "28/07/2031",
        "expiryDate":  "08/08/2035",
        "amount":  "77.209,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840554",
        "riskName":  "Peugeot 3008",
        "contractDate":  "02/08/2031",
        "expiryDate":  "15/08/2035",
        "amount":  "77.347,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840555",
        "riskName":  "Kia Sportage",
        "contractDate":  "07/08/2031",
        "expiryDate":  "22/08/2035",
        "amount":  "77.484,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840556",
        "riskName":  "Toyota Corolla",
        "contractDate":  "12/08/2031",
        "expiryDate":  "29/08/2035",
        "amount":  "77.622,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840557",
        "riskName":  "Renault Clio",
        "contractDate":  "17/08/2031",
        "expiryDate":  "05/09/2035",
        "amount":  "77.759,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840558",
        "riskName":  "BMW X1",
        "contractDate":  "22/08/2031",
        "expiryDate":  "12/09/2035",
        "amount":  "77.897,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840559",
        "riskName":  "Audi A3",
        "contractDate":  "27/08/2031",
        "expiryDate":  "19/09/2035",
        "amount":  "78.034,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840560",
        "riskName":  "Tesla Model 3",
        "contractDate":  "01/09/2031",
        "expiryDate":  "26/09/2035",
        "amount":  "78.172,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840561",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/09/2031",
        "expiryDate":  "03/10/2035",
        "amount":  "78.309,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840562",
        "riskName":  "Seat Leon",
        "contractDate":  "11/09/2031",
        "expiryDate":  "10/10/2035",
        "amount":  "78.446,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840563",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/09/2031",
        "expiryDate":  "17/10/2035",
        "amount":  "78.584,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840564",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/09/2031",
        "expiryDate":  "24/10/2035",
        "amount":  "78.721,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840565",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/09/2031",
        "expiryDate":  "31/10/2035",
        "amount":  "78.859,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840566",
        "riskName":  "Toyota Corolla",
        "contractDate":  "01/10/2031",
        "expiryDate":  "07/11/2035",
        "amount":  "78.996,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840567",
        "riskName":  "Renault Clio",
        "contractDate":  "06/10/2031",
        "expiryDate":  "14/11/2035",
        "amount":  "79.134,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840568",
        "riskName":  "BMW X1",
        "contractDate":  "11/10/2031",
        "expiryDate":  "21/11/2035",
        "amount":  "79.271,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840569",
        "riskName":  "Audi A3",
        "contractDate":  "16/10/2031",
        "expiryDate":  "28/11/2035",
        "amount":  "79.409,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840570",
        "riskName":  "Tesla Model 3",
        "contractDate":  "21/10/2031",
        "expiryDate":  "05/12/2035",
        "amount":  "79.546,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840571",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "26/10/2031",
        "expiryDate":  "12/12/2035",
        "amount":  "79.683,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840572",
        "riskName":  "Seat Leon",
        "contractDate":  "31/10/2031",
        "expiryDate":  "19/12/2035",
        "amount":  "79.821,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840573",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "05/11/2031",
        "expiryDate":  "26/12/2035",
        "amount":  "79.958,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840574",
        "riskName":  "Peugeot 3008",
        "contractDate":  "10/11/2031",
        "expiryDate":  "02/01/2036",
        "amount":  "80.096,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840575",
        "riskName":  "Kia Sportage",
        "contractDate":  "15/11/2031",
        "expiryDate":  "09/01/2036",
        "amount":  "80.233,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840576",
        "riskName":  "Toyota Corolla",
        "contractDate":  "20/11/2031",
        "expiryDate":  "16/01/2036",
        "amount":  "80.371,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840577",
        "riskName":  "Renault Clio",
        "contractDate":  "25/11/2031",
        "expiryDate":  "23/01/2036",
        "amount":  "80.508,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840578",
        "riskName":  "BMW X1",
        "contractDate":  "30/11/2031",
        "expiryDate":  "30/01/2036",
        "amount":  "80.646,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840579",
        "riskName":  "Audi A3",
        "contractDate":  "05/12/2031",
        "expiryDate":  "06/02/2036",
        "amount":  "80.783,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840580",
        "riskName":  "Tesla Model 3",
        "contractDate":  "10/12/2031",
        "expiryDate":  "13/02/2036",
        "amount":  "80.921,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840581",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "15/12/2031",
        "expiryDate":  "20/02/2036",
        "amount":  "81.058,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840582",
        "riskName":  "Seat Leon",
        "contractDate":  "20/12/2031",
        "expiryDate":  "27/02/2036",
        "amount":  "81.195,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840583",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "25/12/2031",
        "expiryDate":  "05/03/2036",
        "amount":  "81.333,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840584",
        "riskName":  "Peugeot 3008",
        "contractDate":  "30/12/2031",
        "expiryDate":  "12/03/2036",
        "amount":  "81.470,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840585",
        "riskName":  "Kia Sportage",
        "contractDate":  "04/01/2032",
        "expiryDate":  "19/03/2036",
        "amount":  "81.608,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840586",
        "riskName":  "Toyota Corolla",
        "contractDate":  "09/01/2032",
        "expiryDate":  "26/03/2036",
        "amount":  "81.745,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840587",
        "riskName":  "Renault Clio",
        "contractDate":  "14/01/2032",
        "expiryDate":  "02/04/2036",
        "amount":  "81.883,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840588",
        "riskName":  "BMW X1",
        "contractDate":  "19/01/2032",
        "expiryDate":  "09/04/2036",
        "amount":  "82.020,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840589",
        "riskName":  "Audi A3",
        "contractDate":  "24/01/2032",
        "expiryDate":  "16/04/2036",
        "amount":  "82.158,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840590",
        "riskName":  "Tesla Model 3",
        "contractDate":  "29/01/2032",
        "expiryDate":  "23/04/2036",
        "amount":  "82.295,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840591",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "03/02/2032",
        "expiryDate":  "30/04/2036",
        "amount":  "82.432,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840592",
        "riskName":  "Seat Leon",
        "contractDate":  "08/02/2032",
        "expiryDate":  "07/05/2036",
        "amount":  "82.570,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840593",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "13/02/2032",
        "expiryDate":  "14/05/2036",
        "amount":  "82.707,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840594",
        "riskName":  "Peugeot 3008",
        "contractDate":  "18/02/2032",
        "expiryDate":  "21/05/2036",
        "amount":  "82.845,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840595",
        "riskName":  "Kia Sportage",
        "contractDate":  "23/02/2032",
        "expiryDate":  "28/05/2036",
        "amount":  "82.982,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840596",
        "riskName":  "Toyota Corolla",
        "contractDate":  "28/02/2032",
        "expiryDate":  "04/06/2036",
        "amount":  "83.120,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840597",
        "riskName":  "Renault Clio",
        "contractDate":  "04/03/2032",
        "expiryDate":  "11/06/2036",
        "amount":  "83.257,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840598",
        "riskName":  "BMW X1",
        "contractDate":  "09/03/2032",
        "expiryDate":  "18/06/2036",
        "amount":  "83.395,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840599",
        "riskName":  "Audi A3",
        "contractDate":  "14/03/2032",
        "expiryDate":  "25/06/2036",
        "amount":  "83.532,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840600",
        "riskName":  "Tesla Model 3",
        "contractDate":  "19/03/2032",
        "expiryDate":  "02/07/2036",
        "amount":  "83.670,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840601",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "24/03/2032",
        "expiryDate":  "09/07/2036",
        "amount":  "83.807,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840602",
        "riskName":  "Seat Leon",
        "contractDate":  "29/03/2032",
        "expiryDate":  "16/07/2036",
        "amount":  "83.944,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840603",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "03/04/2032",
        "expiryDate":  "23/07/2036",
        "amount":  "84.082,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840604",
        "riskName":  "Peugeot 3008",
        "contractDate":  "08/04/2032",
        "expiryDate":  "30/07/2036",
        "amount":  "84.219,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840605",
        "riskName":  "Kia Sportage",
        "contractDate":  "13/04/2032",
        "expiryDate":  "06/08/2036",
        "amount":  "84.357,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840606",
        "riskName":  "Toyota Corolla",
        "contractDate":  "18/04/2032",
        "expiryDate":  "13/08/2036",
        "amount":  "84.494,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840607",
        "riskName":  "Renault Clio",
        "contractDate":  "23/04/2032",
        "expiryDate":  "20/08/2036",
        "amount":  "84.632,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840608",
        "riskName":  "BMW X1",
        "contractDate":  "28/04/2032",
        "expiryDate":  "27/08/2036",
        "amount":  "84.769,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840609",
        "riskName":  "Audi A3",
        "contractDate":  "03/05/2032",
        "expiryDate":  "03/09/2036",
        "amount":  "84.907,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840610",
        "riskName":  "Tesla Model 3",
        "contractDate":  "08/05/2032",
        "expiryDate":  "10/09/2036",
        "amount":  "85.044,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840611",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "13/05/2032",
        "expiryDate":  "17/09/2036",
        "amount":  "85.181,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840612",
        "riskName":  "Seat Leon",
        "contractDate":  "18/05/2032",
        "expiryDate":  "24/09/2036",
        "amount":  "85.319,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840613",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "23/05/2032",
        "expiryDate":  "01/10/2036",
        "amount":  "85.456,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840614",
        "riskName":  "Peugeot 3008",
        "contractDate":  "28/05/2032",
        "expiryDate":  "08/10/2036",
        "amount":  "85.594,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840615",
        "riskName":  "Kia Sportage",
        "contractDate":  "02/06/2032",
        "expiryDate":  "15/10/2036",
        "amount":  "85.731,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840616",
        "riskName":  "Toyota Corolla",
        "contractDate":  "07/06/2032",
        "expiryDate":  "22/10/2036",
        "amount":  "85.869,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840617",
        "riskName":  "Renault Clio",
        "contractDate":  "12/06/2032",
        "expiryDate":  "29/10/2036",
        "amount":  "86.006,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840618",
        "riskName":  "BMW X1",
        "contractDate":  "17/06/2032",
        "expiryDate":  "05/11/2036",
        "amount":  "86.144,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840619",
        "riskName":  "Audi A3",
        "contractDate":  "22/06/2032",
        "expiryDate":  "12/11/2036",
        "amount":  "86.281,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840620",
        "riskName":  "Tesla Model 3",
        "contractDate":  "27/06/2032",
        "expiryDate":  "19/11/2036",
        "amount":  "86.419,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840621",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "02/07/2032",
        "expiryDate":  "26/11/2036",
        "amount":  "86.556,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840622",
        "riskName":  "Seat Leon",
        "contractDate":  "07/07/2032",
        "expiryDate":  "03/12/2036",
        "amount":  "86.693,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840623",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "12/07/2032",
        "expiryDate":  "10/12/2036",
        "amount":  "86.831,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840624",
        "riskName":  "Peugeot 3008",
        "contractDate":  "17/07/2032",
        "expiryDate":  "17/12/2036",
        "amount":  "86.968,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840625",
        "riskName":  "Kia Sportage",
        "contractDate":  "22/07/2032",
        "expiryDate":  "24/12/2036",
        "amount":  "87.106,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840626",
        "riskName":  "Toyota Corolla",
        "contractDate":  "27/07/2032",
        "expiryDate":  "31/12/2036",
        "amount":  "87.243,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840627",
        "riskName":  "Renault Clio",
        "contractDate":  "01/08/2032",
        "expiryDate":  "07/01/2037",
        "amount":  "87.381,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840628",
        "riskName":  "BMW X1",
        "contractDate":  "06/08/2032",
        "expiryDate":  "14/01/2037",
        "amount":  "87.518,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840629",
        "riskName":  "Audi A3",
        "contractDate":  "11/08/2032",
        "expiryDate":  "21/01/2037",
        "amount":  "87.656,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840630",
        "riskName":  "Tesla Model 3",
        "contractDate":  "16/08/2032",
        "expiryDate":  "28/01/2037",
        "amount":  "87.793,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840631",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "21/08/2032",
        "expiryDate":  "04/02/2037",
        "amount":  "87.930,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840632",
        "riskName":  "Seat Leon",
        "contractDate":  "26/08/2032",
        "expiryDate":  "11/02/2037",
        "amount":  "88.068,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840633",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "31/08/2032",
        "expiryDate":  "18/02/2037",
        "amount":  "88.205,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840634",
        "riskName":  "Peugeot 3008",
        "contractDate":  "05/09/2032",
        "expiryDate":  "25/02/2037",
        "amount":  "88.343,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840635",
        "riskName":  "Kia Sportage",
        "contractDate":  "10/09/2032",
        "expiryDate":  "04/03/2037",
        "amount":  "88.480,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840636",
        "riskName":  "Toyota Corolla",
        "contractDate":  "15/09/2032",
        "expiryDate":  "11/03/2037",
        "amount":  "88.618,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840637",
        "riskName":  "Renault Clio",
        "contractDate":  "20/09/2032",
        "expiryDate":  "18/03/2037",
        "amount":  "88.755,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840638",
        "riskName":  "BMW X1",
        "contractDate":  "25/09/2032",
        "expiryDate":  "25/03/2037",
        "amount":  "88.893,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840639",
        "riskName":  "Audi A3",
        "contractDate":  "30/09/2032",
        "expiryDate":  "01/04/2037",
        "amount":  "89.030,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840640",
        "riskName":  "Tesla Model 3",
        "contractDate":  "05/10/2032",
        "expiryDate":  "08/04/2037",
        "amount":  "89.168,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840641",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "10/10/2032",
        "expiryDate":  "15/04/2037",
        "amount":  "89.305,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840642",
        "riskName":  "Seat Leon",
        "contractDate":  "15/10/2032",
        "expiryDate":  "22/04/2037",
        "amount":  "89.442,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840643",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "20/10/2032",
        "expiryDate":  "29/04/2037",
        "amount":  "89.580,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840644",
        "riskName":  "Peugeot 3008",
        "contractDate":  "25/10/2032",
        "expiryDate":  "06/05/2037",
        "amount":  "89.717,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840645",
        "riskName":  "Kia Sportage",
        "contractDate":  "30/10/2032",
        "expiryDate":  "13/05/2037",
        "amount":  "89.855,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840646",
        "riskName":  "Toyota Corolla",
        "contractDate":  "04/11/2032",
        "expiryDate":  "20/05/2037",
        "amount":  "89.992,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840647",
        "riskName":  "Renault Clio",
        "contractDate":  "09/11/2032",
        "expiryDate":  "27/05/2037",
        "amount":  "90.130,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840648",
        "riskName":  "BMW X1",
        "contractDate":  "14/11/2032",
        "expiryDate":  "03/06/2037",
        "amount":  "90.267,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840649",
        "riskName":  "Audi A3",
        "contractDate":  "19/11/2032",
        "expiryDate":  "10/06/2037",
        "amount":  "90.405,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840650",
        "riskName":  "Tesla Model 3",
        "contractDate":  "24/11/2032",
        "expiryDate":  "17/06/2037",
        "amount":  "90.542,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840651",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "29/11/2032",
        "expiryDate":  "24/06/2037",
        "amount":  "90.679,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840652",
        "riskName":  "Seat Leon",
        "contractDate":  "04/12/2032",
        "expiryDate":  "01/07/2037",
        "amount":  "90.817,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840653",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "09/12/2032",
        "expiryDate":  "08/07/2037",
        "amount":  "90.954,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840654",
        "riskName":  "Peugeot 3008",
        "contractDate":  "14/12/2032",
        "expiryDate":  "15/07/2037",
        "amount":  "91.092,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840655",
        "riskName":  "Kia Sportage",
        "contractDate":  "19/12/2032",
        "expiryDate":  "22/07/2037",
        "amount":  "91.229,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840656",
        "riskName":  "Toyota Corolla",
        "contractDate":  "24/12/2032",
        "expiryDate":  "29/07/2037",
        "amount":  "91.367,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840657",
        "riskName":  "Renault Clio",
        "contractDate":  "29/12/2032",
        "expiryDate":  "05/08/2037",
        "amount":  "91.504,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840658",
        "riskName":  "BMW X1",
        "contractDate":  "03/01/2033",
        "expiryDate":  "12/08/2037",
        "amount":  "91.642,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840659",
        "riskName":  "Audi A3",
        "contractDate":  "08/01/2033",
        "expiryDate":  "19/08/2037",
        "amount":  "91.779,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840660",
        "riskName":  "Tesla Model 3",
        "contractDate":  "13/01/2033",
        "expiryDate":  "26/08/2037",
        "amount":  "91.917,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840661",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "18/01/2033",
        "expiryDate":  "02/09/2037",
        "amount":  "92.054,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840662",
        "riskName":  "Seat Leon",
        "contractDate":  "23/01/2033",
        "expiryDate":  "09/09/2037",
        "amount":  "92.191,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840663",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "28/01/2033",
        "expiryDate":  "16/09/2037",
        "amount":  "92.329,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840664",
        "riskName":  "Peugeot 3008",
        "contractDate":  "02/02/2033",
        "expiryDate":  "23/09/2037",
        "amount":  "92.466,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840665",
        "riskName":  "Kia Sportage",
        "contractDate":  "07/02/2033",
        "expiryDate":  "30/09/2037",
        "amount":  "92.604,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840666",
        "riskName":  "Toyota Corolla",
        "contractDate":  "12/02/2033",
        "expiryDate":  "07/10/2037",
        "amount":  "92.741,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840667",
        "riskName":  "Renault Clio",
        "contractDate":  "17/02/2033",
        "expiryDate":  "14/10/2037",
        "amount":  "92.879,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840668",
        "riskName":  "BMW X1",
        "contractDate":  "22/02/2033",
        "expiryDate":  "21/10/2037",
        "amount":  "93.016,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840669",
        "riskName":  "Audi A3",
        "contractDate":  "27/02/2033",
        "expiryDate":  "28/10/2037",
        "amount":  "93.154,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840670",
        "riskName":  "Tesla Model 3",
        "contractDate":  "04/03/2033",
        "expiryDate":  "04/11/2037",
        "amount":  "93.291,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840671",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "09/03/2033",
        "expiryDate":  "11/11/2037",
        "amount":  "93.428,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840672",
        "riskName":  "Seat Leon",
        "contractDate":  "14/03/2033",
        "expiryDate":  "18/11/2037",
        "amount":  "93.566,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840673",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "19/03/2033",
        "expiryDate":  "25/11/2037",
        "amount":  "93.703,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840674",
        "riskName":  "Peugeot 3008",
        "contractDate":  "24/03/2033",
        "expiryDate":  "02/12/2037",
        "amount":  "93.841,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840675",
        "riskName":  "Kia Sportage",
        "contractDate":  "29/03/2033",
        "expiryDate":  "09/12/2037",
        "amount":  "93.978,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840676",
        "riskName":  "Toyota Corolla",
        "contractDate":  "03/04/2033",
        "expiryDate":  "16/12/2037",
        "amount":  "94.116,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840677",
        "riskName":  "Renault Clio",
        "contractDate":  "08/04/2033",
        "expiryDate":  "23/12/2037",
        "amount":  "94.253,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840678",
        "riskName":  "BMW X1",
        "contractDate":  "13/04/2033",
        "expiryDate":  "30/12/2037",
        "amount":  "94.391,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840679",
        "riskName":  "Audi A3",
        "contractDate":  "18/04/2033",
        "expiryDate":  "06/01/2038",
        "amount":  "94.528,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840680",
        "riskName":  "Tesla Model 3",
        "contractDate":  "23/04/2033",
        "expiryDate":  "13/01/2038",
        "amount":  "94.666,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840681",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "28/04/2033",
        "expiryDate":  "20/01/2038",
        "amount":  "94.803,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840682",
        "riskName":  "Seat Leon",
        "contractDate":  "03/05/2033",
        "expiryDate":  "27/01/2038",
        "amount":  "94.940,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840683",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "08/05/2033",
        "expiryDate":  "03/02/2038",
        "amount":  "95.078,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840684",
        "riskName":  "Peugeot 3008",
        "contractDate":  "13/05/2033",
        "expiryDate":  "10/02/2038",
        "amount":  "95.215,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840685",
        "riskName":  "Kia Sportage",
        "contractDate":  "18/05/2033",
        "expiryDate":  "17/02/2038",
        "amount":  "95.353,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840686",
        "riskName":  "Toyota Corolla",
        "contractDate":  "23/05/2033",
        "expiryDate":  "24/02/2038",
        "amount":  "95.490,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840687",
        "riskName":  "Renault Clio",
        "contractDate":  "28/05/2033",
        "expiryDate":  "03/03/2038",
        "amount":  "95.628,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840688",
        "riskName":  "BMW X1",
        "contractDate":  "02/06/2033",
        "expiryDate":  "10/03/2038",
        "amount":  "95.765,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840689",
        "riskName":  "Audi A3",
        "contractDate":  "07/06/2033",
        "expiryDate":  "17/03/2038",
        "amount":  "95.903,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840690",
        "riskName":  "Tesla Model 3",
        "contractDate":  "12/06/2033",
        "expiryDate":  "24/03/2038",
        "amount":  "96.040,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840691",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "17/06/2033",
        "expiryDate":  "31/03/2038",
        "amount":  "96.177,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840692",
        "riskName":  "Seat Leon",
        "contractDate":  "22/06/2033",
        "expiryDate":  "07/04/2038",
        "amount":  "96.315,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840693",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "27/06/2033",
        "expiryDate":  "14/04/2038",
        "amount":  "96.452,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840694",
        "riskName":  "Peugeot 3008",
        "contractDate":  "02/07/2033",
        "expiryDate":  "21/04/2038",
        "amount":  "96.590,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840695",
        "riskName":  "Kia Sportage",
        "contractDate":  "07/07/2033",
        "expiryDate":  "28/04/2038",
        "amount":  "96.727,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840696",
        "riskName":  "Toyota Corolla",
        "contractDate":  "12/07/2033",
        "expiryDate":  "05/05/2038",
        "amount":  "96.865,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840697",
        "riskName":  "Renault Clio",
        "contractDate":  "17/07/2033",
        "expiryDate":  "12/05/2038",
        "amount":  "97.002,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840698",
        "riskName":  "BMW X1",
        "contractDate":  "22/07/2033",
        "expiryDate":  "19/05/2038",
        "amount":  "97.140,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840699",
        "riskName":  "Audi A3",
        "contractDate":  "27/07/2033",
        "expiryDate":  "26/05/2038",
        "amount":  "97.277,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840700",
        "riskName":  "Tesla Model 3",
        "contractDate":  "01/08/2033",
        "expiryDate":  "02/06/2038",
        "amount":  "97.415,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840701",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "06/08/2033",
        "expiryDate":  "09/06/2038",
        "amount":  "97.552,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840702",
        "riskName":  "Seat Leon",
        "contractDate":  "11/08/2033",
        "expiryDate":  "16/06/2038",
        "amount":  "97.689,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840703",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "16/08/2033",
        "expiryDate":  "23/06/2038",
        "amount":  "97.827,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840704",
        "riskName":  "Peugeot 3008",
        "contractDate":  "21/08/2033",
        "expiryDate":  "30/06/2038",
        "amount":  "97.964,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840705",
        "riskName":  "Kia Sportage",
        "contractDate":  "26/08/2033",
        "expiryDate":  "07/07/2038",
        "amount":  "98.102,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840706",
        "riskName":  "Toyota Corolla",
        "contractDate":  "31/08/2033",
        "expiryDate":  "14/07/2038",
        "amount":  "98.239,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840707",
        "riskName":  "Renault Clio",
        "contractDate":  "05/09/2033",
        "expiryDate":  "21/07/2038",
        "amount":  "98.377,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840708",
        "riskName":  "BMW X1",
        "contractDate":  "10/09/2033",
        "expiryDate":  "28/07/2038",
        "amount":  "98.514,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840709",
        "riskName":  "Audi A3",
        "contractDate":  "15/09/2033",
        "expiryDate":  "04/08/2038",
        "amount":  "98.652,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840710",
        "riskName":  "Tesla Model 3",
        "contractDate":  "20/09/2033",
        "expiryDate":  "11/08/2038",
        "amount":  "98.789,50 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840711",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "25/09/2033",
        "expiryDate":  "18/08/2038",
        "amount":  "98.926,95 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840712",
        "riskName":  "Seat Leon",
        "contractDate":  "30/09/2033",
        "expiryDate":  "25/08/2038",
        "amount":  "99.064,40 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840713",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "05/10/2033",
        "expiryDate":  "01/09/2038",
        "amount":  "99.201,85 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840714",
        "riskName":  "Peugeot 3008",
        "contractDate":  "10/10/2033",
        "expiryDate":  "08/09/2038",
        "amount":  "99.339,30 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840715",
        "riskName":  "Kia Sportage",
        "contractDate":  "15/10/2033",
        "expiryDate":  "15/09/2038",
        "amount":  "99.476,75 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840716",
        "riskName":  "Toyota Corolla",
        "contractDate":  "20/10/2033",
        "expiryDate":  "22/09/2038",
        "amount":  "99.614,20 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840717",
        "riskName":  "Renault Clio",
        "contractDate":  "25/10/2033",
        "expiryDate":  "29/09/2038",
        "amount":  "99.751,65 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840718",
        "riskName":  "BMW X1",
        "contractDate":  "30/10/2033",
        "expiryDate":  "06/10/2038",
        "amount":  "99.889,10 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840719",
        "riskName":  "Audi A3",
        "contractDate":  "04/11/2033",
        "expiryDate":  "13/10/2038",
        "amount":  "100.026,55 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840720",
        "riskName":  "Tesla Model 3",
        "contractDate":  "09/11/2033",
        "expiryDate":  "20/10/2038",
        "amount":  "100.164,00 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840721",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "14/11/2033",
        "expiryDate":  "27/10/2038",
        "amount":  "100.301,45 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840722",
        "riskName":  "Seat Leon",
        "contractDate":  "19/11/2033",
        "expiryDate":  "03/11/2038",
        "amount":  "100.438,90 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840723",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "24/11/2033",
        "expiryDate":  "10/11/2038",
        "amount":  "100.576,35 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840724",
        "riskName":  "Peugeot 3008",
        "contractDate":  "29/11/2033",
        "expiryDate":  "17/11/2038",
        "amount":  "100.713,80 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840725",
        "riskName":  "Kia Sportage",
        "contractDate":  "04/12/2033",
        "expiryDate":  "24/11/2038",
        "amount":  "100.851,25 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840726",
        "riskName":  "Toyota Corolla",
        "contractDate":  "09/12/2033",
        "expiryDate":  "01/12/2038",
        "amount":  "100.988,70 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840727",
        "riskName":  "Renault Clio",
        "contractDate":  "14/12/2033",
        "expiryDate":  "08/12/2038",
        "amount":  "101.126,15 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840728",
        "riskName":  "BMW X1",
        "contractDate":  "19/12/2033",
        "expiryDate":  "15/12/2038",
        "amount":  "101.263,60 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840729",
        "riskName":  "Audi A3",
        "contractDate":  "24/12/2033",
        "expiryDate":  "22/12/2038",
        "amount":  "101.401,05 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840730",
        "riskName":  "Tesla Model 3",
        "contractDate":  "29/12/2033",
        "expiryDate":  "29/12/2038",
        "amount":  "101.538,50 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840731",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "03/01/2034",
        "expiryDate":  "05/01/2039",
        "amount":  "101.675,95 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840732",
        "riskName":  "Seat Leon",
        "contractDate":  "08/01/2034",
        "expiryDate":  "12/01/2039",
        "amount":  "101.813,40 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840733",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "13/01/2034",
        "expiryDate":  "19/01/2039",
        "amount":  "101.950,85 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840734",
        "riskName":  "Peugeot 3008",
        "contractDate":  "18/01/2034",
        "expiryDate":  "26/01/2039",
        "amount":  "102.088,30 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840735",
        "riskName":  "Kia Sportage",
        "contractDate":  "23/01/2034",
        "expiryDate":  "02/02/2039",
        "amount":  "102.225,75 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840736",
        "riskName":  "Toyota Corolla",
        "contractDate":  "28/01/2034",
        "expiryDate":  "09/02/2039",
        "amount":  "102.363,20 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840737",
        "riskName":  "Renault Clio",
        "contractDate":  "02/02/2034",
        "expiryDate":  "16/02/2039",
        "amount":  "102.500,65 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840738",
        "riskName":  "BMW X1",
        "contractDate":  "07/02/2034",
        "expiryDate":  "23/02/2039",
        "amount":  "102.638,10 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840739",
        "riskName":  "Audi A3",
        "contractDate":  "12/02/2034",
        "expiryDate":  "02/03/2039",
        "amount":  "102.775,55 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840740",
        "riskName":  "Tesla Model 3",
        "contractDate":  "17/02/2034",
        "expiryDate":  "09/03/2039",
        "amount":  "102.913,00 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840741",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "22/02/2034",
        "expiryDate":  "16/03/2039",
        "amount":  "103.050,45 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840742",
        "riskName":  "Seat Leon",
        "contractDate":  "27/02/2034",
        "expiryDate":  "23/03/2039",
        "amount":  "103.187,90 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840743",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "04/03/2034",
        "expiryDate":  "30/03/2039",
        "amount":  "103.325,35 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840744",
        "riskName":  "Peugeot 3008",
        "contractDate":  "09/03/2034",
        "expiryDate":  "06/04/2039",
        "amount":  "103.462,80 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840745",
        "riskName":  "Kia Sportage",
        "contractDate":  "14/03/2034",
        "expiryDate":  "13/04/2039",
        "amount":  "103.600,25 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840746",
        "riskName":  "Toyota Corolla",
        "contractDate":  "19/03/2034",
        "expiryDate":  "20/04/2039",
        "amount":  "103.737,70 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840747",
        "riskName":  "Renault Clio",
        "contractDate":  "24/03/2034",
        "expiryDate":  "27/04/2039",
        "amount":  "103.875,15 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840748",
        "riskName":  "BMW X1",
        "contractDate":  "29/03/2034",
        "expiryDate":  "04/05/2039",
        "amount":  "104.012,60 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840749",
        "riskName":  "Audi A3",
        "contractDate":  "03/04/2034",
        "expiryDate":  "11/05/2039",
        "amount":  "104.150,05 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840750",
        "riskName":  "Tesla Model 3",
        "contractDate":  "08/04/2034",
        "expiryDate":  "18/05/2039",
        "amount":  "104.287,50 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840751",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "13/04/2034",
        "expiryDate":  "25/05/2039",
        "amount":  "104.424,95 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840752",
        "riskName":  "Seat Leon",
        "contractDate":  "18/04/2034",
        "expiryDate":  "01/06/2039",
        "amount":  "104.562,40 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840753",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "23/04/2034",
        "expiryDate":  "08/06/2039",
        "amount":  "104.699,85 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840754",
        "riskName":  "Peugeot 3008",
        "contractDate":  "28/04/2034",
        "expiryDate":  "15/06/2039",
        "amount":  "104.837,30 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840755",
        "riskName":  "Kia Sportage",
        "contractDate":  "03/05/2034",
        "expiryDate":  "22/06/2039",
        "amount":  "104.974,75 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840756",
        "riskName":  "Toyota Corolla",
        "contractDate":  "08/05/2034",
        "expiryDate":  "29/06/2039",
        "amount":  "105.112,20 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840757",
        "riskName":  "Renault Clio",
        "contractDate":  "13/05/2034",
        "expiryDate":  "06/07/2039",
        "amount":  "105.249,65 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840758",
        "riskName":  "BMW X1",
        "contractDate":  "18/05/2034",
        "expiryDate":  "13/07/2039",
        "amount":  "105.387,10 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840759",
        "riskName":  "Audi A3",
        "contractDate":  "23/05/2034",
        "expiryDate":  "20/07/2039",
        "amount":  "105.524,55 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840760",
        "riskName":  "Tesla Model 3",
        "contractDate":  "28/05/2034",
        "expiryDate":  "27/07/2039",
        "amount":  "105.662,00 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840761",
        "riskName":  "Hyundai Ioniq",
        "contractDate":  "02/06/2034",
        "expiryDate":  "03/08/2039",
        "amount":  "105.799,45 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840762",
        "riskName":  "Seat Leon",
        "contractDate":  "07/06/2034",
        "expiryDate":  "10/08/2039",
        "amount":  "105.936,90 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840763",
        "riskName":  "Volkswagen Golf",
        "contractDate":  "12/06/2034",
        "expiryDate":  "17/08/2039",
        "amount":  "106.074,35 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840764",
        "riskName":  "Peugeot 3008",
        "contractDate":  "17/06/2034",
        "expiryDate":  "24/08/2039",
        "amount":  "106.211,80 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840765",
        "riskName":  "Kia Sportage",
        "contractDate":  "22/06/2034",
        "expiryDate":  "31/08/2039",
        "amount":  "106.349,25 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840766",
        "riskName":  "Toyota Corolla",
        "contractDate":  "27/06/2034",
        "expiryDate":  "07/09/2039",
        "amount":  "106.486,70 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840767",
        "riskName":  "Renault Clio",
        "contractDate":  "02/07/2034",
        "expiryDate":  "14/09/2039",
        "amount":  "106.624,15 €",
        "status":  "Pagada"
    },
    {
        "policyNumber":  "75840768",
        "riskName":  "BMW X1",
        "contractDate":  "07/07/2034",
        "expiryDate":  "21/09/2039",
        "amount":  "106.761,60 €",
        "status":  "Vencido"
    },
    {
        "policyNumber":  "75840769",
        "riskName":  "Audi A3",
        "contractDate":  "12/07/2034",
        "expiryDate":  "28/09/2039",
        "amount":  "106.899,05 €",
        "status":  "Pendiente"
    },
    {
        "policyNumber":  "75840770",
        "riskName":  "Tesla Model 3",
        "contractDate":  "17/07/2034",
        "expiryDate":  "05/10/2039",
        "amount":  "107.036,50 €",
        "status":  "Pagada"
    }
]




