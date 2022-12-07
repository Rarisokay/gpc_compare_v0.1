<script>
  import { sortBlockType } from "./sorting"; //
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

  const nextPage = () => {
    readGPC();
    page++;
  };
  const previousPage = () => {
    page--;
  };
  import { readGPCFile } from "./gpc";

  export let _fileNames;
  let insertData1 = [];
  let insertData2 = [];

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
</script>

<main4>
  <h2 class="pointer">Inserted Items</h2>
  <p class="pointer">
    Report insert colour = <strong style="color:red">Red</strong>
  </p>

  <input
    type="text"
    id="myInput"
    on:keyup={() => {
      myFunction();
    }}
    placeholder="Search for names.."
    title="Type in a name"
  />
  <table id="myTable">
    <tr class="header">
      <th colspan="3">2nd GPC file</th>
    </tr>
    <tr class="header">
      <th>Name</th>
      <th>Bit</th>
      <th>Mnemonic</th>
    </tr>
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
</style>
