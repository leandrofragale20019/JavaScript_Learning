let count = 0;

        const plusBtn = document.getElementById("btnplus");
        const minusBtn = document.getElementById("btnminus");
        const counter = document.getElementById("counter");

        counter.innerHTML = count;

        colorDisplay();

        plusBtn.onclick = function() {
            count = count + 1;
            counter.innerHTML = count;
            colorDisplay();
        }

        minusBtn.onclick = function(){
            count = count - 1;
            counter.innerHTML = count;
            colorDisplay();
        }


        function colorDisplay(){
            if (count > 0){
                counter.style.color = "green"
            } else if (count == 0){
                counter.style.color = "orange"
            } else
                counter.style.color = "red"
            
        }