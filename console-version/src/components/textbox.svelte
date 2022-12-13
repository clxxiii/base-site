<script lang="ts">
  let bootEl;
  let logo;
  fetch("./boot.txt").then(x =>
    x.text().then(fakeBoot)
   )

   async function fakeBoot(x: string) {
      // Get loading bar stages
      let load: string[] = ( await 
        (
          await fetch("./loadstages.txt")
          )
        .text()
        )
        .split("\n")
        .filter(x => x != "");

      let boot: string[] = x.split("\n").filter(x => x != "");
      let startTime: number = Date.now();
      let maxLineLength: number = 85;
      await new Promise(resolve => setTimeout(resolve, 2000));
      for (const line of boot) {
        let time = ((Date.now() - startTime) / 1000).toFixed(3);
        let loadLine = `<div>[${time}] ${line}: </div>\n`
        let lineMargin = maxLineLength - loadLine.length - "<div></div>\n".length
        let lineMarginString = "";
        for (let i = 0; i < lineMargin; i++) {
          lineMarginString += " "
        }
        bootEl.innerHTML += loadLine;
        let timeBonus = Math.random() * 0.2;
        for (const thing of load) {
          let possibleDelays = [0,5,15];
          let lines = bootEl.innerHTML.split("\n").filter(x => x != "");
          let line = lines[lines.length - 1].split(": ");
          let delay = possibleDelays[Math.round(Math.random() * possibleDelays.length)] * timeBonus
          await new Promise(resolve => setTimeout(resolve, delay)); 
          lines[lines.length - 1] = `${line[0]}: ${lineMarginString}${thing}</div>\n`;
          bootEl.innerHTML = lines.join("\n");
        }
      }

      bootEl.innerHTML = "";
      await new Promise(resolve => setTimeout(resolve, 500));
      logo.style.opacity = 0.2;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.4;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.6;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.8;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 1;
      await new Promise(resolve => setTimeout(resolve, 2000));
      logo.style.opacity = 0.8;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.6;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.4;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0.2;
      await new Promise(resolve => setTimeout(resolve, 250));
      logo.style.opacity = 0;
   }
</script>

<div class="wrap">
  <div bind:this={bootEl} class="boot">
    <div>Welcome to Linuclx</div>
    <br />
  </div>
  <div class="logo" bind:this={logo}>Hi!</div>
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
    white-space: pre;
    line-height: 1;
    text-shadow: 0 0 5px white
  }
  .wrap {
    position: relative;
    max-width: 800px;
    aspect-ratio: calc(16/9);
    font-family: "Jetbrains Mono NF";
    width: 100%;
    background: black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .logo {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
