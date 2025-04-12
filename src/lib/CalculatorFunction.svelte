<script lang="ts">
  let careType = "";
  let meds = "";
  let petCount = 0;
  let behavior = "";
  let nights = 0;
  let visitsPerDay = "";
  let days = 0;
  let isHoliday = "";
  let sum = 0;

  function calculateEstimate() {
    let total = 0

    //Care type breakdown! 
    //Overnights calculation
    if (careType ==='overnights') {
      total += meds === 'yes' ? 5 : 0;
      total += petCount > 2 ? 10 : 0;
      total += behavior === 'yes' ? 5 : 0;
      total += 50 * nights;
      if (isHoliday === 'yes') {
        total += 10 * nights;
      }
    }

    //Drop-in calculation
    else if (careType === 'dropins') {
      total += meds === 'yes' ? 5 : 0;
      total += petCount > 2 ? 10 : 0;
      total += behavior === 'yes' ? 10 : 0;

      let ratePerVisit = 0;
      if (visitsPerDay === '1') ratePerVisit = 35;
      else if (visitsPerDay === '2') ratePerVisit = 30;
      else if (visitsPerDay === '3') ratePerVisit = 25;

      total += ratePerVisit * days;
      if (isHoliday === 'yes') {
        total += 10 * days;
      }
    }

    sum = total;
    
  }
</script>



<!-- Type of Care -->
<div class="selection">
  <label for="careType">Would you prefer to have overnights, or drop-in visits?</label>
  <select id="careType" bind:value={careType}>
    <option value="" disabled selected>Select one</option>
    <option value="overnights">Overnights</option>
    <option value="dropins">Drop-ins</option>
  </select>
</div>

<!-- Common Fields -->
{#if careType}
  <div class="selection">
    <label for="meds">Does your pet need medication administered- such as insulin injections, inhalers, or pills?</label>
    <select id="meds" bind:value={meds}>
      <option value="" disabled selected>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>

  <div>
    <label for="petCount">How many pets do you have?</label>
    <input id="petCount" type="number" min="1" bind:value={petCount} />
  </div>

  <div class="selection">
    <label for="behavior">Does your pet exhibit aggression, pica compulsions, or other special-needs behaviors?</label>
    <select id="behavior" bind:value={behavior}>
      <option value="" disabled selected>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
{/if}


<!-- Overnight-Specific -->
{#if careType === 'overnights'}
  <div>
    <label for="nights">How many nights do you need care for?</label>
    <input id="nights" type="number" min="1" bind:value={nights} />
  </div>
{/if}

<!-- Drop-in-Specific -->
{#if careType === 'dropins'}
  <div class="selection">
    <label for="visitsPerDay">How many visits <strong>per day</strong> do you anticipate needing?</label>
    <select id="visitsPerDay" bind:value={visitsPerDay}>
      <option value="" disabled selected>Select</option>
      <option value="1">1 visit per day ($35)</option>
      <option value="2">2 visits per day ($30)</option>
      <option value="3">3 visits per day ($25)</option>
    </select>
  </div>

  <div>
    <label for="days">How many days of care do you need?</label>
    <input id="days" type="number" min="1" bind:value={days} />
  </div>
{/if}


<!-- Holiday surcharge-->
{#if careType}
  <div class="selection">
    <label for="isHoliday">Do the dates of pet-care fall during during a busy season and/or holiday weekend?</label>
    <select id="isHoliday" bind:value={isHoliday}>
      <option value="" disabled selected>Select</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  </div>
{/if}


<button on:click={calculateEstimate}>Calculate</button>

<div>
  <p>Pet care estimate: ${sum}</p>
</div>


<style>
  div{
    font-size: 1.1rem;
  }
  

  input{
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  select{
    font-size: 1rem;
    border-radius: 2px;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }

</style>