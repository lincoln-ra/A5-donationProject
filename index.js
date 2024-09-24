
        document.getElementById('donationButton').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Donation is not a joke😒 Input a Valid Amount😊")
                return;
            }
            inputAmount = parseInt (inputAmount);
            let mainBalanceElement = document.getElementById('mainBalance');
            let donatedBalanceElement = document.getElementById('donatedBalance');
            let mainBalance = parseInt(mainBalanceElement.innerText);
            let donatedBalance = parseInt(donatedBalanceElement.innerText);
            if (inputAmount <= mainBalance){
                mainBalance = mainBalance-inputAmount;
                donatedBalance = donatedBalance+inputAmount;


                mainBalanceElement.innerText = mainBalance;
            donatedBalanceElement.innerText = donatedBalance;
            
            document.getElementById('inputAmount').value = '';



            let donationTitle = document.getElementById('title').innerText;

            let historyItem = document.createElement('div');

            historyItem.className = 'border rounded-md p-4 mb-4'

            historyItem.innerHTML = `
            <p class="font-bold">Successfully donated at  ${donationTitle}   
            <p>Donated at:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}  
            `
        
            let history = document.getElementById('donationHistory');
            history.appendChild(historyItem);

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })



        
        document.getElementById('donationButton2').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount2').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Donation is not a joke😒 Input a Valid Amount😊")
                return;
            }
            inputAmount = parseInt (inputAmount);
            let mainBalanceElement = document.getElementById('mainBalance');
            let donatedBalanceElement = document.getElementById('donatedBalance2');
            let mainBalance = parseInt(mainBalanceElement.innerText);
            let donatedBalance = parseInt(donatedBalanceElement.innerText);
            if (inputAmount <= mainBalance){
                mainBalance = mainBalance-inputAmount;
                donatedBalance = donatedBalance+inputAmount;


                mainBalanceElement.innerText = mainBalance;
            donatedBalanceElement.innerText = donatedBalance;
            
            document.getElementById('inputAmount2').value = '';



            let donationTitle = document.getElementById('title2').innerText;

            let historyItem = document.createElement('div');

            historyItem.className = 'border rounded-md p-4 mb-4'

            historyItem.innerHTML = `
            <p class="font-bold">Successfully donated at  ${donationTitle}   
            <p>Donated at:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}  
            `
        
            let history = document.getElementById('donationHistory');
            history.appendChild(historyItem);

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })



        document.getElementById('donationButton3').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount3').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Donation is not a joke😒 Input a Valid Amount😊")
                return;
            }
            inputAmount = parseInt (inputAmount);
            let mainBalanceElement = document.getElementById('mainBalance');
            let donatedBalanceElement = document.getElementById('donatedBalance3');
            let mainBalance = parseInt(mainBalanceElement.innerText);
            let donatedBalance = parseInt(donatedBalanceElement.innerText);
            if (inputAmount <= mainBalance){
                mainBalance = mainBalance-inputAmount;
                donatedBalance = donatedBalance+inputAmount;


                mainBalanceElement.innerText = mainBalance;
            donatedBalanceElement.innerText = donatedBalance;
            
            document.getElementById('inputAmount3').value = '';



            let donationTitle = document.getElementById('title3').innerText;

            let historyItem = document.createElement('div');

            historyItem.className = 'border rounded-md p-4 mb-4'

            historyItem.innerHTML = `
            <p class="font-bold">Successfully donated at  ${donationTitle}   
            <p>Donated at:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}  
            `
        
            let history = document.getElementById('donationHistory');
            history.appendChild(historyItem);

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })
        
  