
        document.getElementById('donationButton').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Your Input is Invalid. try to type a Valid Input.")
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

            document.getElementById('my_modal_1').showModal();

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })



        
        document.getElementById('donationButton2').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount2').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Your Input is Invalid. try to type a Valid Input.")
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

            document.getElementById('my_modal_1').showModal();

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })



        document.getElementById('donationButton3').addEventListener('click', function(){
            let inputAmount = document.getElementById('inputAmount3').value;
            if (isNaN(inputAmount) || parseInt(inputAmount) <= 0) {alert("Your Input is Invalid. try to type a Valid Input.")
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

            document.getElementById('my_modal_1').showModal();

            }
            else {
                alert ('Insufficient Balance🙂')
            }
        })

        
  document.getElementById('btn1').addEventListener(
    'click', function(){
        document.getElementById('donationSection').classList.remove('hidden');
        document.getElementById('donationHistory').classList.add('hidden');
        document.getElementById('btn1').classList.add('bg-[rgb(180,244,97)]');
        document.getElementById('btn1').classList.remove('hover:bg-gray-200', 'hover:font-bold', 'bg-white')
        document.getElementById('btn2').classList.add('hover:bg-gray-200', 'hover:font-bold', 'bg-white');
        document.getElementById('btn2').classList.remove('bg-[rgb(180,244,97)]')
    }
  )

  document.getElementById('btn2').addEventListener(
    'click', function(){
        document.getElementById('donationSection').classList.add('hidden');
        document.getElementById('donationHistory').classList.remove('hidden');
        document.getElementById('btn2').classList.add('bg-[rgb(180,244,97)]');
        document.getElementById('btn2').classList.remove('hover:bg-gray-200', 'hover:font-bold', 'bg-white')
        document.getElementById('btn1').classList.add('hover:bg-gray-200', 'hover:font-bold', 'bg-white');
        document.getElementById('btn1').classList.remove('bg-[rgb(180,244,97)]')
    }
  )