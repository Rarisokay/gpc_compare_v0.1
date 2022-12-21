<script>
  import { readGPCFile } from "./gpc";
  import { sortBlockType } from "./sorting";
  let rowindex = 0;
  export let _fileNames;
  let insertData1 = [];
  let insertData2 = [];

  function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  readGPCFile(_fileNames[0]).then((data1) => {
    insertData1 = sortBlockType(data1);
    readGPCFile(_fileNames[1]).then((data2) => {
      insertData2 = sortBlockType(data2);
    });
  });

  function printPageArea(areaID) {
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
  }
  export let input = {
    version1: "",
    version2: "",
    designername: "",
    checkername: "",
  };
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<main5>
  <h2 class="pointer">Show All Items</h2>
  <h5 class="detail">
    Designer:{input.designername} &emsp Checker:{input.checkername} &emsp Version:{input.version1}
    and &emsp {input.version2}
  </h5>

  <!--<input
    type="text"
    id="myInput"
    on:keyup={() => {
      myFunction();
    }}
    placeholder="Search for names.."
    title="Type in a name"
  /> -->
  <div class="row">
    <div class="column">
      <table id="myTable">
        <thead>
          <tr class="header">
            <th colspan="3">{_fileNames[0].split("\\").slice(-1)}</th>
          </tr>
          <tr class="header">
            <th>Item</th>
            <th>Bit</th>
            <th>Mnemonic</th>
          </tr>
        </thead>
        {#each insertData1 as data1}
          {#each data1.bits as bit, i}
            <tr>
              {#if i == 0}
                <td rowspan={data1.bits.length}>{data1.name}</td>
              {/if}
              <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
              <td>{data1.mnemonics[i]}</td>
            </tr>
          {/each}
        {/each}
      </table>
    </div>

    <div class="column">
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
          {#each data2.bits as bit, i}
            <tr>
              {#if i == 0}
                <td rowspan={data2.bits.length}>{data2.name}</td>
              {/if}
              <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
              <td>{data2.mnemonics[i]}</td>
            </tr>
          {/each}
        {/each}
      </table>
    </div>
  </div>
</main5>

<style>
  p {
    color: #000000;
    font-size: medium;
    font-weight: 100;
  }
  h2 {
    color: #80489c;
    font-weight: bold;
    font-size: 250%;
    text-align: center;
    font-family: monospace;
  }
  h3 {
    color: #000000;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  Main5 {
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

  #myTable th,
  #myTable td {
    text-align: left;
    padding: 12px;
    border: 1px solid #ddd;
    font-size: 16px;
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
  .detail {
    display: none;
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
