<script>
  import { greenInserts, _insertData1 } from "./store";
  import { myFunction } from "./gpc";

  let fileReady = false;
  let _greenInserts = [];
  let insertData1;

  _insertData1.subscribe((value) => {
    insertData1 = value;
  });
  greenInserts.subscribe((value) => {
    _greenInserts = value;
    fileReady = true;
  });
</script>

<main3>
  <h2 class="pointer">Deleted Items</h2>
  <p class="pointer">
    Report delete colour = <strong style="color:green">Green</strong>
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
      <th colspan="3">1st GPC file</th>
    </tr>
    <tr class="header">
      <th>Name</th>
      <th>Bit</th>
      <th>Mnemonic</th>
    </tr>
    {#each insertData1 as data1}
      {#if _greenInserts.includes(data1.name)}
        {#each data1.bits as bit, i}
          <tr>
            {#if i == 0}
              <td rowspan={data1.bits.length}>{data1.name}</td>
            {/if}
            <td class={i % 2 == 0 ? "deleted" : "inserted"}>{bit}</td>
            <td>{data1.mnemonics[i]}</td>
          </tr>
        {/each}
      {/if}
    {/each}
  </table>
</main3>

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
    font-size: large;
    font-weight: 100;
  }

  Main3 {
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
    color: green;
    background-color: rgb(213, 250, 244);
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
</style>
