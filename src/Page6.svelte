<script>
</script>

<body>
  <h1>Test on grid</h1>
  <div class="all">
    <div class="wrapper">
      <div class="name1">File's name</div>
      <div class="name2">File's name</div>
      <div class="head">Item</div>
      <div class="head">Bit</div>
      <div class="head">Mnemonic</div>
      <div class="head">Item</div>
      <div class="head">Bit</div>
      <div class="head">Mnemonic</div>

      <div>P.101</div>
      <div class="nested">
        <div>Lorem</div>
        <div>Lorem</div>
        <div>Lorem</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div>

      <div>P.101</div>
      <div class="nested">
        <div>TR</div>
        <div>TP</div>
        <div>USR</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div>

      <div>P.102</div>
      <div class="nested">
        <div>Lorem</div>
        <div>Lorem</div>
        <div>Lorem</div>
        <div>Lorem</div>
        <div>Lorem</div>
        <div>Lorem</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div>

      <div>P.102</div>
      <div class="nested">
        <div>TR</div>
        <div>TP</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div>

      <div>P.102</div>
      <div class="nested">
        <div>Lorem</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
      </div>

      <div>P.102</div>
      <div class="nested">
        <div>TR</div>
        <div>TP</div>
        <div>TR</div>
        <div>TP</div>
        <div>TR</div>
        <div>TP</div>
        <div>TR</div>
        <div>TP</div>
      </div>
      <div class="nested">
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
        <div>Lorem, ipsum.</div>
      </div>
    </div>
  </div>
</body>

<style>
  h1 {
    text-align: center;
  }
  .all {
    background: #ddd;
    padding: 0.2em;
  }

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr 2fr;
    /*
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    */
    grid-gap: 0.2em;
    /*grid-row-gap: 0.2em;*/
    /*grid-auto-rows: 100px;*/
    grid-auto-rows: minmax(50px, auto);
  }
  .wrapper > div {
    background: white;
    padding: 1em;
  }
  .wrapper > div:nth-child(1) {
    background: #f1f1f1;
  }
  .wrapper > div:nth-child(2) {
    background: #f1f1f1;
  }
  .wrapper > .head {
    background: #f1f1f1;
  }

  .nested {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: minmax(40px auto);
    grid-gap: 0.2em;
    justify-items: stretch;
    align-items: stretch;
    align-self: flex-start;
  }

  .nested > div {
    border: green 1px solid;
  }

  .name1 {
    grid-column: 1/4;
  }
  .name2 {
    grid-column: 4/7;
  }

  @media screen {
    body {
      font-family: monospace;
      font-size: 16px;
    }
  }
  @media print {
    body {
      font-family: monospace;
      font-size: 12px;
    }
  }
</style>
