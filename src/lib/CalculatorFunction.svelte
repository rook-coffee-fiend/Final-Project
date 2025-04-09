<script>
  let num1 = "";
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let sum = 0;

  function addNumbers() {
    if (num1 === 'overnights') {
      // Apply overnight pricing logic
    } else if (num1 === 'dropins') {
      // Apply drop-in pricing logic
    }
    sum = Number(num1) + Number(num2)  + Number(num3) + Number(num4)+ Number(num5);
    Math.floor(70);
  }
</script>


<!--<div>
  <label for="num1">Would you prefer overnights, or drop-in visits?</label>  
  <input type="number" id="num1" bind:value={num1}>
</div>-->

<div>
  <label for="num1">Would you prefer Overnights or Drop-in Visits?</label>  
  <select id="num1" bind:value={num1}>
    <option value="" disabled selected>Select one</option>
    <option value="overnights">Overnights</option>
    <option value="dropins">Drop-in Visits</option>
  </select>
</div>

<!--DO BUTTONS INSTEAD. Click on either Overnights or Drop-in Visits-->
  <!--Overnights leads to: Medication yes/no: +5 vs +0 -->
    <!--More than two animals yes/no: +10 vs +0 -->
    <!--Aggression or behavioral needs yes/no: +5 vs +0 -->

    <!--How many nights? NUMBER-->
  
    <!--((sum)+50 * (# of nights))-->


  <!--Drop-ins leads to: Medication yes/no: +5 vs +0 -->
    <!--More than two animals yes/no: +10 vs +0 -->
    <!--Aggression or behavioral needs yes/no: +5 vs +0 -->

    <!--How many drop-ins per day? (1=35; 2=30; 3=25)-->
    <!--How many days? NUMBER-->
  
    <!--((sum)+(35 or 30 or 25) * (# of days))-->

<!--AFTER EVERYTHING: Holiday? if yes, +10-->


<div>
  <label for="num2">How many pets do you have?</label>
  <input type="select" id="num2" bind:value={num2}>
    <!--if/else: 3+ = 10; <=2 = 0.-->

</div>

<div>
  <label for="num3">Do any of your animals exhibit aggression? </label>
    <!--if/else: yes = 5; no = 0-->
  <input type="number" id="num3" bind:value={num3}>
</div>

<div>
  <label for="num4">Do your critters require medication administration: such as pills, inhalers, insulin injections, etc.? </label>
  <!--if/else: yes = 10; no = 0.-->
  <input type="number" id="num4" bind:value={num4}>
</div>


<button on:click={addNumbers}>Calculate</button>

<div>
  <p>Pet care estimate: ${sum}</p>
</div>