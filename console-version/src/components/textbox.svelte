<script lang="ts">

  let bootEl;
  let boot = []
  let lineDelay = 11;
  fetch("/boot.txt").then(x =>
    x.text().then(async (x) => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      boot = x.split("\n")
      let startTime = Date.now();
      for (const line of boot) {
        await new Promise(resolve => setTimeout(resolve, lineDelay));
        bootEl.innerHTML += `<div>[${((Date.now() - startTime) / 1000).toFixed(3)}] ${line}</div>`; 
      }
      bootEl.innerHTML = "_"
    })
   )
</script>

<div class="wrap">
  <div bind:this={bootEl} class="boot">Welcome to Linuclx
  </div>
</div>
<style>
 .boot {
   display: flex;
   flex-direction: column;
   overflow: hidden;
   justify-content: end;
    font-family: "Unifont";
    font-weight: bold;
    text-align: left;
    text-shadow: 0 0 5px white
  }
 .wrap {
   aspect-ratio: calc(16/9);
   width: 100%;
   background: black;
   display: flex;
   flex-direction: column;
   overflow: hidden;
 }
</style>
