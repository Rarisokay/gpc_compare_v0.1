<script>
  import { redInserts, _insertData2 } from "./store";
  import { myFunction } from "./gpc";

  let fileReady = false;
  let _redInserts = [];
  let insertData2;
  export let _fileNames;

  _insertData2.subscribe((value) => {
    insertData2 = value;
  });
  redInserts.subscribe((value) => {
    _redInserts = value;
    fileReady = true;
  });

  export let input = {
    version1: "",
    version2: "",
    designername: "",
    checkername: "",
  };
</script>

<main4>
  <h2 class="pointer">Inserted Items</h2>
  <h5 class="detail">
    Designer:{input.designername} &emsp Checker:{input.checkername} &emsp Version:{input.version1}
    and &emsp {input.version2}
  </h5>
  <p class="pointer">
    Report insert colour = <strong style="color:red">Red</strong>
  </p>

  <!-- <input   
    type="text"
    id="myInput"
    on:keyup={() => {
      myFunction();
    }}
    placeholder="Search for names.."
    title="Type in a name"
  /> -->
  <table id="myTable">
    <thead>
      <tr class="header">
        <th colspan="3">{_fileNames[1].split("\\").slice(-1)}</th>
      </tr>
      <tr class="header">
        <th>Name</th>
        <th>Bit</th>
        <th>Mnemonic</th>
      </tr>
    </thead>
    {#each insertData2 as data2}
      {#if _redInserts.includes(data2.name)}
        {#each data2.bits as bit, i}
          <tr>
            {#if i == 0}
              <td rowspan={data2.bits.length}>{data2.name}</td>
            {/if}
            <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
            <td>{data2.mnemonics[i]}</td>
          </tr>
        {/each}
      {/if}
    {/each}
  </table>
</main4>

<style>
  h2 {
    color: #80489c;
    font-weight: bold;
    font-size: 250%;
    text-align: center;
    font-family: monospace;
  }
  p {
    color: #000000;
    font-size: medium;
    font-weight: 100;
  }

  Main4 {
    padding: 1em;
    max-width: 240px;
    margin: 0 Auto;
    height: 100%;
    font-family: monospace;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  button {
    background-color: #04aa6d;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-family: monospace;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    margin-left: -5px;
    margin-right: -5px;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th,
  td {
    text-align: left;
    padding: 16px;
  }

  section {
    width: 300px;
  }
  .content {
    background-color: #f4f4f4;
    padding: 0.5em;
  }
  .detail {
    display: none;
  }

  #myInput {
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 100%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }

  #myTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: large;
  }

  #myTable th {
    text-align: left;
    padding: 12px;
    border: 1px solid #ddd;
  }
  #myTable td {
    text-align: left;
    padding: 12px;
    border: 1px solid #ddd;
    color: rgb(239, 1, 55);
    background-color: rgb(255, 232, 231);
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header,
  #myTable tr:hover {
    background-color: #f1f1f1;
  }
  .pointer {
    cursor: pointer;
  }

  .inserted {
    color: rgb(239, 1, 55);
    background-color: rgb(255, 232, 231);
  }
  @media print {
    @page {
      margin: auto;
      size: A4;
    }
    h1 {
      display: none;
    }

    #myTable tr {
      page-break-inside: avoid;
      page-break-after: auto;
    }
    #myTable td {
      text-align: left;
      padding: 8px;
      border: 1px solid #ddd;
      font-size: 12px;
      page-break-inside: avoid;
    }
    .detail {
      display: contents;
      bottom: 0;
      right: 0;
    }
    .notprint {
      display: none;
    }
  }
</style>
